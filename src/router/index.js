import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/views/Login";
import Registration from "@/views/Registration";
import Recovery from "@/views/Recovery";
import Reset from "@/views/Reset";
import User from "@/views/User";
import Feed from "@/views/Feed";
import Post from "@/views/Post";
import EditProfile from "@/views/EditProfile";
import Messages from "@/views/Messages";
import Dialog from "@/views/Dialog";
import NotFound from "@/views/NotFound";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
const authRoutes = ['/login', '/registration', '/recovery', '/reset',]
Vue.use(VueRouter);

const routes = [
  {path: '/', redirect: '/feed'},
  {
    path: '/',
    component: AuthLayout,
    meta: {
      auth: false
    },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/registration',
        name: 'Registration',
        component: Registration
      },
      {
        path: '/recovery',
        name: 'Recovery',
        component: Recovery
      },
      {
        path: '/reset',
        name: 'Reset',
        component: Reset
      },
    ]
  },
  {
    path: '/',
    component: MainLayout,
    meta: {
      auth: true
    },
    children: [
      {
        path: `/users/:id`,
        name: 'User',
        component: User
      },
      {
        path: '/feed',
        name: 'Feed',
        component: Feed
      },
      {
        path: `/posts/:id`,
        name: 'Post',
        component: Post
      },
      {
        path: '/edit-profile',
        name: 'Edit',
        component: EditProfile
      },
      {
        path: '/messages',
        name: 'Messages',
        component: Messages
      },
      {
        path: `/messages/:id`,
        name: 'Dialog',
        component: Dialog,
      },
      {
        path: '*',
        name: 'Not found',
        component: NotFound,
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('_token');
  if (isAuthenticated || authRoutes.indexOf(to.path) !== -1) {
    next();
  } else {
    next({name: 'Login'});
  }
});

export default router;
