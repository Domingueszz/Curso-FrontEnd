import React from 'react'
import Mycomponents from './components/Mycomponents'
import Title from './components/Title'

function App() {
  return (
    <div>
        <h1>CSS no React</h1>
        <Mycomponents></Mycomponents>
        {/* Inline style */}
        <p style={{color: "blue", padding: "20px"}}>Estilo</p>
        <Title></Title>
    </div>
  )
}

export default App
