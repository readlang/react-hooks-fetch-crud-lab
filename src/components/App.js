import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [list, setList] = useState([])

  useEffect(()=>{ 
    fetch("http://localhost:4000/questions") 
    .then((r)=>r.json())
    .then((d)=>setList(d))
}, [])

  function handleNewQuestion(questionData) {
    setList( [...list, questionData] )
  }


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addNewQuestion={handleNewQuestion}/> : <QuestionList list={list} setList={setList} />}
    </main>
  );
}

export default App;
