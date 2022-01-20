import chipProperties from "../data/chipProperties";

export default function getChipValues(data) {
  let totalQty = 0
  let totalPrice = 0
  let priceList = []

  const values = {}

  data.map(item => {
    totalQty += item.qty
    totalPrice += item.price
    priceList.push(item.price)
  })

  values[chipProperties[0]] = totalQty
  values[chipProperties[1]] = totalPrice
  values[chipProperties[2]] = (totalPrice / data.length).toFixed(2)
  values[chipProperties[3]] = Math.max(...priceList)
  values[chipProperties[4]] = Math.min(...priceList)

  return values;
}
