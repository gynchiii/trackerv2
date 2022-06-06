<template>
  <section class="projects">
    <h1 class="title">project</h1>
    <router-link class="new-project button" to="/projects/new">
      <span class="icon is-small">
          <i class="fas fa-plus ml-1"></i>
      </span>
      <span class="ml-1">New Project</span>
    </router-link>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Name
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>
            {{ project.id }}
          </td>
          <td>
            {{ project.name }}
          </td>
          <td>
              <router-link :to="`/projects/${project.id}`" class="button">
                <span class="icon is-small">
                  <i class="fas fa-pencil-alt"></i>
                </span>  
              </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from "vue";

export default defineComponent({
    name: "Projects",
    setup() {
        const store = useStore();
        return {
            projects: computed(() => store.state.projects)
        };
    },
})
</script>

<style scoped>
.projects {
  padding: 1.25rem;
}
.new-project {
  padding: 1rem;
}

</style>
