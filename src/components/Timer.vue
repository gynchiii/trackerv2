<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <StopWatch :timeInSeconds="timeInSeconds" />
    <button class="button" @click="start" :disabled="StopWatchRunning">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finish" :disabled="!StopWatchRunning">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StopWatch from './StopWatch.vue'

export default defineComponent({
  name: "Timer",
  emits: ['toTimerFinished'],
  components: {
    StopWatch
  },
  data () {
    return {
      timeInSeconds: 0,
      StopWatch: 0,
      StopWatchRunning: false
    }
  },
  methods: {
    start () {
      // start count
      // 1 seg = 1000 ms
      this.StopWatchRunning = true
      this.StopWatch = setInterval(() => {
        this.timeInSeconds += 1        
      }, 1000)
    },
    finish () {
      this.StopWatchRunning = false
      clearInterval(this.StopWatch)
      this.$emit('toTimerFinished', this.timeInSeconds)
      this.timeInSeconds = 0
    }
  }
});
</script>