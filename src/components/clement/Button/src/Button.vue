<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-18 22:29:44
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <button
    type="button"
    class="cl-button"
    :class="[type ? `cl-button--${type}` : '']"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ClButton",
  props: {
    type: String,
  },
};
</script>

<style>
</style>