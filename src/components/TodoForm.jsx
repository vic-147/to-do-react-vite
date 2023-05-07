import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TodoForm.css";

function TodoForm(props) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState(
    props.editInputDedault || ""
  );

  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  const onCancel = () => {
    navigate("/");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(inputValue);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={inputValue}
        onChange={onChange}
        placeholder="Cualquier tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
        >
          <i className="fa-regular fa-circle-xmark fa-xl"></i>
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          <i className="fa-regular fa-circle-check fa-xl"></i>
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
