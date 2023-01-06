import { useRouter } from "next/router.js"
import { useContext } from "@/components/business/ContextProvider.jsx"
import { useCallback } from "react"
import routes from "@/routes.js"
import FormTodo from "@/components/business/FormTodo.jsx"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      listId: Number.parseInt(params.listId, 10),
    },
  },
})

const CreateTodoPage = (props) => {
  const { listId } = props.params
  const { createTodo } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      createTodo({ ...values, idList: listId })
      router.push(routes.view.list(listId))
    },
    [router, createTodo, listId]
  )
  return <FormTodo onSubmit={handleSubmit} />
}

export default CreateTodoPage
