import { useState } from "react";

import Btn from "./Btn";

import products from "../data/products.json";
import getUniqueFromArray from "../utils/getUniqueFromArray.js";

import "../styles/sidePanel.css";

export default function SidePanel({ data, setData }) {
  const filteredData = [...products]
  const [values, setValues] = useState([]);
  const manufacturers = getUniqueFromArray(products, "manufacturer")
  const categories = getUniqueFromArray(products, "category")

  const closeSidePanel = () => {
    const element = document.querySelector(".side-panel")
    element.style.transform = "translateX(calc(-30vw - 1rem))"
  }

  const handleFilter = () => {
    let filtered = filteredData.filter(product =>
      values.some(fil => [product.category].flat().includes(fil)) ||
      values.some(fil => [product.manufacturer].flat().includes(fil)) ||
      values.some(fil => [product.price] > fil)
    )

    if(values.length === 0) {
      setData(products)
    } else {
      setData(filtered)
    }

    closeSidePanel()
  }

  const handleReset = () => {
    const checkedCheckboxes = document.querySelectorAll("input[type=checkbox]:checked")

    for(let i = 0; i < checkedCheckboxes.length; i++) {
      checkedCheckboxes[i].checked = false
    }

    setValues([])
    setData(products)
    closeSidePanel()
  }

  const handleCheckbox = (e, type) => {
    if(!e.target.checked) {
      values.splice(values.findIndex(i => i === e.target.id), 1)
    }

    if(e.target.checked) {
      setValues([
        ...values,
        e.target.id
      ])
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
            <input type="checkbox" id="20" onChange={(e) => handleCheckbox(e, "price")} />
            <label htmlFor="20">Above Php 20</label>
          </div>
          <div>
            <input type="checkbox" id="15" onChange={(e) => handleCheckbox(e, "price")} />
            <label htmlFor="15">Above Php 15</label>
          </div>
          <div>
            <input type="checkbox" id="10" onChange={(e) => handleCheckbox(e, "price")} />
            <label htmlFor="10">Above Php 10</label>
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