const routes = {
  home: "/",
  create: {
    list: "/CreateList",
    todo: (listId) => `/lists/${listId}/CreateTodo`,
  },
  view: {
    list: (listId) => `/lists/${listId}/ViewList`,
  },
}

export default routes
