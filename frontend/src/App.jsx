import { useState, useEffect } from 'react'
import {CreateTodo} from "./components/CreateTodo"
import {Todo} from "./components/Todos"
function App() {
  const [todos, setTodos] = useState([])
  const [refresh, setRefresh] = useState(false)
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => {
        response.json()
          .then((json) => {
            setTodos(json.todos)
          })
      })
  },[refresh])
  return (
    <div>
      <CreateTodo refresh={refresh} setRefresh={setRefresh}></CreateTodo>
      <Todo todos={todos} refresh={refresh} setRefresh={setRefresh}></Todo>
    </div>
  )
}

export default App
