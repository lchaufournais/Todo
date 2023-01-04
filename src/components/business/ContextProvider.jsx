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
    { id: 1, description: "cc" },
    { id: 2, description: "caca" },
  ])

  const [todos, setTodos] = useState([
    { idTodo: 1, idList: 1, text: "Élément 1", checked: false },
    { idTodo: 2, idList: 1, text: "Élément 2", checked: true },
    { idTodo: 3, idList: 2, text: "Élément 3", checked: false },
  ])

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
      }}
    />
  )
}

export default ContextProvider
