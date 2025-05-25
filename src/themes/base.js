const base = () => {
  return {
    SettingsButton: {
      borderRadius: "5px",
      borderWidth: "2px",
    },
    Button: { 
      borderRadius: "2rem",
      borderWidth: "0px", // 0.15rem
    },
    TemperatureRange: {
      background: "linear-gradient(135deg, #f5d020 0%,  #f53803 74%)",
      Slider: {
        borderRadius: "0.25rem",
        borderWidth: "3px",
      }
    }
  };
};

export default base;
