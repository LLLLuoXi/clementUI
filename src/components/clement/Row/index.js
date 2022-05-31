/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-10 21:38:05
 * @LastEditors: your name
 * @Description: Row组件入口文件
 */

import Row from "./src/Row";
Row.install = (Vue) => {
  Vue.component(Row.name, Row);
};
export default Row;
