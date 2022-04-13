/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-13 22:12:39
 * @LastEditors: your name
 * @Description: Container 组件入口文件
 */
import Footer from './src/Footer.vue'

Footer.install = (Vue) => {
  Vue.component(Footer.name, Footer)
}

export default Footer;