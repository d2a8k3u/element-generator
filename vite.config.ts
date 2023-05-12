import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';
import checker from 'vite-plugin-checker';
import typescript from 'rollup-plugin-typescript2';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: path.resolve(__dirname, 'tsconfig.json'),
    }),
    libCss(),
    typescript({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      tsconfigOverride: {
        include: ['src/**/*.ts', 'src/**/*.vue'],
        exclude: ['node_modules', 'dist'],
      },
    }),
    checker({
      typescript: true,
    }),
  ],
  build: {
    cssCodeSplit: true,
    commonjsOptions: {
      esmExternals: true,
    },
    lib: {
      entry: 'src/main.ts',
      name: 'ElementGenerator',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `element-generator.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'pinia'],
      output: {
        assetFileNames: (assetInfo) =>
          'main.css' === assetInfo.name ? `element-generator.css` : assetInfo.name || 'styles.css',
        exports: 'named',
        globals: {
          vue: 'Vue',
          pinia: 'Pinia',
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
