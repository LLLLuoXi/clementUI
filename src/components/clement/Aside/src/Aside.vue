<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-14 21:28:39
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="cl-aside" :style="{ width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ClAside",
  props: {
    width: {
      type: String,
      default: "300px",
    },
  },
};
</script>

<style></style>
