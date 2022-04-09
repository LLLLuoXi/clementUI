<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-09 20:23:04
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div
    :class="[
      'cl-row',
      { 'cl-row--flex': type === 'flex' },
      justify !== 'start' && `is-justify-${justify}`,
    ]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ClRow",
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: String,
    justify: {
      type: String,
      default: "start",
      validator: (val) =>
        ["start", "end", "center", "space-between", "space-around"].includes(
          val
        ),
    },
    align: {
      type: String,
      default: "top",
      validator: (val) => ["top", "moddle", "bottom"].includes(val),
    },
  },
  computed: {
    style() {
      let style = {};
      style.marginLeft = -(this.gutter / 2) + "px";
      style.marginRight = -(this.gutter / 2) + "px";
      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.cl-row {
  &::after,
  &::before {
    display: block;
    content: "";
  }
  &::after {
    clear: both;
  }

  &--flex {
    display: flex;
    &::after,
    &::before {
      display: none;
    }
  }
  // 对其方式 justify
  &.is-justify-end {
    justify-content: flex-end;
  }
  &.is-justify-center {
    justify-content: center;
  }
  &.is-justify-space-between {
    justify-content: space-between;
  }
  &.is-justify-space-around {
    justify-content: space-around;
  }
}
</style>