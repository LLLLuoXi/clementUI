<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-23 23:03:02
 * @LastEditors: your name
 * @Description: Link组件测试页
-->
<template>
  <div class="link-test-container">
    <h2>基础用法</h2>
    <cl-link href="https://element.eleme.io" target="_blank">默认链接</cl-link>
    <cl-link type="primary">主要链接</cl-link>
    <cl-link type="success">成功链接</cl-link>
    <cl-link type="warning">警告链接</cl-link>
    <cl-link type="danger">危险链接</cl-link>
    <cl-link type="info">信息链接</cl-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  margin-right: 10px;
}
</style>
