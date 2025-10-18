// Child.jsx
import React from "react";

function Child({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}{" "}
            {!todo.status && (
              <button
                onClick={() => handleComplete(todo.id)}
                className="bg-blue-400 p-1.5 text-white border-2 border-black cursor-pointer"
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Child;
