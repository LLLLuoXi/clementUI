<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-14 21:36:27
 * @LastEditors: your name
 * @Description: Container组件测试页
-->
<template>
  <div class="container-test-container">
    <cl-container>
      <cl-header height="200px">Header</cl-header>
      <cl-main>Main</cl-main>
    </cl-container>
    <br />
    <br />
    <br />
    <br />
    <!-- Footer -->
    <cl-container>
      <cl-header>Header</cl-header>
      <cl-main>Main</cl-main>
      <cl-footer height="100px">Footer</cl-footer>
    </cl-container>
    <br />
    <br />
    <br />
    <br />
    <!-- Aside -->
    <cl-container>
      <cl-header>Header</cl-header>
      <cl-container>
        <cl-aside width="200px">Aside</cl-aside>
        <cl-main>Main</cl-main>
      </cl-container>
    </cl-container>
    <br />
    <br />
    <br />
    <br />
    <!-- Container作为子容器 -->
    <cl-container>
      <cl-header>Header</cl-header>
      <cl-container>
        <cl-aside width="200px">Aside</cl-aside>
        <cl-container>
          <cl-main>Main</cl-main>
          <cl-footer>Footer</cl-footer>
        </cl-container>
      </cl-container>
    </cl-container>
    <br />
    <br />
    <br />
    <br />
    <!-- Container作为子容器 -->
    <cl-container>
      <cl-aside width="200px">Aside</cl-aside>
      <cl-container>
        <cl-header>Header</cl-header>
        <cl-main>Main</cl-main>
      </cl-container>
    </cl-container>
    <br />
    <br />
    <br />
    <br />
    <!-- Container作为子容器 -->
    <cl-container>
      <cl-aside width="200px">Aside</cl-aside>
      <cl-container>
        <cl-header>Header</cl-header>
        <cl-main>Main</cl-main>
        <cl-footer>Footer</cl-footer>
      </cl-container>
    </cl-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// container
.cl-header,
.cl-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.cl-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.cl-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .cl-container {
  margin-bottom: 40px;
}

.cl-container:nth-child(5) .cl-aside,
.cl-container:nth-child(6) .cl-aside {
  line-height: 260px;
}

.cl-container:nth-child(7) .cl-aside {
  line-height: 320px;
}
</style>
