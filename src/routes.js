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
  },
}

export default routes
