
export default function AnswersItem (props){
    return (
        <li id = {props.id === props.chosenId ? props.styleId : null} className="answersItem" 
        onClick={()=>props.onAnswerClick(props.id)} >{props.answer}</li>
    )
}