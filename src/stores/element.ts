import type { ElementProperties } from '@/types/element';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useElementStore = defineStore('element', () => {
  const data = ref<ElementProperties | null>(null);

  const isSaved = computed<boolean>(() => undefined !== data.value?.id);

  const backgroundColor = computed(() => data.value?.backgroundColor);
  const description = computed(() => data.value?.description);

  const height = computed(() => data.value?.height);
  const heightUnit = computed(() => data.value?.heightUnit);
  const width = computed(() => data.value?.width);
  const widthUnit = computed(() => data.value?.widthUnit);

  function saveElement(payload: ElementProperties): Promise<void> {
    data.value = null;

    return axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        ...payload,
        description: payload.description?.slice(0, 10),
      })
      .then((resp) => {
        data.value = Object.assign({}, <ElementProperties>resp.data);
      });
  }

  return {
    data,
    isSaved,
    description,
    backgroundColor,
    height,
    heightUnit,
    width,
    widthUnit,
    saveElement,
  };
});
