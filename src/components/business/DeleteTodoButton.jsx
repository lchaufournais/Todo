import Button from "@/components/ui/Button.jsx"
import { useCallback } from "react"
import { TrashIcon } from "@heroicons/react/24/solid"

const DeleteTodoButton = ({ todoId, listId, deleteTodo }) => {
  const handleClickDelete = useCallback(() => {
    deleteTodo(listId, todoId)
  }, [deleteTodo, todoId])

  return (
    <Button onClick={handleClickDelete}>
      <TrashIcon className="invisible group-hover:visible w-5 ml-2" />
    </Button>
  )
}

export default DeleteTodoButton
