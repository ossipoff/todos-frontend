export const storeTodos = (state, todos) => {
  state.todos = todos
}

export const storeAddTodo = (state, todo) => {
  state.todos.push(todo)
}
