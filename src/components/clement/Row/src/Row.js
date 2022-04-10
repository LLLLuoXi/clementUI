/*
 * @Author: luoxi
 * @LastEditTime: 2022-04-10 21:17:05
 * @LastEditors: your name
 * @Description: component cl-row
 */
import { h } from 'vue'
export default {
  name: "ClRow",
  props: {
    tag: {
      type: String,
      default: 'div'
    },
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
  render() {
    console.log('h', h);
    return h(this.tag, {
      class: [
        'cl-row',
        { 'cl-row--flex': this.type === 'flex' },
        this.justify !== 'start' && `is-justify-${this.justify}`,
        this.align !== 'top' && `is-align-${this.align}`,
      ],
      style: this.style
    }, this.$slots.default())

  }
};