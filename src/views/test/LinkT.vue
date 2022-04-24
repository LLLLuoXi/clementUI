<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-24 22:31:21
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
    <h2>禁用状态</h2>
    <div>
      <cl-link disabled>默认链接</cl-link>
      <cl-link type="primary" disabled>主要链接</cl-link>
      <cl-link type="success" disabled>成功链接</cl-link>
      <cl-link type="warning" disabled>警告链接</cl-link>
      <cl-link type="danger" disabled>危险链接</cl-link>
      <cl-link type="info" disabled>信息链接</cl-link>
    </div>
    <h2>下划线</h2>
    <div>
      <cl-link :underline="false">无下划线</cl-link>
      <cl-link>有下划线</cl-link>
    </div>
    <h2>图标</h2>
    <div>
      <cl-link icon="cl-icon-edit">编辑</cl-link>
      <cl-link>查看<i class="cl-icon-view cl-icon--right"></i> </cl-link>
    </div>
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
