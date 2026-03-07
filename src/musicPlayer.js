let audio = null

export const playLoginMusic = () => {

  if (audio) {
    audio.pause()
  }

  audio = new Audio("/music.mp3")
  audio.loop = true
  audio.volume = 0.6
  audio.play()

}

export const playTimelineMusic = () => {

  if (audio) {
    audio.pause()
  }

  audio = new Audio("/timeline.mp3")
  audio.loop = true
  audio.volume = 0.6
  audio.play()

}