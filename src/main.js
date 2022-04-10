/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-10 22:05:24
 * @LastEditors: your name
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
// import Clment from "./plugins/clement"
import { ClRow, ClCol } from "./plugins/clement"

const app = createApp(App)
// app.use(Clment).mount('#app')
app
  .use(ClRow)
  .use(ClCol)
  .mount('#app')
