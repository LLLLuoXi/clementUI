<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-22 22:59:07
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
    <h2>文字按钮</h2>
    <cl-button type="text">文字按钮</cl-button>
    <cl-button type="text" disabled>文字按钮</cl-button>
    <h2>图标按钮</h2>
    <cl-button type="primary" icon="cl-icon-edit"></cl-button>
    <cl-button type="primary" icon="cl-icon-share"></cl-button>
    <cl-button type="primary" icon="cl-icon-dclete"></cl-button>
    <cl-button type="primary" icon="cl-icon-search">搜索</cl-button>
    <cl-button type="primary"
      >上传<i class="cl-icon-upload cl-icon--right"></i
    ></cl-button>
    <h2>loading</h2>
    <cl-button type="primary" :loading="true">加载中</cl-button>
    <h2>不同尺寸</h2>
    <cl-row class="cl-row">
      <cl-button>默认按钮</cl-button>
      <cl-button size="medium">中等按钮</cl-button>
      <cl-button size="small">小型按钮</cl-button>
      <cl-button size="mini">超小按钮</cl-button>
    </cl-row>
    <cl-row>
      <cl-button round>默认按钮</cl-button>
      <cl-button size="medium" round>中等按钮</cl-button>
      <cl-button size="small" round>小型按钮</cl-button>
      <cl-button size="mini" round>超小按钮</cl-button>
    </cl-row>
    <h2>按钮组</h2>
    <cl-button-group class="m-r">
      <cl-button type="primary" icon="cl-icon-arrow-left">上一页</cl-button>
      <cl-button type="primary"
        >下一页<i class="cl-icon-arrow-right cl-icon--right"></i
      ></cl-button>
    </cl-button-group>
    <cl-button-group class="m-r">
      <cl-button type="primary" icon="cl-icon-edit"></cl-button>
      <cl-button type="primary" icon="cl-icon-share"></cl-button>
      <cl-button type="primary" icon="cl-icon-dclete"></cl-button>
    </cl-button-group>
    <cl-button-group class="m-r">
      <cl-button type="primary">只有一个按钮</cl-button>
    </cl-button-group>
    <cl-button-group class="m-r">
      <cl-button type="primary" round>is round</cl-button>
    </cl-button-group>
    <cl-button-group class="m-r">
      <cl-button type="primary" circle icon="cl-icon-dclete"></cl-button>
    </cl-button-group>
    <h2>autofocus</h2>
    <cl-button autofocus type="primary" round>autofocus</cl-button>
    <cl-button type="primary" round>no autofocus</cl-button>
    <h2>nativeType</h2>
    <cl-button type="primary" nativeType="submit" round>submit</cl-button>
    <h2>native click</h2>
    <cl-button type="primary" @click="handleClick" round
      >native click</cl-button
    >
    <p>
      <q>
        vue3点击监听器将被添加到 MyButton的根元素，即原生 button 元素。
        当原生的button被点击时，会触发父组件的onClick方法。 如果原生
        button已经有一个与 v-on 绑定的点击监听器，那么两个监听器都会触发
      </q>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.cl-row {
  margin-bottom: 30px;
}
.m-r {
  margin-right: 10px;
}
</style>
