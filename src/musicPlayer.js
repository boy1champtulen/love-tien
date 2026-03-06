const audio = new Audio("/music.mp3")

audio.loop = true
audio.volume = 0

export const playMusic = () => {

  if (!audio.paused) return

  audio.play().catch(() => {})

  let volume = 0

  const fade = setInterval(() => {

    if (volume < 0.5) {
      volume += 0.02
      audio.volume = volume
    } else {
      clearInterval(fade)
    }

  }, 200)

}

export default audio