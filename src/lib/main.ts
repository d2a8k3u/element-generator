import type { App } from 'vue';
import { ElementGenerator } from './index';

export default {
  install: (app: App) => {
    app.component('ElementGenerator', ElementGenerator);
  },
};

export { ElementGenerator };
