let audio = null
let started = false

export const playMusic = () => {

  if (started) return

  if (!audio) {
    audio = new Audio("/music.mp3")
    audio.loop = true
    audio.volume = 0
  }

  audio.play().catch(()=>{})

  let volume = 0

  const fade = setInterval(()=>{

    if(volume < 0.5){
      volume += 0.02
      audio.volume = volume
    }else{
      clearInterval(fade)
    }

  },200)

  started = true
}

export default audio