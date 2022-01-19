import { useState } from "react";

import Fighter from "./taskThree/Fighter";
import setDelay from "./taskThree/setDelay";

export default function App() {
  const character = new Fighter(10, 10, 10)
  const enemy = new Fighter(3, 3, 3)
  character.name = "Snacku"
  enemy.name = "Rinbee"

  const [message, setMessage] = useState(" ");
  const [casterHP, setCasterHP] = useState(character.getHP());
  const [targetHP, setTargetHP] = useState(enemy.getHP());
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  function fight(caster, target) {
    setIsBtnClicked(true)

    if(targetHP > 0 && casterHP > 0) {
      const targetCurrentHP = targetHP - caster.dealDamage(target)

      setTargetHP(targetCurrentHP)
      setMessage(`${caster.getName()} attacked ${target.getName()}.`)

      // set HP to zero when HP goes zero or lower
      if(targetCurrentHP <= 0) setTargetHP(0)

      setDelay(1500).then(() => {
        if(casterHP > 0 && targetCurrentHP > 0) {
          const casterCurrentHP = casterHP - caster.takeDamage(target.damage)

          setCasterHP(casterCurrentHP)
          setMessage(`${target.getName()} attacked ${caster.getName()}.`)

          // will trigger when HP reached zero after damage was taken
          if(casterCurrentHP <= 0) {
            setCasterHP(0)
            setDelay(1000).then(() => {
              setMessage(`${target.getName()} has won the battle!`)
            })
          }
        } else {
          setMessage(`${caster.getName()} has won the battle!`)
        }

        setIsBtnClicked(false)
      })
    }
  }

  return (
    <div className="App">
      <div style={{display: "flex", gap: "3rem"}}>
        <div>
          <p>Character (<i>{character.getName()}</i>)</p>
          <p>HP: {casterHP}</p>
        </div>

        <div>
          <p>Target (<i>{enemy.getName()}</i>)</p>
          <p>HP: {targetHP}</p>
        </div>
      </div>

      <p>{message}</p>

      <button onClick={() => fight(character, enemy)} disabled={isBtnClicked}>
        Attack
      </button>
    </div>
  );
}