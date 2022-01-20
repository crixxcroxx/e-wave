import { useState } from "react";

import Btn from "./taskFive/components/Btn";
import Chips from "./taskFive/components/Chips";
import Products from "./taskFive/components/Products";
import SidePanel from "./taskFive/components/SidePanel";

import products from "./taskFive/data/products.json";

import "./app.css";

export default function App() {
  const [data, setData] = useState(products);

  const showSidePanel = () => {
    const element = document.querySelector(".side-panel")
    element.style.transform = "translateX(0)"
  }

  return (
    <div className="app">
      <SidePanel data={data} setData={setData} />

      <main>
        <div onClick={showSidePanel}>
          <Btn>Options</Btn>
        </div>

        <Chips data={data} />

        <Products data={data} />
      </main>
    </div>
  );
}

/*
  products.json is stripped from:
    https://github.com/wedeploy-examples/supermarket-web-example/blob/master/products.json
  then added other needed properties
*/