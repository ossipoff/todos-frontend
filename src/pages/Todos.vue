<template>
  <q-page padding>
    <q-list>
      <q-item v-for="todo in todos" :key="todo.id">
        <q-item-main :label="todo.text" />
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todos',
  computed: {
    ...mapGetters({
      todos: 'todos/getTodos'
    })
  },
  methods: {
    ...mapActions({
      fetchTodos: 'todos/fetchTodos'
    })
  },
  mounted () {
    this.fetchTodos()
  }
}
</script>

<style>
</style>
