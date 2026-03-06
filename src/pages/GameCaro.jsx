import { useState } from "react"
import { useNavigate } from "react-router-dom"

function GameCaro() {

  const navigate = useNavigate()

  const [board,setBoard] = useState(Array(9).fill(""))
  const [gameOver,setGameOver] = useState(false)
  const [round,setRound] = useState(1)

  const checkWinner = (b) => {

    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    for(let [a,b1,c] of lines){
      if(b[a] && b[a] === b[b1] && b[a] === b[c]){
        return b[a]
      }
    }

    return null
  }

  const isDraw = (b) => {
    return b.every(cell => cell !== "")
  }

  const resetGame = () => {
    setBoard(Array(9).fill(""))
    setGameOver(false)
  }

  const aiMove = (newBoard) => {

    const empty = newBoard
      .map((v,i)=> v === "" ? i : null)
      .filter(v => v !== null)

    if(empty.length === 0) return

    let move

    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    // ===== VÁN 1 : PLAYER THUA =====
    if(round === 1){

      for(let [a,b,c] of lines){

        const values=[newBoard[a],newBoard[b],newBoard[c]]

        if(values.filter(v=>v==="O").length===2 && values.includes("")){
          move=[a,b,c][values.indexOf("")]
          break
        }

      }

      if(move === undefined){
        move = empty[Math.floor(Math.random()*empty.length)]
      }

    }

    // ===== VÁN 2 : HÒA =====
    else if(round === 2){

      // chặn player thắng
      for(let [a,b,c] of lines){

        const values=[newBoard[a],newBoard[b],newBoard[c]]

        if(values.filter(v=>v==="X").length===2 && values.includes("")){
          move=[a,b,c][values.indexOf("")]
          break
        }

      }

      if(move === undefined){
        move = empty[Math.floor(Math.random()*empty.length)]
      }

    }

    // ===== VÁN 3 : PLAYER THẮNG =====
    else{

      move = empty[Math.floor(Math.random()*empty.length)]

    }

    newBoard[move] = "O"

    setBoard([...newBoard])

    const aiWinner = checkWinner(newBoard)

    if(aiWinner === "O"){

      setGameOver(true)

      setTimeout(()=>{

        alert("Thua rồi 😏 thử lại lần nữa đi")

        setRound(2)
        resetGame()

      },700)

      return
    }

    if(isDraw(newBoard)){

      setGameOver(true)

      setTimeout(()=>{

        if(round === 2){
          alert("Hòa rồi 😆 ván cuối nha")
          setRound(3)
        }else{
          alert("Hòa rồi 😆 chơi lại nha")
        }

        resetGame()

      },700)

    }

  }

  const handleClick = (i) => {

    if(board[i] !== "" || gameOver) return

    const newBoard = [...board]

    newBoard[i] = "X"

    setBoard(newBoard)

    const winner = checkWinner(newBoard)

    if(winner === "X"){

      setGameOver(true)

      setTimeout(()=>{

        if(round === 3){
          alert("Ok em thắng rồi… anh thua cả trái tim luôn ❤️")
          navigate("/home")
        }else{
          alert("Em thắng sớm quá 😆 chơi lại nha")
          resetGame()
        }

      },800)

      return
    }

    if(isDraw(newBoard)){

      setGameOver(true)

      setTimeout(()=>{

        if(round === 2){
          alert("Hòa rồi 😆 ván cuối nha")
          setRound(3)
        }else{
          alert("Hòa rồi 😆 chơi lại nha")
        }

        resetGame()

      },800)

      return
    }

    setTimeout(()=>{
      aiMove(newBoard)
    },500)

  }

  return(

    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">

      <h1 className="text-3xl font-bold mb-6 text-pink-400 text-center">
        Đánh bại anh để mở khóa Love Story ❤️
      </h1>

      <div className="grid grid-cols-3 gap-3">

        {board.map((cell,i)=>(
          <button
            key={i}
            onClick={()=>handleClick(i)}
            className="w-24 h-24 md:w-28 md:h-28 text-3xl md:text-4xl font-bold bg-[#1f1f1f] hover:bg-[#333] rounded-xl flex items-center justify-center transition"
          >

            {cell === "X" && (
              <span className="text-red-500 drop-shadow-[0_0_10px_red]">
                X
              </span>
            )}

            {cell === "O" && (
              <span className="text-blue-400 drop-shadow-[0_0_10px_cyan]">
                O
              </span>
            )}

          </button>
        ))}

      </div>

    </div>

  )

}

export default GameCaro