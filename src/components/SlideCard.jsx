function SlideCard({ emoji, title, text, next, last }) {

  return (

    <div className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-xl text-center max-w-md z-10">

      <div className="text-5xl mb-4">{emoji}</div>

      <h1 className="text-3xl font-bold mb-4 text-pink-400">
        {title}
      </h1>

      <p className="text-gray-200 mb-6">
        {text}
      </p>

      {!last && (
        <button
          onClick={next}
          className="bg-pink-500 px-6 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Next →
        </button>
      )}

    </div>

  )
}

export default SlideCard