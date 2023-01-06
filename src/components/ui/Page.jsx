import clsx from "clsx"
import Head from "next/head.js"
import List from "@/components/business/List.jsx"
import routes from "@/routes.js"
import Link from "./Link.jsx"
import { PlusIcon, PencilSquareIcon } from "@heroicons/react/24/solid"
import DeleteButton from "../business/DeleteButton.jsx"

const Page = (props) => {
  const { title = "To do", children, listId = null, className } = props
  return (
    <main className="flex flex-col">
      <Head>
        <title>{title} | To do </title>
      </Head>
      <header className="flex justify-between pt-2 border-b sticky">
        <div className="flex justify-start">
          <List />
        </div>
        <Link
          href={routes.create.list}
          className="flex justify-end font-bold px-4 py-2 mr-9 border-l border-r border-t rounded-t-lg"
        >
          <PlusIcon className="w-5" />
        </Link>
      </header>
      <div className="flex border-b text-xl pb-1.5 mt-2 pl-2">
        <Link href={routes.create.todo(listId)}>
          <PlusIcon className="w-5" />
        </Link>
        <Link href={routes.modify.list(listId)}>
          <PencilSquareIcon className="ml-2 w-5 " />
        </Link>
        <DeleteButton></DeleteButton>
      </div>
      <section className={clsx("flex flex-col", className)}>{children}</section>
    </main>
  )
}

export default Page
