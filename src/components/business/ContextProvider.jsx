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
  const [isChecked, setIsChecked] = useState(false)
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
      const tempoList = {
        id: getNextIdList(),
        ...list,
      }
      setLists((lists) => [...lists, tempoList])
      return tempoList
    },
    [getNextIdList]
  )

  const createTodo = useCallback(
    (todo) => {
      setTodos((todos) => [
        ...todos,
        {
          id: getNextIdTodo(),
          checked: false,
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

  const deleteTodo = useCallback(
    (listId, todoId) => {
      const indexTodo = todos.findIndex(
        (todo) => todo.id === parseInt(todoId) && todo.idList === listId
      )
      const updatedTodo = [...todos]
      updatedTodo.splice(indexTodo, 1)
      setTodos(updatedTodo)
    },
    [todos]
  )

  const updateList = useCallback((updatedList) => {
    setLists((lists) =>
      lists.map((list) => (list.id === updatedList.id ? updatedList : list))
    )
  }, [])

  const updateTodo = useCallback((updatedTodo) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    )
  }, [])

  const updateIsChecked = useCallback((updateIsCheck) => {
    setIsChecked(updateIsCheck)
  }, [])

  const updateTodoCheck = (id) => {
    setTodos((todos) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked }
        }
        return todo
      })
      return updatedTodos
    })
  }

  return (
    <Context.Provider
      {...props}
      value={{
        todos,
        lists,
        isChecked,
        createList,
        createTodo,
        deleteList,
        deleteTodo,
        updateList,
        updateTodo,
        updateIsChecked,
        updateTodoCheck,
      }}
    />
  )
}

export default ContextProvider
