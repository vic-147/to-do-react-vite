// import React from "react";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(props) {

  return (
    <button className="CreateTodoButton" onClick={props.onClick} title="button create">
      <i className="fa-solid fa-circle-plus fa-sm"></i>
    </button>
  );
}

export { CreateTodoButton };
