<template>
      <Form @toSaveTasks="saveTasks"/>
      <div class="lista">
        <Tasks v-for="(Tasks, index) in Taskss" :key="index" :Tasks="Tasks"/>
            <Box v-if="isListEmpty">
              Hmmm... seems like u not so much productive today...
            </Box>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Form from '../components/Form.vue'
import Tasks from '../components/Tasks.vue'
import Box from '../components/Box.vue'
import ITasks from '../interfaces/ITasks'

export default defineComponent({
  name: 'App',
  components: {
    Form,
    Tasks,
    Box
  },
  data () {
    return {
      Taskss: [] as ITasks[],
      darkModeActive: false
    }
  },
  computed: {
    isListEmpty () : boolean {
      return this.Taskss.length === 0
    }
  },
  methods: {
    saveTasks (Tasks: ITasks) {
      this.Taskss.push(Tasks)
    },
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.content {
  background-color: var(--bg-primary);
}
</style>
