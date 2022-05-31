/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-23 22:35:00
 * @LastEditors: your name
 * @Description:
 */
import Link from "./src/Link.vue";

Link.install = (Vue) => {
  Vue.component(Link.name, Link);
};

export default Link;
