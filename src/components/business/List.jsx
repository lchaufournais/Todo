import { useContext } from "@/components/business/ContextProvider.jsx"
import Link from "@/components/ui/Link.jsx"
import routes from "@/routes.js"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const List = () => {
  const { lists, setLists } = useContext()

  return (
    <>
      {lists.map((list) => (
        <Link
          className="font-bold px-4 py-2 first:border-l border-r border-t rounded-t-lg "
          key={list.id}
          href={{
            pathname: routes.view.list(list.id),
            query: { listId: list.id },
          }}
        >
          {list.description}
        </Link>
      ))}
    </>
  )
}

export default List
