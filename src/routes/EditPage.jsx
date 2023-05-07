import { useParams, useLocation } from "react-router-dom";
import { useToDos } from "../app/useToDos";
import { TodoForm } from "../components/TodoForm";

function EditTodo() {
  const location = useLocation;
  const params = useParams();
  const id = Number(params.id);

  const { states, stateUpdate } = useToDos();
  const { loading, getTodo } = states;
  const { editTodo } = stateUpdate;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <h3>Cargando...</h3>;
  } else {
    //devuelve un objeto
    const todo = getTodo(id);
    todoText = todo.text;
  }

  return (
    <>
      <div className="container">
        <TodoForm
          label="Empieze a editar su ToDo"
          editInputDedault={todoText}
          submitEvent={(newText) => editTodo(id, newText)}
        />
      </div>
    </>
  );
}

export default EditTodo;
