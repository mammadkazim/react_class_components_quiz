import React from "react";
import AnswersList from "./AnswersList/AnswersList";

function ActiveQuiz(props) {
  return (
    <div className="QuizWrapper">
      <div className="QuizQuestion">
        <p>{props.questionNumber}. {props.quiz.question}</p>
        <p>{props.questionNumber}/{props.quizLength}</p>
      </div>
      <AnswersList
      styleId={props.styleId}
      chosenId ={props.chosenId}
      onAnswerClick = {props.onAnswerClick}
      answers = {props.quiz.answers} />
    </div>
  );
}
export default  ActiveQuiz