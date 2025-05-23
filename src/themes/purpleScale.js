import { purpleScaleId } from "../constants/themeIds";

const purplescale = {
  author: "ImACoderImACoderImACoder/ayebizz",
  themeId: purpleScaleId,
  Button: { 
    backgroundColor: "#242526",
    Active: {
      textColor: "white",
      backgroundColor: "#6a1b9a", // Darker purple for active state
      borderColor: "white",
    }
  },
  CurrentTemperatureDisplay: {
    textColor: "#8e24aa", // A vibrant purple
  },
  borderColor: "#C0C0C0",
  backgroundColor: "black",
  textColor: "#9c27b0", // Slightly lighter purple for visibility
  iconColor: "#9c27b0",
  StartScreen: {
    textColor: "#9c27b0",
  },
  Navigation: { 
    textColor: "#9c27b0", 
    borderColor: "#9c27b0"
  },
  temperatureRange: {
    background: "linear-gradient(315deg, #8e24aa 0%, #ba68c8 74%)", // Gradient from vibrant to light purple
    rangeBoxColor: "#8e24aa",
    rangeBoxBorderColor: "#C0C0C0",
  },
  PlusMinusButton: {
    backgroundColor: "#242526",
    textColor: "#8e24aa",
    borderColor: "#C0C0C0",
  },
  workflowEditor: {
    accordianExpandedColor: "#8e24aa",
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "#B0B3B8",
      borderColor: "#f8f9fa",
      Active: {
        backgroundColor: "#8e24aa",
      }
    },
    backgroundColor: "#242526",
    borderColor: "#C0C0C0",
    textColor: "#8e24aa",
    Active: {
      backgroundColor: "#8e24aa",
      borderColor: "white",
      textColor: "white",
    }
  },
};

export default purplescale;
