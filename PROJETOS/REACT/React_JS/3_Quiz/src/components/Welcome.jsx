import React from 'react'
import "./Welcome.css"
import Quiz from "../img/quiz.svg"


const Welcome = () => {
  return (
    <div>
      <h2>Seja bem-vindo</h2>
      <p>CLique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}

export default Welcome
