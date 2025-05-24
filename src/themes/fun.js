import { funId } from "../constants/themeIds";

const buttonbackgroundColor = "#201c1c";

const pride = {
  author: "ImACoderImACoderImACoder",
  themeId: funId,
  Button: { 
    backgroundColor: buttonbackgroundColor,
    Active: {
      textColor: "white",
      backgroundColor: "black",
      borderColor: "darkviolet",
    }
  },
  borderColor: "#D2D2D2",
  TemperatureDisplay: {
    textColor: "#ed75b3",
  },
  textColor: "white",
  PlusMinusButton: {
    backgroundColor: buttonbackgroundColor,
    borderColor: "#D2D2D2",
    textColor: "white",
  },
  backgroundColor: "black",
  iconColor: "darkviolet",
  StartScreen: {
    textColor: "darkviolet",
  },
  Navigation: { 
    textColor: "#ed75b3",
    borderColor: "darkviolet",
  },
  TemperatureRange: {
    lowTemperatureColor: "red",
    highTemperatureColor: "#ff5d7a",
    background: `linear-gradient(
        -90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 20%,
        rgba(208, 222, 33, 1) 30%,
        rgba(79, 220, 74, 1) 40%,
        rgba(63, 218, 216, 1) 50%,
        rgba(47, 201, 226, 1) 60%,
        rgba(28, 127, 238, 1) 70%,
        rgba(95, 21, 242, 1) 80%,
        rgba(186, 12, 248, 1) 90%,
        rgba(251, 7, 217, 1) 100%`,
    Slider: {
      background: `linear-gradient(
        90deg,
        rgb(85, 205, 252) 0%, rgb(85, 205, 252) 20%,
        rgb(247, 168, 184) 20%, rgb(247, 168, 184) 40%,
        rgb(255, 255, 255) 40%, rgb(255, 255, 255) 60%,
        rgb(247, 168, 184) 60%, rgb(247, 168, 184) 80%,
        rgb(85, 205, 252) 80%, rgb(85, 205, 252) 100%)`,
      borderColor: "white",
    }
  },
  workflowEditor: {
    accordianExpandedColor: "#2d3237",
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "white",
      borderColor: "#f8f9fa",
    },
    backgroundColor: buttonbackgroundColor,
    borderColor: "white",
    textColor: "black",
    Active: {
      backgroundColor:
        "linear-gradient(180deg,rgb(255,0,0) 0% 16.77%,rgb(255 153 0) 16.77% 33.54%,rgb(236 255 0) 33.54% 50.31%,rgb(75 255 0) 50.31% 67.08%,rgb(18 0 255) 67.08% 83.85%,rgb(143,0,255) 83.85% 100%)",
      borderColor: "gray",
      textColor: "white",
    }
  },
};

export default pride;
