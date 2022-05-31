<!--
 * @Author: luoxi
 * @LastEditTime: 2022-05-31 21:56:09
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div :class="['cl-container', { 'is-vertical': isVertical }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ClContainer",
  props: {
    direction: {
      type: String,
      validator: (val) => ["horizontal", "vertical"].includes(val),
    },
  },
  computed: {
    isVertical() {
      if (this.direction === "vertical") {
        return true;
      } else if (this.direction === "horizontal") {
        return false;
      }

      return this.$slots && this.$slots.default
        ? this.$slots.default().some((vNode) => {
            const name = vNode.type.name;
            return name === "ClHeader" || name == "ClFooter";
          })
        : false;
    },
  },
};
</script>

<style></style>
