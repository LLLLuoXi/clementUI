<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-19 21:28:03
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <button
    type="button"
    class="cl-button"
    :class="[
      type ? `cl-button--${type}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
  >
    <i v-if="icon" :class="icon" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ClButton",
  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
  },
};
</script>

<style>
</style>