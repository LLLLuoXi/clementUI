/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-09 14:52:12
 * @LastEditors: your name
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@clement': path.resolve(__dirname, './src/components/clement'),
    },
  },
})
