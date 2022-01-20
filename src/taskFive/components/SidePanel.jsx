//
// checkbox filtering is not working yet
//

import { useState } from "react";

import Btn from "./Btn";

import products from "../data/products.json";
import getUniqueFromArray from "../utils/getUniqueFromArray.js";

import "../styles/sidePanel.css";

export default function SidePanel() {
  const [values, setValues] = useState({});
  const manufacturers = getUniqueFromArray(products, "manufacturer")
  const categories = getUniqueFromArray(products, "category")

  const closeSidePanel = () => {
    const element = document.querySelector(".side-panel")
    element.style.transform = "translateX(calc(-30vw - 1rem))"
  }

  const handleFilter = () => {
    closeSidePanel()
  }

  const handleReset = () => {
    const checkedCheckboxes = document.querySelectorAll("input[type=checkbox]:checked")

    for(let i = 0; i < checkedCheckboxes.length; i++) {
      checkedCheckboxes[i].checked = false
    }

    setValues({})
    closeSidePanel()
  }

  const handleCheckbox = (e, type) => {
    if(e.target.checked) {
      setValues({
        ...values,
        [type]: {
          [e.target.id]: true
        }
      })
    }
  }

  return (
    <div className="side-panel">
      <div className="close-btn" onClick={closeSidePanel}>
        <Btn>Close</Btn>
      </div>

      <h3>Sort By</h3>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <p>Category</p>

          {categories.map(data =>
            <div key={data.category}>
              <input
                type="checkbox"
                id={data.category}
                onChange={(e) => handleCheckbox(e, "category")}
              />
              <label htmlFor={data.category}>{data.category}</label>
            </div>
          )}
        </div>

        <div>
          <p>Price</p>

          <div>
            <input type="checkbox" id="twenty" />
            <label htmlFor="twenty">Above Php 20</label>
          </div>
          <div>
            <input type="checkbox" id="fifteen" />
            <label htmlFor="fifteen">Above Php 15</label>
          </div>
          <div>
            <input type="checkbox" id="ten" />
            <label htmlFor="ten">Above Php 10</label>
          </div>
          <div>
            <input type="checkbox" id="tenBelow" />
            <label htmlFor="tenBelow">Below Php 10</label>
          </div>
        </div>

        <div>
          <p>Manufacturer</p>

          {manufacturers.map(data =>
            <div key={data.manufacturer}>
              <input
                type="checkbox"
                id={data.manufacturer}
                onChange={(e) => handleCheckbox(e, "manufacturer")}
              />
              <label htmlFor={data.manufacturer}>{data.manufacturer}</label>
            </div>
          )}
        </div>

        <div className="btn-grp">
          <div onClick={handleFilter}>
            <Btn>Apply</Btn>
          </div>

          <div onClick={handleReset}>
            <Btn>Reset</Btn>
          </div>
        </div>
      </form>
    </div>
  );
}