# Element generator

## Package installation

> .npmrc should contain registry definition

```shell
yarn add @d283k/element-generator
```

## Package usage

```vue
<script setup lang="ts">
import {ElementGenerator} from "@d283k/element-generator";
</script>

<template>
   <element-generator></element-generator>
</template>
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
