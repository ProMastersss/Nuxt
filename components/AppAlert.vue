<template>
  <v-alert border="start" type="info">
    <slot />
  </v-alert>
</template>

<style scoped lang="scss">
.alert {
  margin: 10px 0;
  padding: 10px;
  background-color: lightblue;
}
</style>
