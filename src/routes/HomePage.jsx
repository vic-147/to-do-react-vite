import { useNavigate } from "react-router-dom";
import { useToDos } from "../app/useToDos";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItems } from "../components/TodoItems";
import { TodoHeader } from "../components/TodoHeader";
import { TdEmpty } from "../components/TdEmpty";
import { TdError } from "../components/TdError";
import { TdLoading } from "../components/TdLoading";
import { ChangeAlert } from "../components/listener/ChangeAlert";
import "../styles/HomePage.css";

function HomPage() {
  const navigate = useNavigate();
  const { states, stateUpdate } = useToDos();

  const {
    loading,
    error,
    completedTodos,
    totalTodos,
    search,
    setSearch,
    searchedTodos,
    // openModal,
  } = states;

  const {
    // addTodo,
    completeTodo,
    deleteTodo,
    //  setOpenModal,
    syncTodos,
  } = stateUpdate;

  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch search={search} setSearch={setSearch} />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={search}
        onError={() => <TdError />}
        onLoading={() => <TdLoading />}
        onEmpty={() => <TdEmpty />}
        onEmptySearch={(searchText) => (
          <p className="empty">
            No hubo resultado para <span className="color">{searchText}</span>
          </p>
        )}

        // render props
        // render={(todo) => (
        //   <TodoItems
        //     key={todo.text}
        //     text={todo.text}
        //     check={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {
          (todo) => (
            <TodoItems
              key={todo.id}
              text={todo.text}
              check={todo.completed}
              onComplete={() => completeTodo(todo.id)}
              onEdit={() =>
                navigate("/edit/" + todo.id, {
                  state: {
                    todo,
                  },
                })
              }
              onDelete={() => deleteTodo(todo.id)}
            />
          )
          //esto es una render huok
        }
      </TodoList>
      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}
      <CreateTodoButton onClick={() => navigate("/new")} />
      <ChangeAlert sincronize={syncTodos} />
    </>
  );
}

export default HomPage;
