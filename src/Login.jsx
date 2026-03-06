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
        <div className="md:w-96 w-full h-64 md:h-[420px] bg-black flex items-center justify-center">
          <img
            src={loginGif}
            alt="login animation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* FORM */}
        <div className="bg-[#2b2b2b]/90 md:w-96 w-full p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-gray-200 mb-6 text-center">
            LOGIN FOR 8/3
          </h2>

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
            whileHover={{scale:1.05}}
            whileTap={{scale:0.95}}
            onClick={handleLogin}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white py-3 rounded-lg transition"
          >
            Login
          </motion.button>

        </div>

      </motion.div>

    </div>

  )

}

export default Login