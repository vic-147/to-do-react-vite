import { useToDos } from "../app/useToDos";
import { TodoForm } from "../components/TodoForm";

function NewTodo() {
  const { stateUpdate } = useToDos();
  const { addTodo } = stateUpdate;

  return (
    <>
      <div className="container">
        <TodoForm
          label="Escriba su nuevo ToDo"
          submitEvent={(text) => addTodo(text)}
        />
      </div>
    </>
  );
}

export default NewTodo;
