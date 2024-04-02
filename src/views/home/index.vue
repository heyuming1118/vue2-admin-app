<template>
  <div>
    {{ $store.state.user.role }}
    <el-radio-group v-model="role" @input="radioChange">
      <el-radio-button label="超级管理员"></el-radio-button>
      <el-radio-button label="管理员"></el-radio-button>
      <el-radio-button label="专员"></el-radio-button>
    </el-radio-group>
    <hr />
    <div>
      <el-button v-permission="['超级管理员', '管理员']"> 新增 </el-button>
      <Permission :rule="['超级管理员', '管理员']">
        <el-button> 删除 </el-button>
      </Permission>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      role: "",
    };
  },
  methods: {
    radioChange(data) {
      this.$store.dispatch("user/setRole", data);
    },
  },
};
</script>

<style>
</style>