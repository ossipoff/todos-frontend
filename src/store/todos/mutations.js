export const storeTodos = (state, todos) => {
  state.todos = todos
}

export const storeAddTodo = (state, todo) => {
  todo.id = (state.todos.length > 0 ? Math.max.apply(Math, state.todos.map((o) => { return o.id })) : 0) + 1
  state.todos.push(todo)
}

export const storeDeleteTodo = (state, id) => {
  let todos = state.todos.filter((todo) => todo.id === id)
  if (todos.length === 1) {
    state.todos.splice(state.todos.indexOf(todos[0]), 1)
  }
}
