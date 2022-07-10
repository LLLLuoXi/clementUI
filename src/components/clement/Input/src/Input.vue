<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-10 23:15:29
 * @LastEditors: your name
 * @Description: input 组件
-->

<template>
  <input
    :placeholder="placeholder"
    :value="value"
    class="cl-input"
    :class="{ 'is-disabled': disabled }"
    :disabled="disabled"
    :readonly="disabled"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  />
</template>

<script>
export default {
  name: "ClInput",
};
</script>

<script setup>
defineProps({
  value: String,
  placeholder: {
    type: String,
    default: "请输入内容",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
