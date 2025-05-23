import { halloweenId } from "../../constants/themeIds";

const volcanicAsh = {
  themeId: halloweenId,
  author: "Princess Ariel",
  borderStyle: "solid",
  borderColor: "#570CA0",
  Button: { 
    backgroundColor: "#242526",
    Active: {
      textColor: "white",
      backgroundColor: "#FF6600",
      borderColor: "white",
    }
  },
  currentTemperatureColor: "#FF6600",
  targetTemperatureColor: "white",
  backgroundColor: "black",
  textColor: "#32CD32",
  iconColor: "#FF6600",
  StartScreen: {
    textColor: "#FF6600",
  },
  Navigation: { 
    textColor: "white", 
    borderColor: "#FF6600",
  },
  PlusMinusButton: {
    backgroundColor: "#242526",
    textColor: "#32CD32",
    borderColor: "FF6600",
  },
  workflowEditor: {
    accordianExpandedColor: "#FF6600",
  },
  temperatureRange: {
    lowTemperatureColor: "#f53803",
    highTemperatureColor: "#f5d020",
    background:
      "linear-gradient(90deg, rgba(87,12,160,1) 18%, rgba(50,205,50,1) 50%, rgba(255,102,0,1) 80%)",
    rangeBoxColor: "black",
    rangeBoxBorderColor: "#FF6600",
  },
  ToggleButtons: {
    sliderColor: "#570CA0",
    sliderBorderColor: "#f8f9fa",
    backgroundColor: "#570CA0",
    borderColor: "#32CD32",
    textColor: "#32CD32",
    Active: {      
      sliderColor: "#32CD32",
      backgroundColor: "#FF6600",
      borderColor: "white",
      textColor: "#fff",
    }
  },
};

export default volcanicAsh;
