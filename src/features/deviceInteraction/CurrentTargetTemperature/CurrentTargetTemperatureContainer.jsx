import { convertToFahrenheitFromCelsius } from "../../../services/utils";
import { useSelector } from "react-redux";
import { DEGREE_SYMBOL } from "../../../constants/temperature";
import CurrentTargetTemperature from "./CurrentTargetTemperature";

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
  return (
    <CurrentTargetTemperature
      style={{ opacity: isHeatOn ? "1" : "0.3725", transition: "all 0.35s" }}
      currentTargetTemperature={temperature}
      temperatureSuffix={temperatureSuffix}
    />
  );
}
