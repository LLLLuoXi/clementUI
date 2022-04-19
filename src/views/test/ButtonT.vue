<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-19 20:58:25
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
