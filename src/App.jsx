import { TodoInput, TodoList } from "./components";

function App() {
  return (
    <>
      <div className="bg-[#7c44e4] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-3 bg-[#FBF9F1] text-gray-800 font-mono">
          <h1 className="text-2xl font-extrabold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-10">
            <TodoInput />
          </div>
          <div className="flex flex-wrap gap-y-3">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
