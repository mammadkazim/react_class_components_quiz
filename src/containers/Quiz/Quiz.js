import React from "react";
import "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    styleId: null,
    chosenId: null,
    quiz: [
      {
        question: "How old are you?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "12", id: 1 },
          { text: "15", id: 2 },
          { text: "20", id: 3 },
          { text: "22", id: 4 },
        ],
      },
      {
        question: "This year",
        rightAnswerId: 4,
        id: 2,
        answers: [
          { text: "1222", id: 1 },
          { text: "1005", id: 2 },
          { text: "2200", id: 3 },
          { text: "2022", id: 4 },
        ],
      },
      {
        question: "5*8",
        rightAnswerId: 2,
        id: 3,
        answers: [
          { text: "35", id: 1 },
          { text: "40", id: 2 },
          { text: "45", id: 3 },
          { text: "53", id: 4 },
        ],
      },
      {
        question: "Last month",
        rightAnswerId: 3,
        id: 4,
        answers: [
          { text: "January", id: 1 },
          { text: "February", id: 2 },
          { text: "March", id: 3 },
          { text: "April", id: 4 },
        ],
      },
      {
        question: "Which of the following is the largest ocean in the world?",
        rightAnswerId: 2,
        id: 5,
        answers: [
          { text: "Atlantic", id: 1 },
          { text: "Pacific", id: 2 },
          { text: "North", id: 3 },
          { text: "Indian", id: 4 },
        ],
      },
    ],
    activeQuestion: 0,
    trueAnswerCount: 0,
    falseAnswerCount: 0,
  };
  onAnswerClickHandler = (id) => {
    console.log(this.state.chosenId)
    this.setState({
      chosenId: id
    })
    id == this.state.quiz[this.state.activeQuestion].rightAnswerId
      ? (this.setState({
          trueAnswerCount: this.state.trueAnswerCount + 1,
          styleId: "true",
        })
      )
      : this.setState({
          falseAnswerCount: this.state.falseAnswerCount + 1,
          styleId: "false",
        });
    
    setTimeout(() => {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1,
        styleId: null
      });
    }, 500);
    
  };

  tryAgainHandler() {
    window.location.reload();
  }
  render() {
    return this.state.quiz.length > this.state.activeQuestion ? (
      <div className="container">
        <h1 style={{textAlign:'center'}}>Quiz</h1>
        <ActiveQuiz
          quiz={this.state.quiz[this.state.activeQuestion]}
          questionNumber={this.state.activeQuestion + 1}
          quizLength={this.state.quiz.length}
          onAnswerClick={this.onAnswerClickHandler}
          styleId={this.state.styleId}
          chosenId = {this.state.chosenId}
        />
      </div>
    ) : (
      <div className="finish-container">
        <div className="finish">
          You finished the quiz
          {this.state.trueAnswerCount > this.state.falseAnswerCount ? (
            <>
              <div className="passed">Congratultions, you passed the test!</div>
              <button onClick={this.tryAgainHandler}>Try Again</button>
            </>
          ) : (
            <>
              <div className="failed">Sorry, you failed the test!</div>
              <button className="tryAgain" onClick={this.tryAgainHandler}>Try Again</button>
            </>
          )}
        </div>
        <div className="result-container">
          <p>True Answer Count: {this.state.trueAnswerCount}</p>
          <p>False Answer Count: {this.state.falseAnswerCount}</p>
        </div>
      </div>
    );
  }
}

export default Quiz;
