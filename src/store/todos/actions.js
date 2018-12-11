export const fetchTodos = ({ commit }) =>
  new Promise((resolve, reject) => {
    resolve()
  })

export const addTodo = ({commit}, todo) =>
  new Promise((resolve, reject) => {
    commit('storeAddTodo', todo)
    resolve()
  })

export const deleteTodo = ({commit}, id) =>
  new Promise((resolve, reject) => {
    commit('storeDeleteTodo', id)
    resolve()
  })
