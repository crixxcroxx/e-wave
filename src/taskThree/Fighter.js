export default function Fighter(strength, agility, vitality) {
  const STR = strength > 30 ? 30 : strength
  const AGI = agility > 30 ? 30 : agility
  const VIT = vitality > 30 ? 30 : vitality
  const HP = ((VIT * 10) + (STR * 5) + (AGI * 3)) + 50

  let name = ""

  Object.defineProperty(this, "name", {
    set: function(value) {
      // name can only be defined once
      if(!name) name = value
    }
  })

  Object.defineProperty(this, "damage", {
    get: function() {
      return (STR * 5) + (AGI * 3)
    }
  })

  Object.defineProperty(this, "defense", {
    get: function() {
      return ((AGI * 5) + (STR * 3) + VIT) + 10
    }
  })

  this.getName = () => name

  this.getHP = () => HP

  this.takeDamage = (damage) => {
    const totalDamage = (damage - this.defense) > 10
      ? damage - this.defense
      : 10

    return totalDamage
  }

  this.dealDamage = (target) => {
    const totalDamage = (this.damage - target.defense) > 10
      ? this.damage - target.defense
      : 10

    return totalDamage
  }
}