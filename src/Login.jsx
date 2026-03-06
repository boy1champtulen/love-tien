import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import loginGif from "./assets/login.gif"
import { playMusic } from "./musicPlayer"


function Login() {

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = () => {

    if(email === "thuytien" && password === "28102001"){
      playMusic()
      navigate("/game")
    }else{
      alert("Sai tài khoản")
    }

  }

  return(



<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1f1f1f] via-[#2b2b2b] to-black px-4">

<motion.div
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
transition={{duration:0.5}}
className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg"
>

{/* GIF */}

<motion.div
initial={{x:-120,opacity:0}}
animate={{x:0,opacity:1}}
transition={{duration:0.6}}
className="md:w-96 w-full h-64 md:h-[420px] bg-black flex items-center justify-center"
>

<img
src={loginGif}
alt="login animation"
className="w-full h-full object-cover"
/>

</motion.div>


{/* FORM */}

<motion.div
initial={{x:120,opacity:0}}
animate={{x:0,opacity:1}}
transition={{duration:0.6}}
className="bg-[#2b2b2b]/90 md:w-96 w-full p-10 flex flex-col justify-center"
>


<motion.h2
className="text-3xl font-bold text-pink-400 mb-6 text-center drop-shadow-[0_0_10px_pink]"
initial="hidden"
animate="visible"
variants={{
visible:{
transition:{staggerChildren:0.08}
}
}}
>

{"LOGIN FOR 8/3".split("").map((char,index)=>(
<motion.span
key={index}
variants={{
hidden:{opacity:0,y:20},
visible:{opacity:1,y:0}
}}
transition={{duration:0.4}}
>

{char}

</motion.span>
))}

</motion.h2>


<input
type="text"
placeholder="Username"
className="mb-3 p-3 rounded-lg bg-[#3a3a3a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-400 transition"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
placeholder="Password"
className="mb-4 p-3 rounded-lg bg-[#3a3a3a] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-pink-400 transition"
onChange={(e)=>setPassword(e.target.value)}
/>


<motion.button
type="button"
whileHover={{
scale:1.07,
boxShadow:"0px 0px 15px rgb(236 72 153)"
}}
whileTap={{scale:0.95}}
onClick={handleLogin}
className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg transition"
>

Login

</motion.button>


</motion.div>

</motion.div>

</div>



  )

}

export default Login