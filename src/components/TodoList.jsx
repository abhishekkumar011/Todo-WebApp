import React from "react";

const TodoList = () => {
  return (
    <div
      className={`flex border  rounded-lg px-3 py-1.5 gap-x-3 shadow-md duration-300 text-black w-full `}
    >
      <input type="checkbox" className="cursor-pointer" />
      <input
        type="text"
        className={`border-none outline-none w-full bg-transparent rounded-lg`}
        value={"Do coding"}
      />
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/30 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50">
        📁
      </button>
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/30 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
        ❌
      </button>
    </div>
  );
};

export default TodoList;
