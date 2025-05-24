import { lightThemeId } from "../constants/themeIds";

const buttonbackgroundColor = "lightgray";

const light = {
  themeId: lightThemeId,
  author: "ImACoderImACoderImACoder",
  borderStyle: "solid",
  borderColor: "#FF6600",
  Button: { 
    backgroundColor: buttonbackgroundColor,
    Active: {
      textColor: "white",
      backgroundColor: "#FF6600",
      borderColor: "white",
    }
  },
  CurrentTemperatureDisplay: {
    textColor: "#FF6600"
  },
  TargetTemperatureDisplay: {
    textColor: "black"
  },
  backgroundColor: "white",
  textColor: "black",
  iconColor: "#FF6600",
  StartScreen: {
    textColor: "#FF6600",
  },
  Navigation: { 
    textColor: "black",
    borderColor: "#FF6600", 
  },
  PlusMinusButton: {
    backgroundColor: buttonbackgroundColor,
    textColor: "black",
    borderColor: "FF6600",
  },
  WorkflowEditorAccordionButton: {
    backgroundColor: "white",
    Active: { 
      backgroundColor: "#FF6600",
    }
  },
  TemperatureRange: {
    background: "linear-gradient(315deg, #f53803 0%, #f5d020 74%)",
    Slider: {
      background: "black",
      borderColor: "orange",
    }
  },
  ToggleButton: {
    Slider: {
      backgroundColor: buttonbackgroundColor,
      borderColor: "#f8f9fa",
      Active: {
        backgroundColor: "#FF6600",
      }
    },
    backgroundColor: buttonbackgroundColor,
    borderColor: "black",
    textColor: "black",
    Active: {
      backgroundColor: "#FF6600",
      borderColor: "black",
      textColor: "#fff",
    }
  },
};

export default light;
