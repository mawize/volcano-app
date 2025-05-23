import { darkThemeId } from "../constants/themeIds";

const buttonBackgroundColor = "#242526";
const dark = {
  themeId: darkThemeId,
  Button: { 
    backgroundColor: buttonBackgroundColor,
    Active: {
      textColor: "darkviolet",
      backgroundColor: buttonBackgroundColor,
      borderColor: "darkviolet",
    }
  },
  borderColor: "darkgray",
  PlusMinusButton: {
    backgroundColor: buttonBackgroundColor,
    borderColor: "darkgray",
  },
  backgroundColor: "black",
  textColor: "antiquewhite",
  iconColor: "darkviolet",
  temperatureRange: {
    lowTemperatureColor: "#f53803",
    highTemperatureColor: "#f5d020",
    background: "linear-gradient(315deg, #f53803 0%, #f5d020 74%)",
    rangeBoxColor: "black",
    rangeBoxBorderColor: "orange",
  },
  workflowEditor: {
    accordianExpandedColor: "darkgray",
  },
  ToggleButtons: {
    sliderBackgroundColorOn: "lightgray",
    sliderBorderColorOn: "#f8f9fa",
    onBackgroundColor: buttonBackgroundColor,
    onBorderColor: "darkviolet",
    onColor: "#fff",
    offBackgroundColor: buttonBackgroundColor,
    offBorderColor: "darkgray",
    offColor: "#fff",
  },
};

export default dark;
