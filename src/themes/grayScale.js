import { grayscaleId } from "../constants/themeIds";

const grayscale = {
  themeId: grayscaleId,
  Button: { 
    backgroundColor: "#242526",
    Active: {
      textColor: "white",
      backgroundColor: "#AAAAAA",
      borderColor: "black",
    }
  },
  borderColor: "#B0B3B8",
  backgroundColor: "#18191A",
  textColor: "#E4E6EB",
  iconColor: "#3A3B3C",
  StartScreen: {
    textColor: "#3A3B3C",
  },
  Navigation: { 
    textColor: "#E4E6EB",
    borderColor: "#3A3B3C",
  },
  TemperatureRange: {
    background: "linear-gradient(315deg, #B0B3B8 0%, #242526 74%)",
    Slider: {
      background: "#242526",
      borderColor: "#B0B3B8",
    }
  },
  PlusMinusButton: {
    backgroundColor: "#242526",
    textColor: "#E4E6EB",
    borderColor: "#B0B3B8",
  },
  workflowEditor: {
    accordianExpandedColor: "#B0B3B8",
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "#3A3B3C",
      borderColor: "#f8f9fa",
    },
    backgroundColor: "#242526",
    borderColor: "#242526",
    textColor: "#E4E6EB",
    Active: {
      backgroundColor: "#AAAAAA",
      borderColor: "#AAAAAA",
      textColor: "white",
    }
  },
};

export default grayscale;
