const routes = {
  home: "/",
  create: {
    list: "/CreateList",
    todo: (listId) => `/lists/${listId}/CreateTodo`,
  },
  view: {
    list: (listId) => `/lists/${listId}/ViewList`,
  },
  modify: {
    list: (listId) => `/lists/${listId}/ModifyList`,
    todo: (listId, todoId) => `/lists/${listId}/${todoId}/ModifyTodo`,
  },
}

export default routes
