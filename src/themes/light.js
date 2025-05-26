import { lightThemeId } from "../constants/themeIds";

const accentColor = "#FF6600";

const light = {
  themeId: lightThemeId,
  author: "ImACoderImACoderImACoder",  
  backgroundColor: "white",
  textColor: "black",
  borderColor: accentColor,
  iconColor: accentColor,
  StartScreen: {
    textColor: accentColor,
  },
  Navigation: { 
    textColor: "black",
    borderColor: accentColor, 
  },
  CurrentTemperatureDisplay: {
    textColor: accentColor
  },
  Button: { 
    backgroundColor: "lightgray",
    Active: {
      textColor: "white",
      backgroundColor: accentColor,
      borderColor: "white",
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
      borderColor: "#f8f9fa",
    },
    borderColor: "black",
    Active: {
      backgroundColor: accentColor,
      borderColor: "black",
      textColor: "white",
    }
  },
  WorkflowEditorAccordionButton: {
    backgroundColor: "white",
    Active: { 
      backgroundColor: accentColor,
    }
  },
};

export default light;
