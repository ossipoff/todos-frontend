<template>
  <q-modal v-model="modalOpened">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn
            flat
            round
            dense
            icon="keyboard_arrow_left"
          />
          <q-toolbar-title>
            {{ headerTitle }} todo
          </q-toolbar-title>
        </q-toolbar>

        <div class="q-pa-md">
          <q-input v-model="text" stack-label="Text" class="q-mb-md" />

          <div class="row justify-end">
            <q-btn
              label="Cancel"
              @click="cancelClickHandler"
              class="q-mr-sm col-auto"
            />

            <q-btn
              color="primary"
              label="OK"
              @click="okClickHandler"
              class="col-auto"
            />
          </div>
        </div>
      </q-modal-layout>
    </q-modal>
</template>

<script>
export default {
  name: 'TodoEditor',
  data () {
    return {
      modalOpened: false,
      text: '',
      id: null,
      headerTitle: 'Add'
    }
  },
  methods: {
    show (todo) {
      this.text = todo.text
      this.id = todo.id
      this.modalOpened = true

      if (this.id === null) {
        this.headerTitle = 'Add'
      } else {
        this.headerTitle = 'Edit'
      }
    },
    okClickHandler () {
      this.$emit('ok', { id: this.id, text: this.text })
      this.modalOpened = false
    },
    cancelClickHandler () {
      this.$emit('cancel')
      this.modalOpened = false
    }
  }
}
</script>

<style>
</style>
