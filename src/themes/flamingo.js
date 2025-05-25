import { flamingoId } from "../constants/themeIds";

const flamingo = {
  themeId: flamingoId,
  author: "Alexis",
  backgroundColor: "black",
  textColor: "white",
  borderStyle: "solid",
  borderColor: "darkgray",
  iconColor: "#e8d6ed",
  Button: { 
    backgroundColor: "#e79fec",
    Active: {
      backgroundColor: "#fccddf",
    }
  },
  TemperatureDisplay: {
    textColor: "antiquewhite",
  },
  StartScreen: {
    textColor: "#e8d6ed",
  },
  Navigation: { 
    textColor: "#e8d6ed",
    borderColor: "#e8d6ed",
  },
  TemperatureRange: {
    background: "linear-gradient(315deg, #e79fec 0%, #fccddf 74%)",
    Slider: {
      background: "white",
      borderColor: "#fccddf"
    },
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "white",
      borderColor: "white",
    },
    backgroundColor: "#fccddf",
    borderColor: "#fccddf",
    Active: {
      backgroundColor: "#e79fec",
      borderColor: "#e79fec",
    },
  },
  WorkflowEditorAccordionButton: {
    backgroundColor: "black",
    Active: { 
      backgroundColor: "darkgray",
    }
  },
};

export default flamingo;
