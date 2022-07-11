<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-11 18:08:07
 * @LastEditors: your name
 * @Description: 
-->

<template>
  <div class="input-test-container">
    <h2>基础用法</h2>
    <cl-input value="罗西"></cl-input>
    <h2>disabled</h2>
    <cl-input :disabled="true"></cl-input>
    <h2>placeholder</h2>
    <cl-input :placeholder="'请输入内容可修改'"></cl-input>
    <h2>事件</h2>
    <cl-input
      @change="inputChange"
      @input="inputInput"
      @focus="inputFocus"
      @blur="inputBlur"
    ></cl-input>
    <h2>v-model</h2>
    <cl-input v-model="msg"></cl-input>
    <cl-input v-model="msg"></cl-input>
    {{ msg }}
    <h2>clearabled</h2>
    <cl-input v-model="msg" clearabled></cl-input>
    {{ msg }}
    <h2>密码框</h2>
    <cl-input v-model="password" show-password></cl-input>
    <h2>带 icon 的输入框</h2>
    <cl-input
      v-model="msg"
      placeholder="请选择日期"
      prefix-icon="cl-icon-search"
    ></cl-input>
    <cl-input
      v-model="msg"
      placeholder="请选择日期"
      suffix-icon="cl-icon-search"
      clearabled
    ></cl-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      password: "",
    };
  },
  methods: {
    inputChange(e) {
      console.log("change");
      console.log(e);
    },
    inputInput(e) {
      console.log("input");
      console.log(e);
    },
    inputFocus(e) {
      console.log("focues");
      console.log(e);
    },
    inputBlur(e) {
      console.log("blur");
      console.log(e);
    },
  },
};
</script>

<style>
a {
  margin-right: 10px;
}
</style>
