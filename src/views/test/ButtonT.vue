<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-19 21:30:26
 * @LastEditors: your name
 * @Description: Button组件测试页
-->
<template>
  <div class="button-test-container">
    <cl-row class="cl-row">
      <cl-button>默认按钮</cl-button>
      <cl-button type="primary">主要按钮</cl-button>
      <cl-button type="success">成功按钮</cl-button>
      <cl-button type="info">信息按钮</cl-button>
      <cl-button type="warning">警告按钮</cl-button>
      <cl-button type="danger">危险按钮</cl-button>
    </cl-row>

    <cl-row class="cl-row">
      <cl-button plain>朴素按钮</cl-button>
      <cl-button type="primary" plain>主要按钮</cl-button>
      <cl-button type="success" plain>成功按钮</cl-button>
      <cl-button type="info" plain>信息按钮</cl-button>
      <cl-button type="warning" plain>警告按钮</cl-button>
      <cl-button type="danger" plain>危险按钮</cl-button>
    </cl-row>

    <cl-row class="cl-row">
      <cl-button round>圆角按钮</cl-button>
      <cl-button type="primary" round>主要按钮</cl-button>
      <cl-button type="success" round>成功按钮</cl-button>
      <cl-button type="info" round>信息按钮</cl-button>
      <cl-button type="warning" round>警告按钮</cl-button>
      <cl-button type="danger" round>危险按钮</cl-button>
    </cl-row>

    <cl-row class="cl-row">
      <cl-button icon="cl-icon-search" circle></cl-button>
      <cl-button type="primary" icon="cl-icon-edit" circle></cl-button>
      <cl-button type="success" icon="cl-icon-check" circle></cl-button>
      <cl-button type="info" icon="cl-icon-message" circle></cl-button>
      <cl-button type="warning" icon="cl-icon-star-off" circle></cl-button>
      <cl-button type="danger" icon="cl-icon-dclete" circle></cl-button>
    </cl-row>
    <h2>禁用状态</h2>
    <cl-row class="cl-row">
      <cl-button disabled>默认按钮</cl-button>
      <cl-button type="primary" disabled>主要按钮</cl-button>
      <cl-button type="success" disabled>成功按钮</cl-button>
      <cl-button type="info" disabled>信息按钮</cl-button>
      <cl-button type="warning" disabled>警告按钮</cl-button>
      <cl-button type="danger" disabled>危险按钮</cl-button>
    </cl-row>

    <cl-row class="cl-row">
      <cl-button plain disabled>朴素按钮</cl-button>
      <cl-button type="primary" plain disabled>主要按钮</cl-button>
      <cl-button type="success" plain disabled>成功按钮</cl-button>
      <cl-button type="info" plain disabled>信息按钮</cl-button>
      <cl-button type="warning" plain disabled>警告按钮</cl-button>
      <cl-button type="danger" plain disabled>危险按钮</cl-button>
    </cl-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cl-row {
  margin-bottom: 30px;
}
</style>
