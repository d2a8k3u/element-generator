<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Element generator',
  },
});
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped lang="scss"></style>
