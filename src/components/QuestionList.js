import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList( {list, setList } ) {

  function deleteFromState(deleteItem) {
    setList( list.filter(x=> ( x !== deleteItem )  ) )
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{ list.map(question => <QuestionItem key={question.id} question={question} deleteFromState={deleteFromState} /> ) }</ul>
    </section>
  );
}
export default QuestionList;