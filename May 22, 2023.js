function areYouPlayingBanjo(name) {
  let nameSplit = name.split('')
  console.log(nameSplit[0])
  return nameSplit[0] === "R"|| nameSplit[0] === "r" ?`${name} plays banjo`:`${name} does not play banjo`
}