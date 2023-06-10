function bonusTime(salary, bonus) {
  if(bonus==true){
    let bigOne = salary*10
    return "\u00A3"+bigOne
  }else
    return "\u00A3"+salary
}