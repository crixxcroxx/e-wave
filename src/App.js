import bem from "./taskFour/bem";

export default function App() {
  const cn = bem.block("list").element("item").modifier("active").build()

  return (
    <div className={cn}>Hello</div>
  );
}