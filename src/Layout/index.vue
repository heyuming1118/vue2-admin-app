<template>
  <el-container class="app-container" direction="vertical">
    <AppHeader />
    <el-container>
      <AppAside v-if="!$route.meta.hidden" />
      <el-main class="app-main">
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppAside from "./components/AppAside.vue";
import AppMain from "./components/AppMain.vue";

export default {
  name: "Layout",
  components: {
    AppHeader,
    AppAside,
    AppMain,
  },
};
</script>
<style lang="scss" scoped>
.app-container {
  height: 100%;
  padding: 8px;
  background-color: #efefef;

  .app-main {
    background-color: #ffffff;
  }
}
</style>
