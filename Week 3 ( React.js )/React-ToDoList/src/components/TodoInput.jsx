import React, { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodo, todoValue, setTodoValue } = props;
  return (
    <header className="w-full h-1/3 font-roboto">
      <h1 className="mt-10 text-center font-bold font-inter text-4xl sm:text-5xl lg:text-6xl tracking-wide bg-gradient-to-r from-yellow-200 to-red-900 bg-clip-text text-transparent">
        To Do List
      </h1>
      <div className="flex flex-wrap justify-center items-center text-center mt-10 w-full ">
        <input
          type="text"
          name="todoinput"
          id="todoinput"
          placeholder="Enter To Do..."
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          className="font-roboto text-center p-4 w-xl border border-yellow-200 rounded-md focus:outline-none mx-6 text-white"
        />
        <button className="my-6 p-4 w-con border border-neutral-200 text-white rounded-lg cursor-pointer hover:bg-neutral-200 hover:text-black"
          onClick={()=> {
            handleAddTodo(todoValue);
            setTodoValue("");
          }}>
          Add
        </button>
      </div>
    </header>
  );
};

export default TodoInput;
