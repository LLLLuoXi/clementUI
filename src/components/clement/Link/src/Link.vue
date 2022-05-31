<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-24 22:34:10
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <a
    class="cl-link"
    :class="[
      type ? `cl-link--${type}` : '',
      { 'is-underline': underline && !disabled, 'is-disabled': disabled },
    ]"
    :href="href"
  >
    <i v-if="icon" :class="icon"></i>
    <span> <slot></slot></span>
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
    icon: String,
  },
};
</script>

<style></style>
