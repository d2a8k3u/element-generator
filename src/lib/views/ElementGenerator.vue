<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Element generator',
  },
});
</script>

<template>
  <h1 class="text-3xl font-bold underline hover:no-underline">{{ title }}</h1>
</template>

<style scoped lang="scss">
h1 {
  color: red;
}
</style>
