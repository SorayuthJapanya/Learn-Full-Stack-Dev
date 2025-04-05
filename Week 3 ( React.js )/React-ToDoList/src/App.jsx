import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    if (newTodo === "") {
      alert("Please enter a todo");
      return;
    }
    settodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    settodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  return (
    <main className="w-full h-screen flex flex-col items-center justufy-center">
      <TodoInput
        handleAddTodo={handleAddTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </main>
  );
};

export default App;
