function ProgressBar({ percent }) {
  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-700 z-50">
      <div
        className="h-full bg-pink-500 transition-all duration-500"
        style={{ width: percent + "%" }}
      />
    </div>
  )
}

export default ProgressBar