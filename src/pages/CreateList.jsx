import FormList from "@/components/business/FormList.jsx"
import { useRouter } from "next/router.js"
import { useContext } from "@/components/business/ContextProvider.jsx"
import { useCallback } from "react"
import routes from "@/routes.js"

const CreateListPage = () => {
  const { createList } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      const list = createList(values)
      router.push(routes.view.list(list.id))
    },
    [router, createList]
  )
  return <FormList onSubmit={handleSubmit} />
}

export default CreateListPage
