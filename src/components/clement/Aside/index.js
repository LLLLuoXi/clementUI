/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-13 22:11:29
 * @LastEditors: your name
 * @Description: Container 组件入口文件
 */
import Aside from './src/Aside.vue'

Aside.install = (Vue) => {
  Vue.component(Aside.name, Aside)
}

export default Aside;