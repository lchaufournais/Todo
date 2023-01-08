import { useContext } from "@/components/business/ContextProvider.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"
import FormEditList from "@/components/business/FormEditList.jsx"
import routes from "@/routes.js"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      listId: Number.parseInt(params.listId, 10),
    },
  },
})

const ListEditPage = (props) => {
  const { listId } = props.params
  const { updateList, lists } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      updateList({ ...values, idList: listId })
      router.push(routes.view.list(listId))
    },
    [router, updateList, listId]
  )
  return (
    <FormEditList
      listId={listId}
      onSubmit={handleSubmit}
      initialValues={lists.find(({ id }) => id === listId)}
    />
  )
}

export default ListEditPage
