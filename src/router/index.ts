import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutMeView from '../views/AboutMeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/projects',
    component: ProjectsView,
  },
  {
    path: '/aboutme',
    component: AboutMeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
