<template>
  <section class="projects">
    <h1 class="title">project</h1>
    <form @submit.prevent="save">
      <div class="field">
        <label for="projectName">
          Project Name
        </label>
        <input type="text" class="input" v-model="projectName" id="projectName">
      </div>
      <div class="field">
        <button class="button" type="submit">
          Save
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Form',
  data() {
    return {
      projectName: ''
    }
  },
  methods: {
    save() {
      this.store.commit('ADD_PROJECTS', this.projectName)
      this.projectName = '',
      this.$router.push('/Projects')
    }
  },
  setup() {
    const store = useStore()
      return {
        store
      }
    }
})
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
