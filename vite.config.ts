import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';
import typescript2 from 'rollup-plugin-typescript2';

const libraryName = 'element-generator-library';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    libCss(),
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
      entry: `src/lib/${libraryName}.ts`,
      name: libraryName,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `${libraryName}.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/lib/main.ts'),
      },
      external: ['vue'],
      output: {
        assetFileNames: (assetInfo) =>
          'main.css' === assetInfo.name ? `${libraryName}.css` : assetInfo.name || 'styles.css',
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
