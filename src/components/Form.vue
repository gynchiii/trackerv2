<template>
  <div class="box Form">
    <div class="columns">
      <div 
      class="column is-6" 
      role="form" 
      aria-label="Form for a new Task"
      >
        <input
          type="text" 
          class="input" 
          placeholder="Wich task u wanna start?" 
          v-model="description" 
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="idProject">
            <option value="">Select a Project...</option>
            <option 
            :value="project.id"
            v-for="project in projects"
            :key="project.id"
            >
            {{ project.name}}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Timer @toTimerFinished="saveTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Timer from './Timer.vue'
import { useStore } from 'vuex'

import { key } from '@/store'

export default defineComponent({
  name: "Form",
  emits: ['toSaveTasks'],
  components: {
    Timer
  },
  data() {
    return {
      description: '',
      idProject: ''
    }
  },
  methods: {
    saveTask(elapsedTime: number): void {
      this.$emit('toSaveTasks', {
        durationInSeconds: elapsedTime,
        description: this.description,
        project: this.projects.find( proj => proj.id == this.idProject)
      })
      this.description = ''
    }
  },
  setup() {
    const store = useStore(key)
    return {
      projects: computed(() => store.state.projects)
    }
  }
});
</script>
<style>
.Form {
  color: var(--text-primary);
  background-color: var(--bg-primary);
}
</style>