export const fetchTodos = ({ commit }) =>
  new Promise((resolve, reject) => {
    resolve()
  })

export const addTodo = ({commit}, todo) =>
  new Promise((resolve, reject) => {
    commit('storeAddTodo', todo)
    resolve()
  })
