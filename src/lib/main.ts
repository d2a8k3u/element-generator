import type { App } from 'vue';
import { ElementGenerator } from './index';

import './styles.css';

export default {
  install: (app: App) => {
    app.component('ElementGenerator', ElementGenerator);
  },
};

export { ElementGenerator };
