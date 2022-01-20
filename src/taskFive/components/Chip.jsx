import "../styles/chip.css";

export default function Chip({ property, value }) {

   return (
     <div className="chip">
      <p className="property">{property}</p>
      <p className="value">{value}</p>
     </div>
   );
 }