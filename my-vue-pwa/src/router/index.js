import { createRouter, createWebHistory } from 'vue-router';
import SurveyForm from '../components/SurveyForm.vue';
import AdminView from '../components/AdminView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SurveyForm,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
