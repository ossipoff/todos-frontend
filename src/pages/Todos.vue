<template>
  <q-page padding>
    <q-list>
      <q-item v-for="todo in todos" :key="todo.id">
        <q-item-main :label="todo.text" />
      </q-item>
    </q-list>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="primary" icon="add" size="xl" @click="addModalOpened = true" />
    </q-page-sticky>
    <q-modal v-model="addModalOpened">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn
            flat
            round
            dense
            icon="keyboard_arrow_left"
          />
          <q-toolbar-title>
            Add todo
          </q-toolbar-title>
        </q-toolbar>

        <div class="q-pa-md">
          <q-input v-model="text" stack-label="Text" class="q-mb-md" />

          <div class="row justify-end">
            <q-btn
              label="Cancel"
              @click="addModalOpened = false"
              class="q-mr-sm col-auto"
            />

            <q-btn
              color="primary"
              label="OK"
              @click="addModalOpened = false"
              class="col-auto"
            />
          </div>
        </div>
      </q-modal-layout>
    </q-modal>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todos',
  data () {
    return {
      addModalOpened: false,
      text: ''
    }
  },
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
