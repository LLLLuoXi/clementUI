<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-10 23:45:35
 * @LastEditors: your name
 * @Description: 
-->

<template>
  <div class="input-test-container">
    <!-- <h2>基础用法</h2>
    <cl-input value="罗西"></cl-input>
    <h2>disabled</h2>
    <cl-input :disabled="true"></cl-input>
    <h2>placeholder</h2>
    <cl-input :placeholder="'请输入内容可修改'"></cl-input> -->
    <h2>事件</h2>
    <cl-input
      value="罗西"
      @change="inputChange"
      @input="inputInput"
      @focus="inputFocus"
      @blur="inputBlur"
    ></cl-input>
  </div>
</template>

<script>
export default {
  methods: {
    inputChange(e) {
      console.log("change");
      console.log(e.target.value);
    },
    inputInput(e) {
      console.log("input");
      console.log(e.target.value);
    },
    inputFocus(e) {
      console.log("focues");
      console.log(e.target.value);
    },
    inputBlur(e) {
      console.log("blur");
      console.log(e.target.value);
    },
  },
};
</script>

<style>
a {
  margin-right: 10px;
}
</style>
