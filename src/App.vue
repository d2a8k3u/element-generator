<script setup lang="ts">
import { computed } from 'vue';
import { useElementStore } from './stores/element';
import ElementForm from './components/ElementForm.vue';
import ElementPreview from './components/ElementPreview.vue';

interface Props {
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'Element generator',
});

const elementStore = useElementStore();

const canShowResult = computed(() => elementStore.isSaved);
</script>

<template>
  <div class="container mx-auto py-10 px-5">
    <h1 class="text-3xl underline text-center">
      {{ title }}
    </h1>

    <ElementForm></ElementForm>

    <ElementPreview v-if="canShowResult"></ElementPreview>
  </div>
</template>

<style scoped lang="scss"></style>
