<template>
  <div>
    <h1>Post {{ id }}</h1>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      validate: async (route) => {
        return /^\d+$/.test(route.params.id);
      },
    });
    
    const route = useRoute();
    const { id } = route.params;

    return { id };
  },
};
</script>

<style lang="scss" scoped>
</style>
