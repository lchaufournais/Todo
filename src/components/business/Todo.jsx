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
        <li
          key={todo.id}
          className="flex justify-start text-2xl px-4 py-2 border-b"
        >
          <input
            type="checkbox"
            checked={todo.checked}
            className="accent-green-400 w-6 mr-5"
            onChange={() => handleCheckBoxChange(todo.id)}
          />
          <Link href={routes.modify.todo(listId, todo.id)} className="pb-2">
            {todo.description}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Todo
