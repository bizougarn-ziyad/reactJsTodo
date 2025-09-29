import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState, useEffect, use } from 'react'

function App() {
  const [todos, setTodos] = useState([{ input: 'Add a task', complete: true }])
  const [selectedTab, setSelectedTab] = useState('All')

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handlesSaveData(newTodoList)
  }

  const handleCompleteTodo = (index) => {
    let newTodoList = [...todos]
    let CompletedTodo = todos[index]
    CompletedTodo['complete'] = true
    newTodoList[index] = CompletedTodo
    setTodos(newTodoList)
    handlesSaveData(newTodoList)
  }

  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index)
    setTodos(newTodoList)
    handlesSaveData(newTodoList)
  }

  function handlesSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    // A react function only returns one element so we either return a div or a react fragment 🟥
    <>

      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}
export default App
