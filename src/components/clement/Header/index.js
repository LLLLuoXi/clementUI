/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-13 22:14:13
 * @LastEditors: your name
 * @Description: Container 组件入口文件
 */
import Header from './src/Header.vue'

Header.install = (Vue) => {
  Vue.component(Header.name, Header)
}

export default Header;