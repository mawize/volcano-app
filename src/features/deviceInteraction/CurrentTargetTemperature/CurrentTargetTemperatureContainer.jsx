import { useRef } from "react";
import { getCharacteristic } from "../../../services/BleCharacteristicCache";
import { writeTemperatureUuid, heatOnUuid } from "../../../constants/uuids";
import {
  convertToUInt32BLE,
  convertToUInt8BLE,
  isValueInValidVolcanoCelciusRange,
} from "../../../services/utils";
import PlusMinusButton from "./PlusMinusButton";
import { AddToPriorityQueue } from "../../../services/bleQueueing";
import debounce from "lodash/debounce";
import { temperatureIncrementedDecrementedDebounceTime } from "../../../constants/constants";
import { setIsHeatOn, setTargetTemperature } from "../deviceInteractionSlice";

import { convertToFahrenheitFromCelsius } from "../../../services/utils";
import { useSelector, useDispatch } from "react-redux";
import { DEGREE_SYMBOL } from "../../../constants/temperature";
import CurrentTargetTemperature from "./CurrentTargetTemperature";
import { Div } from "./styledComponents";

export default function CurrentTargetTemperatureContainer() {
  const isF = useSelector((state) => state.settings.isF);
  const isHeatOn = useSelector((state) => state.deviceInteraction.isHeatOn);

  const currentTargetTemperature = useSelector(
    (state) => state.deviceInteraction.targetTemperature
  );

  const temperature = currentTargetTemperature
    ? isF
      ? convertToFahrenheitFromCelsius(currentTargetTemperature)
      : currentTargetTemperature
    : currentTargetTemperature;

  const temperatureSuffix = `${DEGREE_SYMBOL}${isF ? "F" : "C"} `;

  const dispatch = useDispatch();

  // we have to use refs for debounce to work properly in react functional components
  const onTemperatureIncrementDecrementDebounceRef = useRef(
    debounce((newTemp, disableAutoHeatOn) => {
      onClick(newTemp, disableAutoHeatOn)();
    }, temperatureIncrementedDecrementedDebounceTime)
  );

  const onClickIncrement = (incrementValue) => () => {
    if (!isHeatOn) {
      const blePayload = async () => {
        let characteristic, buffer;
        characteristic = getCharacteristic(heatOnUuid);
        buffer = convertToUInt8BLE(0);
        await characteristic.writeValue(buffer);
        dispatch(setIsHeatOn(true));
      };
      AddToPriorityQueue(blePayload);
    }
    const nextTemp = currentTargetTemperature + incrementValue;
    if (!isValueInValidVolcanoCelciusRange(nextTemp)) {
      return;
    }
    dispatch(setTargetTemperature(nextTemp));
    onTemperatureIncrementDecrementDebounceRef.current(nextTemp, true);
  };

  const onClick = (value, disableAutoHeatOn) => () => {
    if (!isValueInValidVolcanoCelciusRange(value)) {
      return;
    }

    const blePayload = async () => {
      let characteristic, buffer;

      if (currentTargetTemperature !== value) {
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

  return (
    <Div>     
      <PlusMinusButton
        key="decrementTemperatureButton"
        aria-label="Minus one temperature"
        onClick={onClickIncrement(-1)}
      />
      <CurrentTargetTemperature
        style={{ opacity: isHeatOn ? "1" : "0.3725", transition: "all 0.35s" }}
        currentTargetTemperature={temperature}
        temperatureSuffix={temperatureSuffix}
      />
      <PlusMinusButton
        key="incrementTemperatureButton"
        aria-label="Plus one temperature"
        onClick={onClickIncrement(1)}
      />
    </Div>
  );
}
