
const base = () => {
  return {
    author: "ImACoderImACoderImACoder",
    borderStyle: "solid",
    borderColor: "darkgray",
    buttonColorMain: "black",
    buttonTextColor: "inherit",
    currentTemperatureColor: "antiquewhite",
    targetTemperatureColor: "antiquewhite",
    buttonActive: {
      color: "white",
      backgroundColor: "darkgray",
      borderColor: "antiquewhite",
    },
    backgroundColor: "black",
    primaryFontColor: "antiquewhite",
    iconColor: "rebeccapurple",
    iconTextColor: "rebeccapurple",
    plusMinusButtons: {
      minusIcon: () => <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="minus"
                  className="svg-inline--fa fa-minus fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                  ></path>
                </svg>,
      plusIcon: () => <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            className="svg-inline--fa fa-plus fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
            ></path>
          </svg>,
      backgroundColor: "black",
      color: "inherit",
      borderColor: "inherit",
    },
    temperatureRange: {
      lowTemperatureColor: "#f53803",
      highTemperatureColor: "#f5d020",
      background: "linear-gradient(315deg, #f53803 0%, #f5d020 74%)",
      rangeBoxColor: "black",
      rangeBoxBorderColor: "orange",
      rangeBackground: undefined,
      rangeBoxBorderRadius: "0.25rem",
      rangeBoxBorderWidth: "3px",
    },
    workflowEditor: {
      accordianExpandedColor: "#D2D2D2",
    },
    ToggleButtons: {
      sliderBackgroundColorOn: "gray",
      sliderBackgroundColorOff: undefined,
      sliderBorderColorOn: "#f8f9fa",
      sliderBorderColorOff: "#f8f9fa",
      onBackgroundColor: "#198754",
      onBorderColor: "#198754",
      onColor: "#fff",
      offBackgroundColor: "#dc3545",
      offBorderColor: "#dc3545",
      offColor: "#fff",
      backgroundImageOn: undefined,
      backgroundImageOff: undefined,
      backgroundBlendModeOn: "unset",
      backgroundBlendModeOff: "unset",
    },
  };
};

export default base;
