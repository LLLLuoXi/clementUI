/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-21 22:04:26
 * @LastEditors: your name
 * @Description:
 */
import ButtonGroup from "./src/ButtonGroup.vue";

ButtonGroup.install = (Vue) => {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
