import React from 'react'
import './quiz.css'
import{ quizQuestions } from '../assets/data'
import { useState } from 'react'


// starting video at 22:27
const Quiz = () => {
  const [index,setIndex] = useState(3)
  const [questions,setQuestions] = useState(quizQuestions[index])

  return (
    <div className='container'>
      <h2 className='head'>Quiz App</h2>
      <hr className='lb'/>
      <h2>{index +1}. {questions.question}</h2>
      <ul >
      <li>{questions.option1}</li>
      <li>{questions.option2}</li>
      <li>{questions.option3}</li>
      <li>{questions.option4}</li>
      </ul>
      <button>Next</button>
      <button>Previous</button>
      <h2>1 of 5</h2>
    </div>
  )
}

export default Quiz
