import React, { useEffect, useState } from "react";
import NewTask from "../components/NewTask";
import TodoItems from "../components/TodoItems";
import { toast } from "react-toastify";

function HomePage() {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos((prevTodos) => [...prevTodos, task]);
    toast.success("Sucessfully Added");
  };

  const deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
    toast.success("Sucessfully Deleted");
  };

  const updateTask = (task, id) => {
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)));
    toast.success("Sucessfully Updated");
  };

  return (
    <>
      <NewTask addTask={addTask} />
      <ul className="bg-gray-200 rounded-md shadow-sm p-4">
        {todos.map((todo, i) => {
          return (
            <TodoItems
              key={i}
              id={i}
              todo={todo}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          );
        })}
      </ul>
    </>
  );
}

export default HomePage;
