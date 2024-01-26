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

  return (
    <div
      className={`flex border border-black/20 rounded-lg px-3 py-1.5 gap-x-3 shadow-md duration-300 text-black w-full bg-[#c8b1f3]`}
    >
      <input type="checkbox" className="cursor-pointer" />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-gray-800 ${
          isTodoEditable ? "border-black/20 px-2" : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/30 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (isTodoEditable) {
            editTodo();
          } else {
            setIsTodoEditable((prev) => !prev);
          }
        }}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/30 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
        ❌
      </button>
    </div>
  );
};

export default TodoList;
