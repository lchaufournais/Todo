import {
  createContext,
  useState,
  useCallback,
  useContext as useNativeContext,
} from "react"

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [nextIdList, setNextIdList] = useState(5)
  const [nextIdTodo, setNextIdTodo] = useState(5)
  const [lists, setLists] = useState([
    { id: 1, description: "MyFirstList" },
    { id: 2, description: "caca" },
  ])

  const [todos, setTodos] = useState([])

  const getNextIdList = useCallback(() => {
    setNextIdList(nextIdList + 1)

    return nextIdList
  }, [nextIdList])

  const getNextIdTodo = useCallback(() => {
    setNextIdTodo(nextIdTodo + 1)

    return nextIdTodo
  }, [nextIdTodo])

  const createList = useCallback(
    (list) => {
      setLists((lists) => [
        ...lists,
        {
          id: getNextIdList(),
          ...list,
        },
      ])
    },
    [getNextIdList]
  )

  const createTodo = useCallback(
    (todo) => {
      setTodos((todos) => [
        ...todos,
        {
          id: getNextIdTodo(),
          ...todo,
        },
      ])
    },
    [getNextIdTodo]
  )

  const deleteList = useCallback(
    (listId) => {
      const indexList = lists.findIndex((list) => list.id === parseInt(listId))
      const updatedList = [...lists]
      updatedList.splice(indexList, 1)
      setLists(updatedList)
    },
    [lists]
  )

  const updateList = useCallback((updatedList) => {
    setLists((lists) =>
      lists.map((list) => (list.id === updatedList.id ? updatedList : list))
    )
  }, [])
  const handleCheckBoxChange = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked }
        }
        return todo
      })
      //  updateItems(updatedItems)
      return updatedTodos
    })
  }

  return (
    <Context.Provider
      {...props}
      value={{
        todos,
        lists,
        handleCheckBoxChange,
        createList,
        createTodo,
        deleteList,
        updateList,
      }}
    />
  )
}

export default ContextProvider
