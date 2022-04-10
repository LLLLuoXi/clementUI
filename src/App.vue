<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-10 21:41:29
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="app-container">
    <h1>基础布局</h1>
    <cl-row tag="p">
      <cl-col :span="24"
        ><div class="grid-content bg-purple-dark"></div
      ></cl-col>
    </cl-row>
    <cl-row>
      <cl-col :span="12"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
    </cl-row>
    <h1>分栏布局</h1>
    <cl-row :gutter="20">
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <h1>混合布局</h1>
    <cl-row :gutter="20">
      <cl-col :span="16"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <cl-row :gutter="20">
      <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <cl-row :gutter="20">
      <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="16"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <h1>分栏偏移</h1>
    <cl-row :gutter="20">
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6" :offset="6"
        ><div class="grid-content bg-purple">offset:6</div></cl-col
      >
    </cl-row>
    <cl-row :gutter="20">
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6" :push="6"
        ><div class="grid-content bg-purple">push:6</div></cl-col
      >
    </cl-row>
    <cl-row :gutter="20">
      <cl-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></cl-col>
      <cl-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></cl-col>
    </cl-row>
    <cl-row :gutter="20">
      <cl-col :span="12" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></cl-col>
    </cl-row>
    <h1>对其方式</h1>
    <cl-row type="flex" class="row-bg">
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <cl-row type="flex" class="row-bg" justify="center">
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <cl-row type="flex" class="row-bg" justify="end">
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <cl-row type="flex" class="row-bg" justify="space-between">
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <cl-row type="flex" class="row-bg" justify="space-around">
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <h1>响应式布局</h1>
    <cl-row :gutter="10">
      <!-- <cl-col
        :xs="{ span: 6, offset: 8, push: 7, pull: 9 }"
        :sm="6"
        :md="4"
        :lg="3"
        :xl="1"
        ><div class="grid-content bg-purple">xs:object</div></cl-col
      > -->
      <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple"></div
      ></cl-col>
      <cl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
        ><div class="grid-content bg-purple"></div
      ></cl-col>
      <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
    </cl-row>
    <h1>基于断点的隐藏类</h1>
    <cl-row :gutter="10">
      <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="hidden-xs-only">
        <div class="grid-content bg-purple"></div>
      </cl-col>
    </cl-row>
  </div>
</template>

<script>
// import ClCol from "@clement/Col.js";
// import ClRow from "@clement/Row.js";
export default {
  // components: { ClCol, ClRow },
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  padding-bottom: 20%;
}
.cl-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.cl-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
