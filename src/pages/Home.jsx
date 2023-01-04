import Todo from "@/components/business/Todo.jsx"
import Page from "@/components/ui/Page.jsx"

const Home = (props) => {
  const { listId } = props
  return (
    <Page listId={listId} title="List of todo">
      <Todo />
    </Page>
  )
}

export default Home
