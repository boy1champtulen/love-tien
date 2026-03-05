function SlideCard({ emoji, title, text, next, last }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center shadow-xl">

      <div className="text-5xl sm:text-6xl mb-4">
        {emoji}
      </div>

      {title && (
        <h2 className="text-xl sm:text-2xl font-bold mb-3">
          {title}
        </h2>
      )}

      <p className="text-sm sm:text-base text-gray-200 mb-6 leading-relaxed">
        {text}
      </p>

      {!last && (
        <button
          onClick={next}
          className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full text-white transition"
        >
          Tiếp →
        </button>
      )}

    </div>
  )
}

export default SlideCard