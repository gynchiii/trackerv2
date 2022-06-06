import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tasks from '../views/Tasks.vue'
import Projects from '../views/Projects.vue'
import Form from '../views/Projects/Form.vue'


//type w/ represents the interface of each application route
const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects/new',
      name: 'New project',
      component: Form
    },
    {
      path: '/projects/:id',
      name: 'edit project',
      component: Form
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;