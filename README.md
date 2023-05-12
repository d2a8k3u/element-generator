# Element generator

## Package installation

> .npmrc should contain registry definition

```shell
yarn add @d283k/element-generator
```

## Package usage

In main.{js,ts} file
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import ElementGenerator from "@d283k/element-generator";

const app = createApp(App)

app.use(ElementGenerator)

app.mount('#app')
```

Usage in a component
```vue
<script setup lang="ts"></script>

<template>
   <element-generator title="Optional parameter"></element-generator>
</template>

<style scoped></style>
```

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Collect coverage with [Vitest](https://vitest.dev/)

```sh
yarn coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
