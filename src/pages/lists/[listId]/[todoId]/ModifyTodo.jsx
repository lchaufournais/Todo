import { useContext } from "@/components/business/ContextProvider.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"
import routes from "@/routes.js"
import FormEditTodo from "@/components/business/FormEditTodo.jsx"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      listId: Number.parseInt(params.listId, 10),
      todoId: Number.parseInt(params.todoId, 10),
    },
  },
})

const TodoEditPage = (props) => {
  const { listId, todoId } = props.params
  const { updateTodo, todos } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      updateTodo({ ...values, id: todoId, idList: listId })
      router.push(routes.view.list(listId))
    },
    [router, updateTodo, todoId, listId]
  )

  return (
    <FormEditTodo
      listId={listId}
      onSubmit={handleSubmit}
      initialValues={todos.find(({ id }) => id === todoId)}
    />
  )
}

export default TodoEditPage
