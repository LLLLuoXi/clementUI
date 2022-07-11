<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-11 18:32:12
 * @LastEditors: your name
 * @Description: input 组件
-->

<template>
  <div :class="inputClass">
    <input
      :placeholder="placeholder"
      :value="modelValue"
      @input="input"
      :disabled="disabled"
      :readonly="disabled"
      :type="eyeflag ? 'password' : 'text'"
    />
    <span class="prefix-icon" :style="prefixIconStyle">
      <i :class="prefixIcon"></i>
    </span>
    <span class="suffix-icon" :style="suffixIconStyle" @click="togglePassword">
      <i :class="suffixIconRef"></i>
    </span>
    <span class="clear-icon" :style="clearIconStyle" @click="clearInput">
      <i class="cl-icon-circle-close"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "ClInput",
};
</script>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: String | Number,
  placeholder: {
    type: String,
    default: "请输入内容",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearabled: {
    type: Boolean,
    default: false,
  },
  prefixIcon: String,
  suffixIcon: String,
  showPassword: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const input = (e) => {
  console.log(e.target.value);
  emit("update:modelValue", e.target.value);
};

const clearInput = () => {
  emit("update:modelValue", "");
};

const togglePassword = () => {
  if (!props.showPassword) return;
  eyeflag.value = !eyeflag.value;
};

const inputClass = computed(() => {
  return [
    "cl-input",
    {
      "is-disabled": props.disabled,
      "is-prefix-icon": props.prefixIcon,
      "is-suffix-icon": props.suffixIcon,
      "is-show-password": props.showPassword,
      "is-clearabled": props.clearabled,
    },
  ];
});

const clearIconStyle = computed(() => {
  return [
    {
      display:
        props.clearabled && !props.suffixIcon
          ? props.modelValue
            ? "block"
            : "none"
          : "none",
    },
  ];
});

const prefixIconStyle = computed(() => {
  return [
    {
      display: props.prefixIcon ? "block" : "none",
    },
  ];
});

const suffixIconStyle = computed(() => {
  return [
    {
      display: props.suffixIcon || props.showPassword ? "block" : "none",
    },
  ];
});

// 密码框
const suffixIconRef = ref("");
const eyeflag = ref(false);
suffixIconRef.value = props.suffixIcon;
if (props.showPassword) {
  suffixIconRef.value = "cl-icon-view";
  eyeflag.value = true;
}
</script>
