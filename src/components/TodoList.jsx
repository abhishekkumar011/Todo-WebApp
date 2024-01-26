import React from "react";
import { useState } from "react";
import { useTodo } from "../context";

const TodoList = ({ todo }) => {
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-black/20 rounded-lg px-3 py-1.5 gap-x-3 shadow-md duration-300 text-black w-full bg-[#c8b1f3] ${
        todo.checked ? "bg-[#c6e9a7]" : "bg-[#c8b1f3]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        onChange={toggleCompleted}
        checked={todo.checked}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-gray-800 ${
          isTodoEditable ? "border-black/20 px-2" : "border-transparent"
        } ${todo.checked ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/30 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.checked) return;
          
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.checked}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/30 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
};

export default TodoList;
