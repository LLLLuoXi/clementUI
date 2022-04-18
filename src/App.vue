<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-18 23:07:25
 * @LastEditors: your name
 * @Description: 
-->
<template>
  <div class="app-container">
    <component :is="testView" />
  </div>
</template>

<script>
import ContainerTest from "./views/test/ContainerT.vue";
import LayoutTest from "./views/test/LayoutT.vue";
import IconTest from "./views/test/IconT.vue";
import ButtonTest from "./views/test/ButtonT.vue";
export default {
  data() {
    return {
      testView: "ButtonTest",
    };
  },
  components: { ContainerTest, LayoutTest, IconTest, ButtonTest },
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  padding-bottom: 20%;
}
</style>
