<template>
  <header>
      <h1 class="flex flex-center mb-5 mt-2">
        <img width="80" src="../assets/logo.png" alt="">  
      </h1>
      <button class="button" @click="changeTheme">
        {{ buttonText }}
      </button>
      <nav class="panel mt-5"> 
          <ul class="links-col">
            <li>
              <router-link to="/" class="links">
                <i class="fas fa-tasks"></i>
                <span class="ml-2">Tasks</span>
              </router-link>
            </li>
            <li>
              <router-link to="/projects" class="links">
                <i class="fas fa-project-diagram"></i>
                <span class="ml-2">Projects</span>
              </router-link>
            </li>
          </ul>

      </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LateralBar',
  emits: ['toThemeChanged'],
  data () {
    return {
      darkModeActive: false
    }
  },
  computed: {
    buttonText () {
      if (this.darkModeActive) {
        return 'Turn Off Darkmode'
      }
      return 'Turn On Darkmode'
    }
  },
  methods: {
    changeTheme () {
      this.darkModeActive = !this.darkModeActive
      this.$emit('toThemeChanged', this.darkModeActive)
    }
  }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
}
.button {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.links-col {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.links {
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
}
.links:hover {
  color: #FAF0CA;
}
.links.router-link-active {
  color: #416e98;
}

.button:hover { 
  background-color: #0d3b66;
  color: #FAF0CA;
  border-radius: 40;
}
</style>
