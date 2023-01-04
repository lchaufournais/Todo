import { useContext } from "@/components/business/ContextProvider.jsx"
import Link from "@/components/ui/Link.jsx"
import routes from "@/routes.js"
import { useEffect, useState, useCallback } from "react"

const Todo = (props) => {
  const { todos, setTodos, handleCheckBoxChange } = useContext()
  /* const { listId } = props
  const [currentTodos, setCurrentTodos] = useState([])
  const getCurrentTodos = useCallback(() => {
    const tempoTodo = []
    todos.map((todo) => {
      console.log(listId)
      console.log(todo.idList)
      if (todo.idList === listId) {
        tempoTodo.push(todo)
      }
    })
    setCurrentTodos(tempoTodo)
  }, [])
  useEffect(() => {
    getCurrentTodos()
  })
  console.log(currentTodos)
*/
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheckBoxChange(todo.id)}
          />
          <Link href={routes.home}>{todo.text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Todo
