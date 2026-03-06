import { Routes, Route } from "react-router-dom"

import Login from "./Login"
import GameCaro from "./pages/GameCaro"
import LoveStory from "./pages/LoveStory"
import MemoryTimeline from "./pages/MemoryTimeline"

function App() {
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