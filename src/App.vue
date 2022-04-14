<!--
 * @Author: luoxi
 * @LastEditTime: 2022-04-14 21:17:52
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
export default {
  data() {
    return {
      testView: "ContainerTest",
    };
  },
  components: { ContainerTest, LayoutTest },
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  padding-bottom: 20%;
}
</style>
