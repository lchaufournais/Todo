import clsx from "clsx"
import Head from "next/head.js"
import List from "@/components/business/List.jsx"
import routes from "@/routes.js"
import Link from "@/components/ui/Link.jsx"
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/solid"
import DeleteButton from "../business/DeleteButton.jsx"
import FilterButton from "../business/FilterButton.jsx"

const Page = (props) => {
  const { title = "To do", children, listId = null, className } = props
  return (
    <main className="flex flex-col">
      <Head>
        <title>{title} | To do </title>
      </Head>
      <header className="flex justify-between pt-2 border-b sticky">
        <div className="flex justify-start">
          <List selectedListId={listId} />
        </div>
        <Link
          href={routes.create.list}
          className="
            flex
            justify-end
            font-bold
            px-4 
            py-2 
            mr-9 
            border-l 
            border-r
            border-t 
            rounded-t-lg
          "
        >
          <PlusIcon className="w-5" />
        </Link>
      </header>
      <div className="flex justify-between border-b text-xl pb-2 mt-2 pl-2">
        <div className="flex justify-start">
          <Link href={listId ? routes.create.todo(listId) : ""}>
            <PlusIcon className="w-5" />
          </Link>
          <Link href={routes.modify.list(listId)}>
            <PencilSquareIcon className="ml-2 w-5 " />
          </Link>
          <DeleteButton />
        </div>
        <div className="flex justify-end pr-4">
          <FilterButton listId={listId} />
        </div>
      </div>
      <section className={clsx("flex flex-col", className)}>{children}</section>
    </main>
  )
}

export default Page
