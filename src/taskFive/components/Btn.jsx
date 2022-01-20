import "../styles/btn.css";

export default function Btn(props) {

  return (
    <button className="btn">{props.children}</button>
  );
}