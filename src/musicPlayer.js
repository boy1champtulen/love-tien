let audio

export const playMusic = () => {

  if(!audio){
    audio = new Audio("/music.mp3")
    audio.loop = true
    audio.volume = 0.7
  }

  if(audio.paused){
    audio.play().catch(()=>{})
  }

}

export const getAudio = () => audio