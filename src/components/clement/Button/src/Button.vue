<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-19 20:55:56
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <button
    type="button"
    class="cl-button"
    :class="[type ? `cl-button--${type}` : '', plain ? 'is-plain' : '']"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ClButton",
  props: {
    type: String,
    plain: Boolean,
  },
};
</script>

<style>
</style>