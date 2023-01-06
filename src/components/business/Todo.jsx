import { useContext } from "@/components/business/ContextProvider.jsx"
import Link from "@/components/ui/Link.jsx"
import routes from "@/routes.js"
import { useEffect, useState, useCallback } from "react"

const Todo = (props) => {
  const { todos, setTodos, handleCheckBoxChange } = useContext()
  const { listId } = props
  const [currentTodos, setCurrentTodos] = useState([])
  const getCurrentTodos = useCallback(() => {
    const currentTodos = []
    todos.map((todo) => {
      if (todo.idList === listId) {
        currentTodos.push(todo)
      }
    })
    setCurrentTodos(currentTodos)
  }, [todos, listId])
  useEffect(() => {
    getCurrentTodos()
  }, [getCurrentTodos])

  return (
    <ul>
      {currentTodos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheckBoxChange(todo.id)}
          />
          <Link href={routes.home}>{todo.description}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Todo
