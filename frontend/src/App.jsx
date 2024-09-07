import { useState } from 'react'
import {CreateTodo} from "./components/CreateTodo"
import {Todo} from "./components/Todos"
function App() {
  const [todos, setTodos] = useState([])
  fetch("http://localhost:3000/todos")
    .then(async (response) => {
      const data = await response.json()
      setTodos(data.todos)
    })
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo todos={todos}></Todo>
    </div>
  )
}

export default App
