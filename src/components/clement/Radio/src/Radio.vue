<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-13 23:41:32
 * @LastEditors: your name
 * @Description: Radio组件
-->
<template>
  <div class="cl-radio">
    <div
      v-for="(item, index) in options"
      :key="index"
      class="cl-radio-item"
      :class="{
        'is-disabled': item.disabled,
      }"
      @click="change(item, index)"
    >
      <span :class="{ 'is-active': radioIndex === index }"></span>
      {{ item[labelFiled] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ClRadio",
};
</script>

<script setup>
import { ref } from "vue";

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  inline: {
    type: Boolean,
    default: true,
  },
  labelFiled: {
    type: String,
    default: "label",
  },
  valueFiled: {
    type: String,
    default: "value",
  },
  customColor: {
    type: String,
    default: "#5e72e4",
  },
});
const emit = defineEmits(["change"]);

const radioIndex = ref(-1);
const isInline = ref("flex");
props.inline ? (isInline.value = "inline-flex") : (isInline.value = "flex");
const change = (item, index) => {
  if (!item.disabled) {
    radioIndex.value = index;
    emit("change", item);
  }
};
</script>

<style lang="scss" scoped>
@import "@assets/mixins/mixins.scss";
@import "@assets/common/var.scss";

@include b(radio) {
  width: 100%;
  height: auto;
  overflow: hidden;
  &-item {
    width: auto;
    height: auto;
    overflow: hidden;
    // display: flex;
    display: v-bind("isInline");
    align-items: center;
    line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
    user-select: none;
    &.is-disabled {
      &,
      &:hover {
        cursor: no-drop;
        color: $--radio-disabled-font-color;
        span {
          background-color: $--radio-disabled-background-color;
          border-color: $--radio-disabled-boder-color;
          &::after {
            background-color: $--radio-disabled-dot-color;
          }
        }
      }
    }

    span {
      width: 14px;
      height: 14px;
      display: inline-block;
      position: relative;
      border: 1px solid $--border-color-base;
      border-radius: 50%;
      margin: 3px 8px 0 0;
      background-color: #fff;
      transition: transform $--transition-duration $--transition-timing-function;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -2px 0 0 -2px;
        transition: transform $--transition-duration
          $--transition-timing-function;
      }
      &:hover {
        border-color: v-bind("props.customColor");
      }
      &.is-active {
        background-color: v-bind("props.customColor");
        border-color: v-bind("props.customColor");
      }
    }
  }
}
</style>
