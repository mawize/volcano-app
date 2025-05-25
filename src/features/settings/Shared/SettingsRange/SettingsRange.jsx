import { Range } from "react-range";
import { useTheme } from "styled-components";

export default function SettingsRange({
  step,
  min,
  max,
  values,
  onChange,
  onFinalChange,
}) {
  const theme = useTheme();
  return (
    <Range
      step={step}
      min={min}
      max={max}
      values={values}
      onChange={(values) => onChange(values)}
      onFinalChange={onFinalChange}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            display: "flex",
            flexGrow: "1",
            marginTop: "20px",
            marginBottom: "25px",
            marginLeft: "25px",
            borderRadius: ".25rem",
            height: "6px",
            width: "200px",
            background: `${theme.get("Button.TemperatureRange.background")}`,
            borderWidth: "0px",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "42px",
            width: "42px",
            borderColor: theme.get("Button.TemperatureRange.Slider.borderColor"),
            borderStyle: "solid",
            borderWidth: theme.get("Button.TemperatureRange.Slider.borderWidth"),
            borderRadius: theme.get("Button.TemperatureRange.Slider.borderRadius"),
            background: theme.get("Button.TemperatureRange.Slider.background"),
          }}
        />
      )}
    />
  );
}
