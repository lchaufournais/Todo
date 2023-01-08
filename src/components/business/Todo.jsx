import { useContext } from "@/components/business/ContextProvider.jsx"
import Link from "@/components/ui/Link.jsx"
import routes from "@/routes.js"
import { useEffect, useState, useCallback } from "react"
import DeleteTodoButton from "@/components/business/DeleteTodoButton.jsx"

const Todo = (props) => {
  const { todos, updateTodoCheck, deleteTodo, isChecked } = useContext()
  const { listId } = props
  let [currentTodos, setCurrentTodos] = useState([])

  const handleCheckBoxChange = (todo) => {
    updateTodoCheck(todo.id)
  }
  const getCurrentTodos = useCallback(() => {
    const updatedCurrentTodos = []
    todos.map((todo) => {
      if (todo.idList === listId && false === todo.checked && isChecked) {
        updatedCurrentTodos.push(todo)
      } else if (todo.idList === listId && false === isChecked) {
        updatedCurrentTodos.push(todo)
      }
    })
    setCurrentTodos(updatedCurrentTodos)
  }, [todos, listId, isChecked])

  useEffect(() => {
    getCurrentTodos()
  }, [getCurrentTodos, isChecked])

  return (
    <ul>
      {currentTodos.map((todo) => (
        <li key={todo.id} className="flex text-2xl px-4 py-2 border-b group">
          <input
            type="checkbox"
            checked={todo.checked}
            className="accent-green-400 w-6 mr-5"
            onChange={() => handleCheckBoxChange(todo)}
          />
          <Link
            href={routes.modify.todo(listId, todo.id)}
            className="pb-2 mr-auto"
          >
            {todo.description}
          </Link>
          <DeleteTodoButton
            todoId={todo.id}
            listId={listId}
            deleteTodo={deleteTodo}
          ></DeleteTodoButton>
        </li>
      ))}
    </ul>
  )
}

export default Todo
