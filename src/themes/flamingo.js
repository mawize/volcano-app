import { flamingoId } from "../constants/themeIds";

const flamingo = {
  themeId: flamingoId,
  author: "Alexis",
  borderStyle: "solid",
  borderColor: "darkgray",
  Button: { 
    backgroundColor: "#e79fec",
    Active: {
      textColor: "white",
      backgroundColor: "#fccddf",
      borderColor: "darkgray",
    }
  },
  TemperatureDisplay: {
    textColor: "antiquewhite",
  },
  backgroundColor: "black",
  textColor: "white",
  iconColor: "#e8d6ed",
  StartScreen: {
    textColor: "#e8d6ed",
  },
  Navigation: { 
    textColor: "#e8d6ed",
    borderColor: "#e8d6ed",
  },
  PlusMinusButton: {
    backgroundColor: "#e79fec",
    textColor: "white",
    borderColor: "inherit",
  },
  TemperatureRange: {
    background: "linear-gradient(315deg, #e79fec 0%, #fccddf 74%)",
    Slider: {
      backgroundColor: "white",
      borderColor: "#fccddf"
    },
  },
  workflowEditor: {
    accordianExpandedColor: "darkgray",
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "white",
      borderColor: "white",
    },
    backgroundColor: "#fccddf",
    borderColor: "#fccddf",
    textColor: "#fff",
    Active: {
      backgroundColor: "#e79fec",
      borderColor: "#e79fec",
      textColor: "#fff",
    },
  },
};

export default flamingo;
