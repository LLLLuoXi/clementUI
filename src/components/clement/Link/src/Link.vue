<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-23 23:28:50
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <a
    class="cl-link"
    :class="[
      type ? `cl-link--${type}` : '',
      { 'is-underline': underline, 'is-disabled': disabled },
    ]"
    :href="href"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "ClLink",
  props: {
    href: String,
    underline: {
      type: Boolean,
      default: true,
    },
    type: String,
    disabled: Boolean,
  },
};
</script>

<style>
</style>