/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-10 21:52:18
 * @LastEditors: your name
 * @Description: clment启动文件
 */
import ClRow from '@clement/Row';
import ClCol from '@clement/Col';

const components = [
  ClRow,
  ClCol
]
const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 默认导出
export default {
  install,
  ClRow,
  ClCol
}
// 按需导出
export {
  install,
  ClRow,
  ClCol
}