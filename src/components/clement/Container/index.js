/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-13 21:22:17
 * @LastEditors: your name
 * @Description: Container 组件入口文件
 */
import Container from "./src/Container.vue";

Container.install = (Vue) => {
  Vue.component(Container.name, Container);
};

export default Container;
