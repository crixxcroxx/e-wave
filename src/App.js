import { useState } from "react";
import createColorManager from "./taskOne/createColorManager";

export default function App() {
  const defaultColor = "red"
  const selectedColor = "indigo"
  const [color, setColor] = useState(defaultColor);
  const one = createColorManager(defaultColor)

  return (
    <div className="App">
      <i>Selected Color: {selectedColor}</i> <br />
      <i>Default Color: {defaultColor}</i> <br />
      <span>Current Color: {color}</span>

      <div>
        <button onClick={() => setColor(one.get(selectedColor))}>Get</button>
        <button onClick={() => setColor(one.next(color))}>Next</button>
        <button onClick={() => setColor(one.prev(color))}>Prev</button>
        <button onClick={() => setColor(one.reset)}>Reset</button>
      </div>
    </div>
  );
}