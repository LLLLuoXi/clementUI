<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-17 21:49:23
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
export default {
  data() {
    return {
      testView: "IconTest",
    };
  },
  components: { ContainerTest, LayoutTest, IconTest },
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  padding-bottom: 20%;
}
</style>
