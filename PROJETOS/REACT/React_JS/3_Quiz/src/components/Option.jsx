import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import "./Option.css"

const Option = ({option, selectOption, answer}) => {
    const [quizState] = useContext(QuizContext);

  return (
    <div className={`option ${
        quizState.answerSelect && option === answer ? 'correct' : ""
        } ${
        quizState.answerSelect && option !== answer ? 'wrong' : ""
        }`} onClick={() => selectOption()}>
            
      <p>{option}</p>
    </div>
  )
}

export default Option
