import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./Login"
import GameCaro from "./pages/GameCaro"
import LoveStory from "./pages/LoveStory"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
<Route path="/game" element={<GameCaro/>}/>
<Route path="/home" element={<LoveStory/>}/>
    </Routes>
  )
}

export default App