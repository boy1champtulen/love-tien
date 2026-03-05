import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

  const navigate = useNavigate()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin = () => {

    if(email === "thuytien" && password === "123456"){
      navigate("/home")
    }else{
      alert("Sai tài khoản")
    }

  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-[#1f1f1f]">

      <div className="flex rounded-xl overflow-hidden shadow-2xl">

        {/* GIF BOX */}
        <div
          className="w-96 h-[420px] bg-cover bg-center"
          style={{
            backgroundImage:
            "url('https://cdn.dribbble.com/userupload/41943848/file/original-4d5f6449a01563f617d0c873a8fd9a7d.gif')"
          }}
        />

        {/* LOGIN FORM */}
        <div className="bg-[#2b2b2b] w-96 p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-gray-200 mb-6 text-center">
            Login for 8/3
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="mb-3 p-3 rounded-lg bg-[#3a3a3a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-3 rounded-lg bg-[#3a3a3a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-gray-600 hover:bg-gray-500 text-white py-3 rounded-lg transition"
          >
            Login
          </button>

        </div>

      </div>

    </div>

  )

}

export default Login