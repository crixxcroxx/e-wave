import { useState } from "react";
import createColorManager from "./taskOne/createColorManager";

export default function App() {
  const defaultColor = "red"
  const selectedColor = "indigo"
  const [color, setColor] = useState(defaultColor);
  const one = createColorManager(defaultColor)

  return (
    <div className="App">
      <p>
        Selected Color: <i>{selectedColor}</i>
      </p>
      <p>Default Color: <i>{defaultColor}</i></p>
      <p>Current Color: <i>{color}</i></p>

      <div>
        <button onClick={() => setColor(one.get(selectedColor))}>Get</button>
        <button onClick={() => setColor(one.next(color))}>Next</button>
        <button onClick={() => setColor(one.prev(color))}>Prev</button>
        <button onClick={() => setColor(one.reset)}>Reset</button>
      </div>
    </div>
  );
}