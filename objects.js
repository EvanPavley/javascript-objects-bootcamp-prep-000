var playlist = {
  redHotChiliPeppers: "cantStop",
  radiohead: "lucky",
  catPower: "ruin"
}

function updatePlaylist(playlist, fionaApple, sleepToDream) {
  
  return Object.assign({}, playlist, { [fionaApple]: "sleepToDream" })
  
}

