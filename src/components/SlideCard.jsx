
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function SlideCard({ emoji, title, text, next, last }) {

  const [displayText, setDisplayText] = useState("")
  const [charIndex, setCharIndex] = useState(0)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    setDisplayText("")
    setCharIndex(0)
    setShowButton(false)
  }, [text])

  useEffect(() => {

    if (charIndex < text.length) {

      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[charIndex])
        setCharIndex(prev => prev + 1)
      }, 60)

      return () => clearTimeout(timer)

    }

    if (charIndex === text.length) {
      const delay = setTimeout(() => {
        setShowButton(true)
      }, 500)

      return () => clearTimeout(delay)
    }

  }, [charIndex, text])


  return (

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1f1f1f]/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl max-w-md text-center shadow-2xl border border-pink-500/20"
    >

      {/* Emoji */}
      <div className="text-5xl mb-4 animate-pulse">
        {emoji}
      </div>

      {/* Title */}
      {title && (
        <h2 className="text-2xl font-bold text-pink-400 mb-3">
          {title}
        </h2>
      )}

      {/* Typing text */}
      <p className="text-gray-300 leading-relaxed min-h-[90px] text-lg">

        {displayText}

        {charIndex < text.length && (
          <span className="animate-pulse text-pink-400 ml-1">|</span>
        )}

      </p>


      {/* Button */}

      {showButton && !last && (

        <motion.button
          onClick={next}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-lg text-white font-semibold"
        >
          Xem tiếp ❤️
        </motion.button>

      )}


      {showButton && last && (

        <motion.button
          onClick={() => window.location.href = "/timeline"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-lg text-white font-semibold"
        >
          Xem tiếp ❤️
        </motion.button>

      )}

    </motion.div>

  )
}

export default SlideCard
