/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-13 22:15:42
 * @LastEditors: your name
 * @Description: clment启动文件
 */
import ClRow from '@clement/Row';
import ClCol from '@clement/Col';
import Container from '@clement/Container';
import Footer from '@clement/Footer';
import Header from '@clement/Header';
import Main from '@clement/Main';
import Aside from '@clement/Aside';

const components = [
  ClRow,
  ClCol,
  Container,
  Footer,
  Header,
  Main,
  Aside
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
  ClCol,
  Container,
  Footer,
  Header,
  Main,
  Aside
}
// 按需导出
export {
  install,
  ClRow,
  ClCol,
  Container,
  Footer,
  Header,
  Main,
  Aside
}