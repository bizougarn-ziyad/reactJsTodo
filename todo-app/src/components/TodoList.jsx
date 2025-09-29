import React from 'react'
import { TodoCard } from './TodoCard'

export const TodoList = (props) => {
    const { todos, selectedTab } = props;
    const filterTodosList = selectedTab === 'All' ? todos : selectedTab === 'Completed' ?
        todos.filter(val => val.complete) :
        todos.filter(val => !val.complete)

    const getEmptyStateMessage = () => {
        switch (selectedTab) {
            case 'All':
                return {
                    title: "🎉 All caught up!",
                    message: "You have no tasks. Time to add some goals!"
                }
            case 'Active':
                return {
                    title: "✨ Nothing to do!",
                    message: "All your tasks are completed. Great job!"
                }
            case 'Completed':
                return {
                    title: "📝 No completed tasks yet",
                    message: "Complete some tasks to see them here."
                }
            default:
                return {
                    title: "No tasks found",
                    message: "Start by adding a new task."
                }
        }
    }

    if (filterTodosList.length === 0) {
        const emptyState = getEmptyStateMessage()
        return (
            <div className="empty-state">
                <h3>{emptyState.title}</h3>
                <p>{emptyState.message}</p>
            </div>
        )
    }

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                // Find the original index in the todos array
                const originalIndex = todos.findIndex(originalTodo => originalTodo === todo);
                return (
                    <TodoCard
                        key={originalIndex}
                        todoIndex={todos.findIndex(val => val.input === todo.input)}
                        {...props}
                        todo={todo}
                    />
                )
            })}
        </>
    )
}
