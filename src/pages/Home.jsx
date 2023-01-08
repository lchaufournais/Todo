import Todo from "@/components/business/Todo.jsx"
import Page from "@/components/ui/Page.jsx"

const Home = (props) => {
  const { listId } = props
  return (
    <Page listId={listId} title="List of todo">
      <Todo
        listId={listId}
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
      />
    </Page>
  )
}

export default Home
