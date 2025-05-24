import { feastOfSaintPatrickId } from "../../../constants/themeIds";

const feastOfSaintPatrick = {
  author: "ImACoderImACoderImACoder",
  themeId: feastOfSaintPatrickId,
  Button: { 
    backgroundColor: "#009A49",
    Active: {
      textColor: "white",
      backgroundColor: "#FF7900",
      borderColor: "#D9DF1D",
    }
  },
  borderColor: "#FF7900",
  CurrentTemperatureDisplay: {
    textColor: "#FF7900",
  },
  textColor: "white",
  PlusMinusButton: {
    borderColor: "#FF7900",
    backgroundColor: "#009A49",
    textColor: "white",
  },
  backgroundColor: "black",
  iconColor: "#D9DF1D",
  StartScreen: {
    textColor: "#D9DF1D",
  },
  Navigation: { 
    textColor: "white", 
    borderColor: "#D9DF1D",
  },
  TemperatureRange: {
    background: "linear-gradient(90deg,#009A49 33.33%, #FFF 0, #FFF 66.66%, #FF7900 0)",
    Slider: {
      background: `linear-gradient(to right, #009A49 33.33%, #fff 0, #fff 66.66%, #FF7900 0)`,
      borderColor: "#D9DF1D",
    }
  },
  workflowEditor: {
    accordianExpandedColor: "#146B3A",
  },
  ToggleButton: {
    Slider: {
      backgroundColor: "#009A49",
      borderColor: "#D9DF1D",
      Active: {
        backgroundColor: "#FF7900",
        borderColor: "#FFF",
      }
    },
    backgroundColor: "#009A49",
    borderColor: "#FF7900",
    textColor: "white",
    Active: {
      backgroundColor: `linear-gradient(to right, #009A49 33.33%, #fff 0, #fff 66.66%, #FF7900 0)`,
      borderColor: "#D9DF1D",
      textColor: "#e5d15d",
    }
  },
};

export default feastOfSaintPatrick;
