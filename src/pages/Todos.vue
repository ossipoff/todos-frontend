<template>
  <q-page padding>
    <q-list highlight v-if="todos.length > 0">
      <q-list-header>Todos</q-list-header>
      <q-item v-for="todo in todos" :key="todo.id" separator>
        <q-item-main :label="todo.text" />
        <q-item-side>
          <q-btn icon="edit" round @click="$refs.todoEditor.show(todo)" class="q-ma-xs" />
          <q-btn icon="delete" round @click="deleteTodo(todo.id)" class="q-ma-xs" />
        </q-item-side>
      </q-item>
    </q-list>
    <div v-else>
      There are no todos yet :(
    </div>
    <todo-editor ref="todoEditor" @ok="todoEditorOk" />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="primary" icon="add" size="xl" @click="$refs.todoEditor.show({ text: '', id: null })" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoEditor from '../components/TodoEditor'

export default {
  name: 'Todos',
  components: {
    TodoEditor
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      todos: 'todos/getTodos'
    })
  },
  methods: {
    ...mapActions({
      fetchTodos: 'todos/fetchTodos',
      addTodo: 'todos/addTodo',
      deleteTodo: 'todos/deleteTodo',
      updateTodo: 'todos/updateTodo'
    }),
    todoEditorOk (todo) {
      if (todo.id === null) {
        this.addTodo(todo)
      } else {
        this.updateTodo(todo)
      }
    }
  },
  mounted () {
    this.fetchTodos()
  }
}
</script>

<style>
</style>
