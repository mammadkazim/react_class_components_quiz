import React from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import quizData from "./quizData";
console.log(quizData);
function Quiz() {
  const [styleId, setStyleId] = React.useState(null);
  const [chosenId, setChosenId] = React.useState(null);
  const [quiz, setQuiz] = React.useState(quizData.quizData);
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [trueAnswerCount, setTrueAnswerCount] = React.useState(0);
  const [falseAnswerCount, setFalseAnswerCount] = React.useState(0);

  const onAnswerClickHandler = (id) => {
    setChosenId(id);
    // id == quiz[activeQuestion].rightAnswerId
    //   ? (setTrueAnswerCount(trueAnswerCount + 1), setStyleId("true"))
    //   : (setFalseAnswerCount(falseAnswerCount + 1), setStyleId("false"));
    if (id == quiz[activeQuestion].rightAnswerId) {
      setTrueAnswerCount(trueAnswerCount + 1);
      setStyleId("true");
    } else {
      setFalseAnswerCount(falseAnswerCount + 1);
      setStyleId("false");
    }
    console.log(quiz);
    console.log(activeQuestion);
    setTimeout(() => {
      setActiveQuestion(activeQuestion + 1);
      setStyleId(null);
    }, 500);
  };

  const tryAgainHandler = () => {
    setActiveQuestion(0);
    setTrueAnswerCount(0);
    setFalseAnswerCount(0);
  };

  return quiz.length > activeQuestion ? (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Quiz</h1>
      <ActiveQuiz
        quiz={quiz[activeQuestion]}
        questionNumber={activeQuestion + 1}
        quizLength={quiz.length}
        onAnswerClick={onAnswerClickHandler}
        styleId={styleId}
        chosenId={chosenId}
      />
    </div>
  ) : (
    <div className="finish-container">
      <div className="finish">
        You finished the quiz
        {trueAnswerCount > falseAnswerCount ? (
          <>
            <div className="passed">Congratultions, you passed the test!</div>
          </>
        ) : (
          <>
            <div className="failed">Sorry, you failed the test!</div>
          </>
        )}
      </div>
      <button className="tryAgainBtn" onClick={tryAgainHandler}>
        Try Again
      </button>
      <div className="result-container">
        <p>True Answer Count: {trueAnswerCount}</p>
        <p>False Answer Count: {falseAnswerCount}</p>
      </div>
    </div>
  );
}
export default Quiz;
