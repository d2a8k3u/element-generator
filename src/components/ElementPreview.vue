<script setup lang="ts">
import { computed } from 'vue';
import { useElementStore } from '@/stores/element';

const elementStore = useElementStore();

const description = computed(() => elementStore.description);
const height = computed(() => elementStore.height);
const width = computed(() => elementStore.width);

const backgroundColor = computed(() => elementStore.backgroundColor);
const elementHeight = computed(() => `${height.value}${elementStore.heightUnit}`);
const elementWidth = computed(() => `${width.value}${elementStore.widthUnit}`);
</script>

<template>
  <div v-if="elementStore.isSaved" class="container">
    <h2 class="text-2xl underline text-center mb-4">Element preview</h2>

    <div class="result-wrapper">
      <div id="descriptionWrapper" class="element-styles mx-auto border border-solid border-gray-900">
        <svg v-if="!!description" :height="height" :width="width" xmlns="http://www.w3.org/2000/svg">
          <g>
            <text y="50%" :textLength="width" class="fill-white" lengthAdjust="spacingAndGlyphs">
              {{ description }}
            </text>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.element-wrapper {
  width: 100%;
  min-width: 300px;
  height: 100%;
  overflow: auto;
}

.element-styles {
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind(elementWidth);
  height: v-bind(elementHeight);
  background-color: v-bind(backgroundColor);

  svg {
    color: white !important;
  }
}
</style>
