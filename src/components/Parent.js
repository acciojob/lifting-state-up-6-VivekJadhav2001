import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [todos, setTodos] = useState([
    { id: 0, task: 'Learn React', status: false },
    { id: 1, task: 'Build a React app', status: false },
    { id: 2, task: 'Deploy the React app', status: false },
  ]);

  function handleComplete(id) {
    setTodos(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status: true } : item
      )
    );
  }

  return (
    <div>
      <h1 className="text-3xl">Parent Component</h1>
      <Child todos={todos} handleComplete={handleComplete} />
    </div>
  );
}

export default Parent;
