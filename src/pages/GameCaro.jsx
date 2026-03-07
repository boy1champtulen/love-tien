
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PageTransition from "../components/PageTransition"

function GameCaro(){

const navigate = useNavigate()

const [board,setBoard] = useState(Array(9).fill(""))
const [gameOver,setGameOver] = useState(false)
const [round,setRound] = useState(1)

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

const checkWinner=(b)=>{
for(let [a,b1,c] of lines){
if(b[a] && b[a]===b[b1] && b[a]===b[c]){
return b[a]
}
}
return null
}

const isDraw=(b)=>{
return b.every(v=>v!=="")
}

const resetGame=()=>{
setBoard(Array(9).fill(""))
setGameOver(false)
}

const aiMove=(newBoard)=>{

const empty=newBoard
.map((v,i)=>v===""?i:null)
.filter(v=>v!==null)

if(empty.length===0) return

let move

if(round<=2){

for(let [a,b,c] of lines){

const values=[newBoard[a],newBoard[b],newBoard[c]]

if(values.filter(v=>v==="O").length===2 && values.includes("")){
move=[a,b,c][values.indexOf("")]
break
}

}

if(move===undefined){

for(let [a,b,c] of lines){

const values=[newBoard[a],newBoard[b],newBoard[c]]

if(values.filter(v=>v==="X").length===2 && values.includes("")){
move=[a,b,c][values.indexOf("")]
break
}

}

}

if(move===undefined){
move=empty[Math.floor(Math.random()*empty.length)]
}

}else{

move=empty[Math.floor(Math.random()*empty.length)]

}

newBoard[move]="O"

setTimeout(()=>{
setBoard([...newBoard])
},300)

const winner=checkWinner(newBoard)

if(winner==="O"){

setGameOver(true)

setTimeout(()=>{

alert("Hihi anh thắng rồi 😏 thử lại lần nữa nha")

setRound(round+1)

resetGame()

},800)

return
}

if(isDraw(newBoard)){

setGameOver(true)

setTimeout(()=>{

alert("Hòa rồi 😆 chơi lại nha")

resetGame()

},800)

}

}

const handleClick=(i)=>{

if(board[i]!=="" || gameOver) return

const newBoard=[...board]

newBoard[i]="X"

setBoard(newBoard)

const winner=checkWinner(newBoard)

if(winner==="X"){

setGameOver(true)

setTimeout(()=>{

if(round<=2){

alert("Thắng sớm quá 😆 nhưng chưa được đâu")

setRound(round+1)

resetGame()

}else{

alert("Ok em thắng rồi… anh thua cả trái tim luôn ❤️")

navigate("/home")

}

},800)

return
}

if(isDraw(newBoard)){

setGameOver(true)

setTimeout(()=>{

alert("Hòa rồi 😆 chơi lại nha")

resetGame()

},800)

return
}

setTimeout(()=>{
aiMove(newBoard)
},500)

}

return(

<PageTransition>

<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white px-4">

<h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-400 drop-shadow-[0_0_10px_pink] text-center">
Đánh bại anh để mở khóa ❤️
</h1>

<p className="mb-6 text-gray-400">
Round: {round}
</p>

<div className="grid grid-cols-3 gap-3 md:gap-4 p-4 md:p-6 rounded-2xl backdrop-blur-lg bg-white/5 shadow-[0_0_40px_rgba(255,0,120,0.2)]">

{board.map((cell,i)=>(

<button
key={i}
onClick={()=>handleClick(i)}
className="
w-20 h-20 md:w-24 md:h-24
flex items-center justify-center
text-3xl md:text-4xl font-bold
rounded-xl
bg-[#1b1b1b]
hover:bg-[#2a2a2a]
hover:scale-110
active:scale-95
transition
duration-200
shadow-[0_0_10px_rgba(255,0,120,0.2)]
"
>

<span
className={`
transition-all duration-300
${cell==="X"?"text-pink-400 animate-pulse":""}
${cell==="O"?"text-blue-400 animate-pulse":""}
`}
>

{cell}

</span>

</button>

))}

</div>

</div>

</PageTransition>

)

}

export default GameCaro
