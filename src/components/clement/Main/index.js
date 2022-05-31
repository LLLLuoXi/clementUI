/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-13 21:54:39
 * @LastEditors: your name
 * @Description: Container 组件入口文件
 */
import Main from "./src/Main.vue";

Main.install = (Vue) => {
  Vue.component(Main.name, Main);
};

export default Main;
