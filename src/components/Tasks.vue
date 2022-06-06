<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{ Tasks.description || 'Task w/out description' }}</div>
      <div class="column">
        <StopWatch :timeInSeconds="Tasks.durationInSeconds"/>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import StopWatch from "./StopWatch.vue";
import ITasks from '../interfaces/ITasks'
import Box from './Box.vue'

export default defineComponent({
  name: "Tasks",
  components: {
    StopWatch,
    Box
  },
  props: {
    Tasks: {
      type: Object as PropType<ITasks>,
      required: true
    }
  }
});
</script>
