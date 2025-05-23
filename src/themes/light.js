import { lightThemeId } from "../constants/themeIds";

const buttonBackgroundColor = "lightgray";

const light = {
  themeId: lightThemeId,
  author: "ImACoderImACoderImACoder",
  borderStyle: "solid",
  borderColor: "#FF6600",
  Button: { 
    backgroundColor: buttonBackgroundColor,
    Active: {
      textColor: "white",
      backgroundColor: "#FF6600",
      borderColor: "white",
    }
  },
  currentTemperatureColor: "#FF6600",
  targetTemperatureColor: "black",
  backgroundColor: "white",
  textColor: "black",
  iconColor: "#FF6600",
  Navigation: { 
    textColor: "black",
    borderColor: "#FF6600", 
  },
  PlusMinusButton: {
    backgroundColor: buttonBackgroundColor,
    textColor: "black",
    borderColor: "FF6600",
  },
  workflowEditor: {
    accordianExpandedColor: "#FF6600",
  },
  temperatureRange: {
    lowTemperatureColor: "#f53803",
    highTemperatureColor: "#f5d020",
    background: "linear-gradient(315deg, #f53803 0%, #f5d020 74%)",
    rangeBoxColor: "black",
    rangeBoxBorderColor: "orange",
  },
  ToggleButtons: {
    sliderBackgroundColorOn: "#FF6600",
    sliderBackgroundColorOff: buttonBackgroundColor,
    sliderBorderColorOn: "#f8f9fa",
    onBackgroundColor: "#FF6600",
    onBorderColor: "black",
    onColor: "#fff",
    offBackgroundColor: buttonBackgroundColor,
    offBorderColor: "black",
    offColor: "black",
  },
};

export default light;
