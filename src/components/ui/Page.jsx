import clsx from "clsx"
import Head from "next/head.js"
import List from "@/components/business/List.jsx"
import Button from "@/components/ui/Button.jsx"
import routes from "@/routes.js"
import Link from "./Link.jsx"

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
          className="flex justify-end font-bold px-4 py-2 mr-9 border-l border-r border-t rounded-t-lg text-2xl"
        >
          +
        </Link>
      </header>
      <div className="font-bold border-b text-xl pb-1.5">
        <Link href={routes.create.todo(listId)}>+</Link>
      </div>
      <section className={clsx("flex flex-col", className)}>{children}</section>
    </main>
  )
}

export default Page
