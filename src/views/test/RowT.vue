<template>
  <div class="row-test-container">
    <h1>基础布局</h1>
    <cl-row tag="h4">
      <cl-col tag="p" :span="23"
        ><div class="grid-content bg-purple-dark"></div
      ></cl-col>
    </cl-row>
    <cl-row>
      <cl-col :span="12"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
    </cl-row>
    <cl-row>
      <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="8"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <cl-row>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
    </cl-row>
    <cl-row>
      <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
      <cl-col :span="4"><div class="grid-content bg-purple"></div></cl-col>
      <cl-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></cl-col>
    </cl-row>
    <h1>分栏间隔</h1>
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
      <cl-col :span="6" :offset="12"
        ><div class="grid-content bg-purple"></div
      ></cl-col>
    </cl-row>
    <cl-row :gutter="20">
      <cl-col :span="6" :push="6"
        ><div class="grid-content bg-purple"></div
      ></cl-col>
      <cl-col :span="6"><div class="grid-content bg-purple"></div></cl-col>
    </cl-row>
    <cl-row :gutter="20">
      <cl-col :span="12" :pull="6"
        ><div class="grid-content bg-purple"></div
      ></cl-col>
    </cl-row>
    <h1>对齐方式</h1>
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
      <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </cl-col>
      <cl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </cl-col>
      <cl-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple"></div>
      </cl-col>
      <cl-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </cl-col>
    </cl-row>
    <h1>基于断点的隐藏类</h1>
    <cl-row :gutter="10">
      <cl-col class="hidden-xs-only" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple"></div>
      </cl-col>
    </cl-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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