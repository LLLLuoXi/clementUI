<!--
 * @Author: luoxi
 * @LastEditTime: 2022-05-31 21:55:09
 * @LastEditors: your name
 * @Description: 
-->
<!--  eslint-disable-next-line -->
<template>
  <button
    :type="nativeType"
    :autofocus="autofocus"
    @click="(e) => $emit('click', e)"
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
    type: {
      type: String,
      default: "",
      validator: (value) => {
        return ["primary", "success", "info", "warning", "danger"].includes(
          value
        );
      },
    },
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
    loading: Boolean,
    size: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style></style>
