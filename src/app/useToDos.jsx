import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useToDos() {
  const {
    item: todos,
    saveItem: saveTodos,
    syncItem: syncTodos,
    loading,
    error,
  } = useLocalStorage("TODO_V2", []);
  const [search, setSearch] = React.useState("");

  //conteo de ToDo
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!search.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id,
    });
    saveTodos(newTodos);
  };

  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    return todos[todoIndex];
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };
  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const states = {
    loading,
    error,
    completedTodos,
    totalTodos,
    search,
    setSearch,
    searchedTodos,
    getTodo,
  };

  const stateUpdate = {
    addTodo,
    completeTodo,
    editTodo,
    deleteTodo,
    syncTodos,
  };

  return { states, stateUpdate };
}

// generador de id
function newTodoId(TodoList) {
  if (!TodoList.length) {
    return 1;
  }

  const idList = TodoList.map((todo) => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export { useToDos };
