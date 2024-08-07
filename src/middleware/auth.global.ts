import { defineNuxtRouteMiddleware } from 'nuxt/app';
import { RouteLocationNormalized } from 'vue-router';

import {
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES,
  LOGIN_PAGE,
} from '@/constants/route';
import { useAuthStore } from '@/stores';

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized) => {
  const { isAuthenticated } = useAuthStore();
  const isPublicRoute = PUBLIC_ROUTES.includes(to.path);
  const isAuthRoute = AUTH_ROUTES.includes(to.path);

  if (!isAuthenticated && !isPublicRoute && !isAuthRoute) {
    return navigateTo(LOGIN_PAGE);
  }

  if (isAuthenticated && isAuthRoute) {
    return navigateTo(DEFAULT_LOGIN_REDIRECT);
  }
});
