<script setup lang="ts">
import type { Unit } from '@/types/units';
import { computed } from 'vue';

interface Props {
  modelValue: string;
  id: string;
  name: string;
  label: string;
  options: Unit[];
  errorMessage?: string;
}

const emits = defineEmits(['update:modelValue']);
const props = defineProps<Props>();

// It's probably better to use watcher, but I like this way
const localValue = computed({
  get(): string {
    return props.modelValue || props.options[0].value;
  },
  set(value): void {
    emits('update:modelValue', value);
  },
});

const hasError = computed(() => !!props.errorMessage);
</script>

<template>
  <label :for="id" class="block mb-2 text-sm font-medium text-gray-900" :class="{ 'text-red-700': hasError }">
    {{ label }}
  </label>

  <select
    v-model="localValue"
    :id="id"
    :name="name"
    class="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    :class="{ 'bg-red-50 border-red-500 text-red-900 placeholder-red-700': hasError }"
  >
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.title }}
    </option>
  </select>

  <p v-if="hasError" class="mt-2 text-sm" :class="{ 'text-red-600': hasError }">
    {{ errorMessage }}
  </p>
</template>

<style scoped lang="scss"></style>
