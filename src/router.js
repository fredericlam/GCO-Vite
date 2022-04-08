import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue') , 
    meta: { breadcrumb: [ { name: 'home' } ] }
  },
  {
    path: '/home2',
    name: 'home2',
    component: () => import('./pages/Home2.vue') , 
    meta: { breadcrumb: [ { name: 'home' } ] }
  }, 
  {
    path: '/about-the-gco',
    name: 'about-the-gco',
    component: () => import('./pages/About.vue') ,
    meta: { breadcrumb: [ { name: 'about-the-gco' } ] }

  }, 
  {
    path: '/graphics',
    name: 'graphics',
    component: () => import('./pages/Graphics.vue') ,
    meta: { breadcrumb: [ { name: 'about-the-gco' } ] }

  }, 
  {
    path: '/causes',
    name: 'causes',
    component: () => import('./pages/Causes.vue') ,
    meta: { breadcrumb: [ { name: 'about-the-gco' } ] }
  }, 
  {
    path: '/projects',
    name: 'projects',
    component: () => import('./pages/Projects.vue') ,
    meta: { breadcrumb: [ { name: 'projects' } ] }
  }, 
  {
    path: '/404',
    name: '404',
    component: () => import('./pages/404.vue')
  }, 
  {
    path: '/help',
    name: 'help',
    component: () => import('./pages/Help.vue'),
    meta: { breadcrumb: [ { name: 'help' } ] }
  }, 
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('./pages/WhoWeAre.vue'),
    meta: { breadcrumb: [ { name: 'about-us' } ] }
  }, 
  {
    path: '/projects/paf-france-en',
    name: 'paf-france-en',
    component: () => import('./pages/projects/PafFranceEn.vue'),
    meta: { breadcrumb: [ { name: 'paf-france-en' } ] }
  }, 
  {
    path: '/projects/paf-france-fr',
    name: 'paf-france-fr',
    component: () => import('./pages/projects/PafFranceFr.vue'),
    meta: { breadcrumb: [ { name: 'paf-france-fr' } ] }
  }, 
  {
    path: '/projects/csa',
    name: 'csa',
    component: () => import('./pages/projects/Csa.vue'),
  },
  {
    path: '/projects/infographics',
    name: 'infographics',
    component: () => import('./pages/InfogramInfographics.vue'),
    meta: { breadcrumb: [ { name: 'infographics' } ] }

  },
  {
    path: '/article',
    name: 'article',
    component: () => import('./pages/Article.vue'),
    meta: { breadcrumb: [ { name: 'article' } ] }

  },
  // aliases
  { path: "/:catchAll(.*)", redirect: '/404' }
] ; 

const Router = createRouter({ history, routes });

export default Router ; 