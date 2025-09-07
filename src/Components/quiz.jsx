import React, { useRef } from "react";
import "./quiz.css";
import { quizQuestions } from "../assets/data";
import { useState } from "react";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [questions, setQuestions] = useState(quizQuestions[index]);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  let optarray = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (questions.correctAnswer === ans) {
        e.target.classList.add("Correct");
        setScore((prev) => prev + 1);
        setLock(true);
      } else {
        e.target.classList.add("Wrong");
        optarray[questions.correctAnswer - 1].current.classList.add("Correct");
        setLock(true);
      }
    }
  };
  const next = () => {
    if (lock === true) {
      if (index + 1 === quizQuestions.length) {
        setResult(true);
        return;
      }
      setIndex((prev) => prev + 1);
      setQuestions(quizQuestions[index + 1]);
      setLock(false);
      optarray.forEach((option) => {
        option.current.classList.remove("Correct", "Wrong");
      });
    }
  };
  const retry = () => {
    setIndex(0);
    setLock(false);
    setQuestions(quizQuestions[0]);
    setResult(false);
    setScore(0);
  };

  return (
    <div className="container">
      <h2 className="head">Quiz App</h2>
      <hr className="lb" />
      {result ? (
        <></>
      ) : (
        <>
          {" "}
          <h2>
            {index + 1}. {questions.question}
          </h2>
          <ul>
            <li
              ref={option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {questions.option1}
            </li>
            <li
              ref={option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {questions.option2}
            </li>
            <li
              ref={option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {questions.option3}
            </li>
            <li
              ref={option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
            >
              {questions.option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <h2>
            {index + 1} of {quizQuestions.length}
          </h2>
        </>
      )}
      {result ? (
        <>
          <h2>
            You scored {score} out of {quizQuestions.length}
          </h2>
          <button onClick={retry}>Retry</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Quiz;
