<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-20 23:24:25
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <button
    type="button"
    class="cl-button"
    :class="[
      type ? `cl-button--${type}` : '',
      size ? `cl-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
  >
    <i v-if="icon && !loading" :class="icon" />
    <i v-if="loading" class="cl-icon-loading" />
    <span v-if="$slots.default"> <slot></slot></span>
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
    loading: Boolean,
    size: String,
  },
};
</script>

<style>
</style>