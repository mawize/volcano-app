import { useEffect } from "react";
import { getCharacteristic } from "../../../services/BleCharacteristicCache";
import { writeTemperatureUuid, heatOnUuid } from "../../../constants/uuids";
import {
  convertToUInt32BLE,
  convertToUInt8BLE,
  convertCurrentTemperatureCharacteristicToCelcius,
  isValueInValidVolcanoCelciusRange,
} from "../../../services/utils";
import { AddToQueue, AddToPriorityQueue } from "../../../services/bleQueueing";
import { useSelector } from "react-redux";
import { setIsHeatOn, setTargetTemperature } from "../deviceInteractionSlice";
import { useDispatch } from "react-redux";
import WriteTemperature from "./WriteTemperature";
import { getDisplayTemperature } from "../../../services/utils";
import PrideText from "../../../themes/PrideText";

import store from "../../../store";

export default function WriteTemperatureContainer() {
  const targetTemperature = useSelector(
    (state) => state.deviceInteraction.targetTemperature
  );

  const isF = useSelector((state) => state.settings.isF);
  const isHeatOn = useSelector((state) => state.deviceInteraction.isHeatOn);
  const temperatureControlValues = useSelector(
    (state) => state.settings.config.temperatureControlValues
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const characteristic = getCharacteristic(writeTemperatureUuid);

    function handleTargetTemperatureChanged(event) {
      const targetTemperature =
        convertCurrentTemperatureCharacteristicToCelcius(event.target.value);
      if (
        store.getState().deviceInteraction.targetTemperature !==
        targetTemperature
      ) {
        dispatch(setTargetTemperature(targetTemperature));
      }
    }

    const blePayload = async () => {
      await characteristic.addEventListener(
        "characteristicvaluechanged",
        handleTargetTemperatureChanged
      );

      await characteristic.startNotifications();
      const value = await characteristic.readValue();
      const targetTemperature =
        convertCurrentTemperatureCharacteristicToCelcius(value);
      if (
        store.getState().deviceInteraction.targetTemperature !==
        targetTemperature
      ) {
        dispatch(setTargetTemperature(targetTemperature));
      }
    };
    AddToQueue(blePayload);
    return () => {
      const blePayload = async () => {
        await characteristic.removeEventListener(
          "characteristicvaluechanged",
          handleTargetTemperatureChanged
        );
      };
      AddToQueue(blePayload);
    };
  }, [dispatch]);

  useEffect(() => {
    const handler = () => {
      if (document.visibilityState === "visible") {
        setTimeout(() => {
          const blePayload = async () => {
            const characteristic = getCharacteristic(writeTemperatureUuid);
            const value = await characteristic.readValue();
            const targetTemperature =
              convertCurrentTemperatureCharacteristicToCelcius(value);
            if (
              store.getState().deviceInteraction.targetTemperature !==
              targetTemperature
            ) {
              dispatch(setTargetTemperature(targetTemperature));
            }
          };
          AddToQueue(blePayload);
        }, 250);
      }
    };
    document.addEventListener("visibilitychange", handler);

    return () => {
      document.removeEventListener("visibilitychange", handler);
    };
  }, [dispatch]);

  const onClick = (value, disableAutoHeatOn) => () => {
    if (!isValueInValidVolcanoCelciusRange(value)) {
      return;
    }

    const blePayload = async () => {
      let characteristic, buffer;

      if (targetTemperature !== value) {
        characteristic = getCharacteristic(writeTemperatureUuid);
        buffer = convertToUInt32BLE(value * 10);
        await characteristic.writeValue(buffer);
        dispatch(setTargetTemperature(value));
      }

      if (!isHeatOn && !disableAutoHeatOn) {
        characteristic = getCharacteristic(heatOnUuid);
        buffer = convertToUInt8BLE(0);
        await characteristic.writeValue(buffer);
        dispatch(setIsHeatOn(true));
      }
    };
    AddToPriorityQueue(blePayload);
  };
  
  const temperatureButtons = temperatureControlValues.map((item, index) => {
    return (
      <WriteTemperature
        key={index}
        onClick={onClick(item)}
        buttonText={<PrideText text={getDisplayTemperature(item, isF)} />}
        isActive={item === targetTemperature}
      />
    );
  });

  if (temperatureButtons.length % 2 !== 0) {
    temperatureButtons.push(
      <WriteTemperature
        key={999999}
        onClick={() => {}}
        buttonText={<PrideText text="" />}
      />
    );
  }

  return <div className="temperature-write-div">{temperatureButtons}</div>;
}
