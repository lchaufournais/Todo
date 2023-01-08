import Button from "@/components/ui/Button.jsx"
import { useCallback } from "react"
import { useContext } from "@/components/business/ContextProvider.jsx"
import { TrashIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/router.js"
import routes from "@/routes.js"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      listId: Number.parseInt(params.listId, 10),
    },
  },
})

const DeleteButton = () => {
  const router = useRouter()
  const { deleteList } = useContext()
  const handleClickDelete = useCallback(() => {
    const listId = router.query.listId
    deleteList(listId)
    router.push(routes.home)
  }, [deleteList, router])

  return (
    <Button onClick={handleClickDelete}>
      <TrashIcon className="w-5 ml-2" />
    </Button>
  )
}

export default DeleteButton
