import colorsArray from "./colorsArray";

export default function createColorManager(defaultColor) {
  const colorManager = {
    get: (selectedColor) => selectedColor,

    next: (currentColor) => {
      const index = colorsArray.findIndex(i => i === currentColor)

      if(index < colorsArray.length - 1) { return colorsArray[(index + 1)] }
      else { return colorsArray[colorsArray.length - 1] }
    },

    prev: (currentColor) => {
      const index = colorsArray.findIndex(i => i === currentColor)

      if(index > 0) { return colorsArray[(index - 1)] }
      else { return colorsArray[0] }
    },

    reset: () => defaultColor
  };

  return colorManager;
}
