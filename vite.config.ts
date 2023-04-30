import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import typescript2 from 'rollup-plugin-typescript2';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['src/lib/**/*.vue'],
      tsconfigDefaults: { compilerOptions: { declaration: true } },
      tsconfig: 'tsconfig.json',
      tsconfigOverride: { compilerOptions: { declaration: false } },
      exclude: ['vite.config.ts'],
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: 'src/lib/element-generator-library.ts',
      name: 'element-generator-library',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `element-generator-library.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/lib/main.ts'),
      },
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if ('main.css' === assetInfo.name) {
            return 'element-generator-library.css';
          }

          return assetInfo.name || 'element-generator-library.css';
        },
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
