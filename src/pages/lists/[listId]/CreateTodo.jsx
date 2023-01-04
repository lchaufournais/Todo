import FormList from "@/components/business/FormList.jsx"
import { useRouter } from "next/router.js"
import { useContext } from "@/components/business/ContextProvider.jsx"
import { useCallback } from "react"
import routes from "@/routes.js"

const CreateTodoPage = () => {
  const { createTodo } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      createTodo(values)
      router.push(routes.home)
    },
    [router, createTodo]
  )
  return <FormList onSubmit={handleSubmit} />
}

export default CreateTodoPage
