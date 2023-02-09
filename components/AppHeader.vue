<template>
  <v-app-bar class="bg-green-accent-4">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-img
      class="flex-grow-0"
      width="40"
      height="40"
      src="/nuxt-logo.svg"
    ></v-img>
    <v-app-bar-title class="font-weight-bold">Nuxt 3</v-app-bar-title>

    <template v-slot:append>
      <v-btn v-if="isAuth" border="none" @click="toggleAuth">Logout</v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <v-list-item title="Home" @click="$router.push('/')"></v-list-item>
      <v-list-item title="About" @click="$router.push('/about')"></v-list-item>
      <v-list-item title="Posts" @click="$router.push('/posts')"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const isAuth = useIsAuth();
    const drawer = ref(false);

    const toggleAuth = () => {
      isAuth.value = !isAuth.value;
      const router = useRouter();
      router.push("/login");
    };

    return { drawer, isAuth, toggleAuth };
  },
});
</script>

<style scoped lang="scss">
nav {
  display: flex;
  color: white;
  background-color: $bgColor;
}

ol {
  display: flex;
  align-items: center;
  margin: 10px;
}

li {
  display: inline;
  list-style: none;
  margin-right: 20px;
}

a {
  color: white;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>
