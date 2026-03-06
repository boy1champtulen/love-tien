import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function SlideCard({ emoji, title, text, next, last }) {

  const [displayText, setDisplayText] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    setDisplayText("")
    setCharIndex(0)
  }, [text])

  useEffect(() => {

    if (charIndex < text.length) {

      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(charIndex))
        setCharIndex(charIndex + 1)
      }, 35)

      return () => clearTimeout(timer)

    }

  }, [charIndex, text])

  return (

    <motion.div
      initial={{ opacity:0, scale:0.9 }}
      animate={{ opacity:1, scale:1 }}
      className="bg-[#1f1f1f]/90 backdrop-blur-xl p-8 rounded-2xl max-w-md text-center shadow-2xl"
    >

      <div className="text-5xl mb-4">
        {emoji}
      </div>

      {title && (
        <h2 className="text-2xl font-bold text-pink-400 mb-3">
          {title}
        </h2>
      )}

      <p className="text-gray-300 leading-relaxed min-h-[90px]">
        {displayText}
      </p>

      {!last && (
        <button
          onClick={next}
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-lg"
        >
          tiếp →
        </button>
      )}

      {last && (
  <button
    onClick={()=> window.location.href="/timeline"}
    className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-lg"
  >
    Xem tiếp ❤️
  </button>
)}

    </motion.div>

  )

}

export default SlideCard