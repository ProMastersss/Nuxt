<template>
  <div>
    <div class="text-h2">Welcome to the homepage</div>
    <img src="~/assets/images/sovy.jpeg" />
    <AppAlert>This is an auto-imported component</AppAlert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFindId } from "../composables/grpcClient";

export default defineComponent({
  setup() {
    // Middleware for this page
    /* definePageMeta({
      middleware: "auth",
    }); */

    const appConfig = useAppConfig();
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Home` : "Home";
      },
      script: [
        // { children: `console.log('${appConfig.description}')`, body: true },
      ],
    });

    return {};
  },
});
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
