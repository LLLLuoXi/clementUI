/*
 * @Author: luoxi
 * @LastEditTime: 2022-05-31 21:42:53
 * @LastEditors: your name
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import Clment from "./plugins/clement";
// import { ClRow, ClCol } from "./plugins/clement"

const app = createApp(App);
app.use(Clment).mount("#app");
// app
//   .use(ClRow)
//   .use(ClCol)
//   .mount('#app')
