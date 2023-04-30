import type { ElementProperties } from '@/lib/types/element';
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useElementStore = defineStore('element', () => {
  const data = ref<ElementProperties | null>(null);

  function saveElement(payload: ElementProperties): void {
    data.value = Object.assign({}, payload);
  }

  return {
    data,
    saveElement,
  };
});
