import React from 'react'

export const Header = (props) => {
    const { todos } = props;
    const todosLength = todos.length;
    const completedTodos = todos.filter(todo => todo.complete).length;
    const activeTodos = todosLength - completedTodos;

    return (
        <header>
            <h1 className='text-gradient'>📋 My Todo Dashboard</h1>
        </header>
    )
}
