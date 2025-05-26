import { darkThemeId } from "../constants/themeIds";

const accentColor = "darkviolet";

const dark = {
  themeId: darkThemeId,
  backgroundColor: "black",
  textColor: "antiquewhite",
  borderColor: "darkgray",
  iconColor: accentColor,
  Button: { 
    backgroundColor: "#242526",
    Active: {
      textColor: accentColor,
    }
  },
  StartScreen: {
    textColor: accentColor,
  },
  Navigation: {
    borderColor: accentColor,
    textColor: accentColor,
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
    },
    Active: {
      borderColor: accentColor,
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
