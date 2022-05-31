/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-10 21:38:20
 * @LastEditors: your name
 * @Description: Col组件入口文件
 */
import Col from "./src/Col";
Col.install = (Vue) => {
  Vue.component(Col.name, Col);
};
export default Col;
