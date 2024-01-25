import React from "react";

const TodoInput = () => {
  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/20 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-[#7c44e4] hover:bg-[#59319c] text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
