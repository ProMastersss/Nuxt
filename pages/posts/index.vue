<template>
  <div>
    <h1>Posts</h1>
    <div>
      <span>API response: {{ response?.message }}</span>
    </div>
    <NuxtLink to="/posts/1">Open post 1</NuxtLink>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const { pending, data: response } = useFetch("/api/hello", {});

    return { response };
  },
});
</script>

<style lang="scss" scoped></style>
