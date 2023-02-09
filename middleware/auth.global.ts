import { useIsAuth } from "~~/composables/states";

export default defineNuxtRouteMiddleware((to, from) => {
  const isAuth = useIsAuth();

  if (isAuth.value === false && to.name !== "login") {
    return navigateTo("/login");
  }
});
