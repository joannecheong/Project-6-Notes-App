import React from "react";

function Note(props) {
  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>Delete</button> 
    
    </div>
  );
}

export default Note;
