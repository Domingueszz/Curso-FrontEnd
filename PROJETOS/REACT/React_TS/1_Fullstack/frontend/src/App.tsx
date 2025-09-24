import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddMemory from "./pages/AddMemory";
import AllMemories from "./pages/AllMemory"; // 1. Importe o componente que faltava
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMemory />} />
        
        {/* 2. ADICIONE A ROTA PARA A PÁGINA DE COLEÇÃO */}
        <Route path="/collection" element={<AllMemories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;