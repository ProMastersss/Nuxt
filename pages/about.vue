<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    useServerSeoMeta({
      title: "About",
      description: "My about page",
      ogDescription: "Still about my about page",
      ogTitle: "About",
      ogImage: "http://localhost:3000/sovy.jpeg",
    });
  },
});
</script>
