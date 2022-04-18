/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-17 22:27:00
 * @LastEditors: your name
 * @Description: Container 组件入口文件
 */
import Button from './src/Button.vue'

Button.install = (Vue) => {
  Vue.component(Button.name, Button)
}

export default Button;