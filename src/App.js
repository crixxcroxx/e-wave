import { useRef, useState } from "react";
import sum from "./taskTwo/getSum";

export default function App() {
  const [total, setTotal] = useState(0);
  const [{x, y, z}, setAddends] = useState({x: 0, y: 0, z: 0});
  const aRef = useRef()
  const bRef = useRef()
  const cRef = useRef()

  const handleClick = () => {
    const a = aRef.current.value ? parseInt(aRef.current.value) : x
    const b = bRef.current.value ? parseInt(bRef.current.value) : y
    const c = bRef.current.value ? parseInt(cRef.current.value) : z

    setAddends({x: a, y: b, z: c})

    setTotal(sum(a, b, c))
  }

  return (
    <div className="App">
      <input type="number" ref={aRef} />
      <input type="number" ref={bRef} />
      <input type="number" ref={cRef} />
      <p>Sum: {total ? total : " "}</p>
      <button onClick={handleClick}>Get Sum</button>
    </div>
  );
}