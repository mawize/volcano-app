import { darkThemeId } from "../constants/themeIds";

const buttonBackgroundColor = "#242526";

const dark = {
  themeId: darkThemeId,
  backgroundColor: "black",
  textColor: "antiquewhite",
  borderStyle: "solid",
  borderColor: "darkgray",
  iconColor: "darkviolet",
  Button: { 
    backgroundColor: buttonBackgroundColor,
    Active: {
      textColor: "darkviolet"
    }
  },
  StartScreen: {
    textColor: "darkviolet",
  },
  Navigation: {
    borderColor: "darkviolet",
    textColor: "darkviolet"
  },
  TemperatureRange: {
    Slider: {
      background: "black",
      borderColor: "orange",
    }
  },
  ToggleButton: {
    textColor: "#fff",
    Slider: {
      borderColor: "#f8f9fa",
      backgroundColor: "lightgray",
      Active: {
        backgroundColor: "lightgray",
      }
    },
    Active: {
      borderColor: "darkviolet",
      textColor: "#fff",
    },
  },
  WorkflowEditorAccordionButton: {
    backgroundColor: "black",
    Active: { 
      backgroundColor: "darkgray",
    }
  },
};

export default dark;
