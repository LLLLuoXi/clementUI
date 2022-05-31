<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-14 20:31:16
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="cl-header" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ClHeader",
  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>

<style></style>
