<!--
 * @Author: luoxi
 * @LastEditTime: 2022-07-11 16:58:35
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
import InputTest from "./views/test/InputT.vue";
export default {
  data() {
    return {
      testView: "InputTest",
    };
  },
  components: {
    ContainerTest,
    LayoutTest,
    IconTest,
    ButtonTest,
    LinkTest,
    RowTest,
    InputTest,
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  padding-bottom: 20%;
}
</style>
