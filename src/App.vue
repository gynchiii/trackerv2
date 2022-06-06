<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
    <div class="column is-one-quarter">
      <LateralBar @toThemeChanged="trocarTema"/>
    </div>
    <div class="column is-three-quarter content">
    <!-- Here's vueRouter  -->
    <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LateralBar from './components/LateralBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    LateralBar
  },
  data () {
    return {
      darkModeActive: false
    }
  },
  methods: {
    trocarTema (darkModeActive: boolean) {
      this.darkModeActive = darkModeActive
    }
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
