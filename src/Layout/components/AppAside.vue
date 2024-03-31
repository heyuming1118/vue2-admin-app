<template>
  <el-aside width="200px" class="app-aside">
    <el-menu :default-active="$route.path" @select="handleSelect">
      <AppAsideMenuList :menuList="menus"></AppAsideMenuList>
    </el-menu>
  </el-aside>
</template>

<script>
import { httpReq } from "@/utils/constants";
import { mapGetters } from "vuex";

import AppAsideMenuList from "./AppAsideMenuList.vue";
export default {
  name: "AppAside",

  components: {
    AppAsideMenuList,
  },

  computed: {
    ...mapGetters("app", ["menus"]),
  },

  methods: {
    handleSelect(path) {
      if (httpReq.test(path)) {
        return window.open(path);
      }
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.app-aside {
  background: #fff;
  border-radius: 4px;
  margin-right: 8px;
}
</style>