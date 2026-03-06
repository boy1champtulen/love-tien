import { useState, useEffect } from "react"
import HeartCanvas from "../components/HeartCanvas"
import SlideCard from "../components/SlideCard"
import audio from "../musicPlayer"

function LoveStory() {

  useEffect(() => {

    const fade = setInterval(() => {

      if (audio.volume < 0.8) {
        audio.volume = Math.min(audio.volume + 0.02, 0.8)
      } else {
        clearInterval(fade)
      }

    }, 200)

    return () => clearInterval(fade)

  }, [])

  const slides = [
    {
      emoji: "💕",
      title:"Hello baby của anh",
      text: "anh là kayden(thuan) đây,"
    },
    {
      emoji: "🌹",
      title: "định móc điện thoại ra quay chứ gì =))",
      text: "cho phép em quay đó kkkk để ảnh còn lưu làm kỷ niệm chứ nhỉ"
    },
    {
      emoji: "💫",
      title: "Happy 8/3 nha Tiênn 🌸",
      text: "Chúc cô gái của anh hôm nay ăn gì cũng ngon, ngủ gì cũng đã, đi đâu cũng xinh và đặc biệt là luôn luôn nhớ tới anh nha =))"
    },
    {
      emoji: "💬",
      title: "lời cảm ơn",
      text: "Cảm ơn em vì đã xuất hiện trong cuộc đời anh, làm cho cuộc sống của anh từ màu đen trắng chuyển sang 4K full màu, HDR, không quảng cáo và đặc biệt là có nhạc nền =))" 
    },
    {
      emoji: "❤️",
      text: "Mong là Tiên sẽ luôn vui vẻ, đáng yêu, và hơi hơi nhõng nhẽo với anh một xíu cũng được, anh chịu hết. Anh sẽ luôn ở đây, bên cạnh em, cùng em đi qua mọi khó khăn, thử thách của cuộc sống. Anh yêu em nhiều lắm, Tiên ơi."  
    },
    {
      emoji: "💍",
      title: "Nói chung là…",
      text: "Chúc người yêu anh 8/3 thật vui, thật hạnh phúc và nhớ là anh thương Tiên nhiều lắm đó nhaaa 🫶"
    }
  ]

  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1)
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      <HeartCanvas />

      {/* progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
        <div
          className="bg-pink-500 h-1 transition-all duration-500"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>

      <SlideCard
        emoji={slides[index].emoji}
        title={slides[index].title}
        text={slides[index].text}
        next={next}
        last={index === slides.length - 1}
      />

    </div>

  )
}

export default LoveStory