<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-17 21:47:53
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <i :class="['cl-icon', `cl-icon-${name}`]"></i>
</template>

<script>
export default {
  name: "ClIcon",
  props: {
    name: String,
  },
};
</script>

<style></style>
