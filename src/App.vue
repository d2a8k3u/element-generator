<script setup lang="ts">
import { ref } from 'vue';
import ElementGenerator from '@/components/ElementGenerator.vue';

const title = ref('Element style generator');
</script>

<template>
  <main>
    <ElementGenerator :title="title"></ElementGenerator>
  </main>
</template>

<style lang="scss" scoped></style>
