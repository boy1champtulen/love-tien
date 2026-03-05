import { useEffect } from "react"

function HeartCanvas() {

  useEffect(() => {

    const canvas = document.getElementById("heartCanvas")
    const ctx = canvas.getContext("2d")

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resize)
    resize()

    const hearts = []

    function createHeart() {
      hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        size: Math.random() * 15 + 10,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3
      })
    }

    function draw() {

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      hearts.forEach((heart, i) => {

        heart.y -= heart.speed

        ctx.globalAlpha = heart.opacity
        ctx.fillStyle = "#ff4d6d"

        ctx.beginPath()

        ctx.moveTo(heart.x, heart.y)

        ctx.bezierCurveTo(
          heart.x - heart.size / 2,
          heart.y - heart.size / 2,
          heart.x - heart.size,
          heart.y + heart.size / 3,
          heart.x,
          heart.y + heart.size
        )

        ctx.bezierCurveTo(
          heart.x + heart.size,
          heart.y + heart.size / 3,
          heart.x + heart.size / 2,
          heart.y - heart.size / 2,
          heart.x,
          heart.y
        )

        ctx.fill()

        if (heart.y < -50) hearts.splice(i, 1)

      })

      requestAnimationFrame(draw)

    }

    setInterval(createHeart, 300)

    draw()

  }, [])

  return (
    <canvas
      id="heartCanvas"
      className="absolute top-0 left-0"
    ></canvas>
  )
}

export default HeartCanvas