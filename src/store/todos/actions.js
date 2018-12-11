export const fetchTodos = ({ commit }) =>
  new Promise((resolve, reject) => {
    commit('storeTodos', [
        {
            id: 1,
            text: 'testing'
        }
    ])
    resolve()
})