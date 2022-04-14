<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-14 21:17:10
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="cl-footer" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ClFooter",
  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>

<style>
</style>