import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { playMusic } from "./musicPlayer"

import Login from "./Login"
import GameCaro from "./pages/GameCaro"
import LoveStory from "./pages/LoveStory"
import MemoryTimeline from "./pages/MemoryTimeline"

function App() {

  useEffect(()=>{
    playMusic()
  },[])

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/game" element={<GameCaro/>}/>
      <Route path="/home" element={<LoveStory/>}/>
      <Route path="/timeline" element={<MemoryTimeline />} />
    </Routes>
  )
}

export default App