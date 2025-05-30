import { volcanicAshId } from "../constants/themeIds";

const volcanicAsh = {
  themeId: volcanicAshId,
  author: "ImACoderImACoderImACoder",
  borderStyle: "solid",
  borderColor: "#FF6600",
  Button: { 
    backgroundColor: "#242526" ,
    Active: {
      textColor: "white",
      backgroundColor: "#FF6600",
      borderColor: "white",
    },
  },
  CurrentTemperatureDisplay: {
    textColor: "#FF6600"
  },
  TargetTemperatureDisplay: {
    textColor: "white"
  },
  backgroundColor: "black",
  textColor: "white",
  iconColor: "#FF6600",
  StartScreen: {
    textColor: "#FF6600",
  },
  Navigation: { 
    textColor: "white",
    borderColor: "#FF6600"
  },
  PlusMinusButton: {
    backgroundColor: "#242526",
    textColor: "white",
    borderColor: "FF6600",
  },
  WorkflowEditorAccordionButton: {
    backgroundColor: "black",
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
      backgroundColor: "#242526",
      borderColor: "#f8f9fa",
      Active: {
        backgroundColor: "#FF6600",
      }
    },
    backgroundColor: "#242526",
    borderColor: "#FF6600",
    textColor: "#fff",
    Active: {
      backgroundColor: "#FF6600",
      borderColor: "white",
      textColor: "#fff",
    }
  },
};

export default volcanicAsh;
