<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue?: string | number;
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  type?: 'text' | 'number';
  errorMessage?: string;
  required?: boolean;
}

const emits = defineEmits(['update:model-value']);
const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  required: false,
});

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:model-value', value);
  },
});

const hasError = computed(() => !!props.errorMessage);
</script>

<template>
  <label :for="id" class="block mb-2 text-sm font-medium" :class="{ 'text-red-700': hasError }">
    {{ label }}
  </label>

  <input
    v-model="localValue"
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    class="border text-sm rounded-lg block w-full p-2.5"
    :class="{ 'bg-red-50 border-red-500 text-red-900 placeholder-red-700': hasError }"
    :required="required"
  />

  <p v-if="hasError" class="mt-2 text-sm" :class="{ 'text-red-600': hasError }">
    {{ errorMessage }}
  </p>
</template>

<style scoped lang="scss"></style>
