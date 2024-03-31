<template>
  <el-result icon="error" :title="'错误：' + code" :subTitle="subTitle">
    <template slot="extra">
      <el-button type="primary" @click="$router.replace({ path: '/' })">
      返回首页
      </el-button>
      <el-button @click="logout">退出登录</el-button>
    </template>
  </el-result>
</template>

<script>
import { logout } from "@/api/sys";
export default {
  name: "ErrorPage",
  computed: {
    code() {
      return this.$route.params.code;
    },
    subTitle() {
      return {
        403: "您没有访问该页面的权限",
        404: "页面没找到",
      }[this.code];
    },
  },
  methods: {
    logout,
  },
};
</script>
