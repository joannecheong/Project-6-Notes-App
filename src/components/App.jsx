import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes(prevNotes => {
      return[
        ...prevNotes, note
      ]
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
     { notes.map((noteItem, index) => {
        return (
          <Note key={index} id={index} title={noteItem.title} content={noteItem.content} />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
