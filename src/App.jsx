import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./Login"
import Home from "./pages/LoveStory"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App