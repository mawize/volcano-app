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
  currentTemperatureColor: "#FF7900",
  targetTemperatureColor: "white",
  textColor: "white",
  PlusMinusButton: {
    borderColor: "#FF7900",
    backgroundColor: "#009A49",
    textColor: "white",
  },
  backgroundColor: "black",
  iconColor: "#D9DF1D",
  iconTextColor: "white",
  temperatureRange: {
    background:
      "linear-gradient(90deg,#009A49 33.33%, #FFF 0, #FFF 66.66%, #FF7900 0)",
    rangeBoxColor: `linear-gradient(to right, #009A49 33.33%, #fff 0, #fff 66.66%, #FF7900 0)`,
    rangeBoxBorderColor: "#D9DF1D",
  },
  workflowEditor: {
    accordianExpandedColor: "#146B3A",
  },
  ToggleButtons: {
    sliderBackgroundColorOn: "#FF7900",
    sliderBackgroundColorOff: "#009A49",
    sliderBorderColorOff: "#D9DF1D",
    sliderBorderColorOn: "#FFF",
    onBackgroundColor: `linear-gradient(to right, #009A49 33.33%, #fff 0, #fff 66.66%, #FF7900 0)`,
    onBorderColor: "#D9DF1D",
    onColor: "#e5d15d",
    offBackgroundColor: "#009A49",
    offBorderColor: "#FF7900",
    offColor: "white",
  },
};

export default feastOfSaintPatrick;
