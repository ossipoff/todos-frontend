import axios from 'axios'

const baseUrl = 'https://localhost:5001/api'

export const fetchTodos = ({ commit }) =>
  new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/todos`).then(response => {
      commit('storeTodos', response.data)
      resolve()
    }).catch(error => {
      reject(error)
    })
  })

export const addTodo = ({commit}, todo) =>
  new Promise((resolve, reject) => {
    axios.post(`${baseUrl}/todos`, { text: todo.text }).then(response => {
      commit('storeAddTodo', todo)
      resolve()
    }).catch(error => {
      reject(error)
    })
  })

export const deleteTodo = ({commit}, id) =>
  new Promise((resolve, reject) => {
    axios.delete(`${baseUrl}/todos/${id}`).then(response => {
      commit('storeDeleteTodo', id)
      resolve()
    }).catch(error => {
      reject(error)
    })
  })

export const updateTodo = ({commit}, todo) =>
  new Promise((resolve, reject) => {
    axios.put(`${baseUrl}/todos/${todo.id}`, { text: todo.text }).then(response => {
      commit('storeUpdateTodo', todo)
      resolve()
    }).catch(error => {
      reject(error)
    })
  })
