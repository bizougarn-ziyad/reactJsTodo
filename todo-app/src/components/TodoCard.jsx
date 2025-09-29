import React from 'react'

export const TodoCard = (props) => {
    const { todo, handleDeleteTodo, handleCompleteTodo, todoIndex } = props;
    return (
        <div className={`card todo-item ${todo.complete ? 'todo-complete' : ''}`}>
            <p>{todo.input}</p>
            <div className='todo-buttons'>
                <button
                    disabled={todo.complete}
                    onClick={() => handleCompleteTodo(todoIndex)}
                >
                    <h6>{todo.complete ? '✓ Done' : 'Mark Done'}</h6>
                </button>
                <button onClick={() => handleDeleteTodo(todoIndex)}>
                    <h6>🗑 Delete</h6>
                </button>
            </div>
        </div>
    )
}
