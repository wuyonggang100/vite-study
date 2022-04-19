import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import testPlugin from './plugins/test-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), testPlugin()],
  // optimizeDeps: {
  //   // exclude: [], // 不要随意将一些库加入进来
  // },
  resolve: {
    alias: {
      '@styles': '/src/styles', // 第一个 / 表示项目根目录
    },
  },
});
