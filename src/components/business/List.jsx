import { useContext } from "@/components/business/ContextProvider.jsx"
import Link from "@/components/ui/Link.jsx"
import routes from "@/routes.js"
import ProgressBar from "@/components/ui/ProgressBar.jsx"

const List = (props) => {
  const { lists, todos } = useContext()
  const { selectedListId } = props
  const todosChecked = todos.filter(({ checked }) => checked === true)
  const lengthTodo = (listId) => {
    return todos.filter(({ idList }) => idList === listId).length
  }
  const lengthTodoChecked = (listId) => {
    return todosChecked.filter(({ idList }) => idList === listId).length
  }
  return (
    <>
      {lists.map((list) => (
        <div key={list.id}>
          <Link
            className="
            flex
            font-bold
            px-4
            py-2
            first:border-l
            border-r 
            border-t 
            rounded-t-lg
          "
            key={list.id}
            href={{
              pathname: routes.view.list(list.id),
              query: { listId: list.id },
            }}
          >
            {list.description}
            <div className="flex bg-blue-400 rounded-xl ml-2">
              <div className="bg-green-400 rounded-xl px-3">
                {lengthTodoChecked(list.id)}
              </div>
              <div className="px-2">{lengthTodo(list.id)}</div>
            </div>
          </Link>
          {selectedListId === list.id && (
            <ProgressBar
              lengthTodo={lengthTodo(list.id)}
              lengthTodoChecked={lengthTodoChecked(list.id)}
            ></ProgressBar>
          )}
        </div>
      ))}
    </>
  )
}

export default List
