import { useState, useMemo } from "react";

import getDateString from "../utils/getDateString";

import "../styles/products.css";

export default function Products({ data }) {
  const [sortColumn, setSortColumn] = useState(null);
  const [isAscending, setIsAscending] = useState(false);

  let products = useMemo(() => [...data], [data])

  useMemo(() => {
    if(sortColumn) {
      products.sort((a, b) => {
        let aCopy = a
        let bCopy = b

        // for sorting date
        if(sortColumn === "production") {
          aCopy.production = new Date(a.production)
          bCopy.production = new Date(b.production)
        }

        if (aCopy[sortColumn] < bCopy[sortColumn]) {
          return isAscending ? -1 : 1;
        }
        if (aCopy[sortColumn] > bCopy[sortColumn]) {
          return isAscending ? 1 : -1;
        }
        return 0;
      })
    }
  },[sortColumn, products, isAscending])

  const handleSort = (colName) => {
    setIsAscending(!isAscending)
    setSortColumn(colName)
  }

  return (
    <div className="products">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>#</th>
            <th onClick={() => handleSort("category")}>Category</th>
            <th onClick={() => handleSort("price")}>Price</th>
            <th onClick={() => handleSort("manufacturer")}>Manufacturer</th>
            <th onClick={() => handleSort("production")}>Production</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product =>
            <tr key={product.title}>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>Php {product.price}</td>
              <td>{product.manufacturer}</td>
              <td>{getDateString(product.production)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
