<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-09 21:08:59
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div
    class="cl-clo-xs-4"
    :class="['cl-col', offsetClassList, sizeClassList]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
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
};
</script>

<style lang="scss" scoped>
.cl-col {
  box-sizing: border-box;
  float: left;
}
@for $i from 0 through 24 {
  .cl-col-#{$i} {
    width: $i/24 * 100%;
  }
  .cl-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
  .cl-col-push-#{$i} {
    position: relative;
    left: $i/24 * 100%;
  }
  .cl-col-pull-#{$i} {
    position: relative;
    right: $i/24 * 100%;
  }
}

// .cl-col-24 {
//   width: 100%;
// }
// .cl-col-23 {
//   width: 90%;
// }
// .cl-col-12 {
//   width: 50%;
// }

// 响应式布局
// xs < 768px
@media only screen and (max-width: 768px -1) {
  @for $i from 0 through 24 {
    .el-col-xs-0 {
      display: none;
    }
    .cl-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .cl-col-xs-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .cl-col-xs-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .cl-col-xs-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

// sm >= 768px
@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .el-col-sm-0 {
      display: none;
    }
    .cl-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .cl-col-sm-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .cl-col-sm-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .cl-col-sm-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

// md>= 992px
@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .el-col-md-0 {
      display: none;
    }
    .cl-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .cl-col-md-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .cl-col-md-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .cl-col-md-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

// lg>= 1200px
@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .el-col-lg-0 {
      display: none;
    }
    .cl-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .cl-col-lg-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .cl-col-lg-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .cl-col-lg-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

// xl>= 1920px
@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .el-col-xl-0 {
      display: none;
    }
    .cl-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .cl-col-xl-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .cl-col-xl-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .cl-col-xl-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}
</style>