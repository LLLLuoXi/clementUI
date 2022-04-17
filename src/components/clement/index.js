/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-17 21:44:51
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
import Icon from '@clement/Icon';

const components = [
  ClRow,
  ClCol,
  Container,
  Footer,
  Header,
  Main,
  Aside,
  Icon
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
  Aside,
  Icon
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
  Aside,
  Icon
}