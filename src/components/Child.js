import React from 'react'

function Child({ todos, setTodos, handleComplete }) {
    return (
        <div className='m-3.5'>
            <h2 className='text-2xl mb-1.5'>Child Component</h2>
            <ul>
                {todos.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.task}
                            {item.status ? "" : <button onClick={()=>handleComplete(item.id)} className='bg-blue-400 p-1.5 text-white border-2 border-black cursor-pointer'>Complete</button>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Child