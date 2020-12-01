<template>
  <el-row >
    <el-col :span="20" class="header-nav">
      <img src="@/assets/logo.png" class="logo" alt="">
      <el-menu :router="true" mode="horizontal" active-text-color="#fff" background-color="#2a2a2a" text-color="#fff">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/post">发表文章</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4">
      <el-menu mode="horizontal" text-color="#fff" active-text-color="#fff" background-color="#2a2a2a" :router="true" class="header-right" >
        <template v-if="!Object.keys(userInfo).length">
          <el-menu-item index="/login">登录</el-menu-item>
          <el-menu-item index="/reg">注册</el-menu-item>
        </template>

        <template v-else>
          <el-submenu index="0">
            <template slot="title">{{userInfo.username}}</template>
            <el-menu-item index="/manager">管理页面</el-menu-item>
            <el-menu-item index="/login">退出登录</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('user')

export default {
  name: "PageHeader",
  computed: {
    userInfo() {
      console.log(' -> ', this.$store.state.user.userInfo)
      return this.$store.state.user.userInfo
    }
  },
}
</script>

<style lang="scss">

.logo {
  max-width: 50px;
  height: 50px;
  margin-top: 5px;
}
.header-nav{
  display: flex;
}
.header-right{
  display: inline-block;
  float: right;
}

</style>
