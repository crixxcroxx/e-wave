import Chip from "./Chip";

import chipProperties from "../data/chipProperties";
import getChipValues from "../utils/getChipValues";

import "../styles/chips.css";

export default function Chips({ data }) {
  const values = getChipValues(data)

  return (
    <div className="chips">
      {chipProperties.map(property =>
        <Chip
          key={property}
          property={property}
          value={values[property]}
        />
      )}
    </div>
  );
}