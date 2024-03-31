<template>
  <el-header class="app-header">
    <div>LOGO</div>
    <div>
      欢迎您！
      <span>
        {{ user.name }}
      </span>
      <el-button type="text">
        退出
      </el-button>
    </div>
  </el-header>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'AppHeader',
    computed:{
      ...mapState('user',['user'])
    }
}
</script>

<style lang="scss" scoped>
.app-header{
    padding: 0 8px;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-radius: 4px;
}
</style>