import AnswersItem from "./AnswersItem/AnswersItem";
export default function AnswersList(props) {

  return (
    <ul className="answersList">
      {props.answers.map((elem) => (
          <AnswersItem
          styleId = {props.styleId}
          chosenId = {props.chosenId}
          onAnswerClick={props.onAnswerClick}
          key={elem.id}
          id={elem.id}
          answer={elem.text}
        />
      ))}
    </ul>
  );
}
