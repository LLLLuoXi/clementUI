/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-10 21:41:00
 * @LastEditors: your name
 * @Description: component cl-col
 */
import { h } from "vue";
export default {
  name: "ClCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== "ClRow") {
        parent = parent.$options;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + "px";
        style.paddingRight = this.gutter / 2 + "px";
      }
      return style;
    },
    offsetClassList() {
      const classList = [];
      ["span", "offset", "push", "pull"].forEach((prop) => {
        if (this[prop]) {
          classList.push(
            prop === "span"
              ? `cl-col-${this[prop]}`
              : `cl-col-${prop}-${this[prop]}`
          );
        }
      });
      return classList;
    },
    // 响应式布局先关类名处理
    sizeClassList() {
      const classList = [];
      ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
        if (typeof this[size] === "number") {
          classList.push(`cl-col-${size}-${this[size]}`);
        } else if (typeof this[size] === "object") {
          /*
          {
            span:6,
            offset:8,
            push:7,
            pull:9
          } -> 转化的类名 cl-col-xs-6 cl-col-xs-offset-8 cl-col-xs-push-7 cl-col-xs-pull-9 
           */
          const props = this[size];
          Object.keys(props).forEach((key) => {
            classList.push(
              key === "span"
                ? `cl-col-${size}-${props[key]}`
                : `cl-col-${size}-${key}-${props[key]}`
            );
          });
        }
      });
      console.log("classList", classList);
      return classList;
    },
  },
  render() {
    return h(
      this.tag,
      {
        class: ["cl-col", this.offsetClassList, this.sizeClassList],
        style: this.style,
      },
      this.$slots.default()
    );
  },
};
