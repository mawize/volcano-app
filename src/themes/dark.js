import { darkThemeId } from "../constants/themeIds";

const buttonbackgroundColor = "#242526";
const dark = {
  themeId: darkThemeId,
  Button: { 
    backgroundColor: buttonbackgroundColor,
    Active: {
      textColor: "darkviolet",
      backgroundColor: buttonbackgroundColor,
      borderColor: "darkviolet",
    }
  },
  borderColor: "darkgray",
  PlusMinusButton: {
    backgroundColor: buttonbackgroundColor,
    borderColor: "darkgray",
  },
  backgroundColor: "black",
  textColor: "antiquewhite",
  iconColor: "darkviolet",
  StartScreen: {
    textColor: "darkviolet",
  },
  Navigation: {
    borderColor: "darkviolet",
  },
  TemperatureRange: {
    lowTemperatureColor: "#f53803",
    highTemperatureColor: "#f5d020",
    background: "linear-gradient(315deg, #f53803 0%, #f5d020 74%)",
    Slider: {
      backgroundColor: "black",
      borderColor: "orange",
    }
  },
  workflowEditor: {
    accordianExpandedColor: "darkgray",
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "lightgray",
      borderColor: "#f8f9fa",
    },
    backgroundColor: buttonbackgroundColor,
    borderColor: "darkgray",
    textColor: "#fff",
    Active: {
      backgroundColor: buttonbackgroundColor,
      borderColor: "darkviolet",
      textColor: "#fff",
    },
  },
};

export default dark;
