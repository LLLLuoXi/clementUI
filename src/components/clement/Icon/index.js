/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-17 21:41:52
 * @LastEditors: your name
 * @Description: Container 组件入口文件
 */
import Icon from './src/Icon.vue'

Icon.install = (Vue) => {
  Vue.component(Icon.name, Icon)
}

export default Icon;