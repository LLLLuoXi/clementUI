<!--
 * @Author: luoxi
 * @LastEditTime: 2022-05-31 23:32:37
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
import LinkTest from "./views/test/LinkT.vue";
import RowTest from "./views/test/RowT.vue";
export default {
  data() {
    return {
      testView: "ButtonTest",
    };
  },
  components: {
    ContainerTest,
    LayoutTest,
    IconTest,
    ButtonTest,
    LinkTest,
    RowTest,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  padding-bottom: 20%;
}
</style>
