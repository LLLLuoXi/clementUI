<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-13 23:14:39
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
        : flase;

      // if (this.$slots && this.$slots.default) {
      //   return this.$slots.default().some((vNode) => {
      //     const name = vNode.type.name;
      //     if (name === "ClHeader" || name == "ClFooter") {
      //       return true;
      //     }
      //   });
      // } else {
      //   // 没有插槽
      //   return false;
      // }
    },
  },
};
</script>

<style>
</style>