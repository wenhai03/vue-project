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
        <el-menu-item index="/login">登录</el-menu-item>
        <el-menu-item index="/reg">注册</el-menu-item>

        <template v-if="false">
          <el-submenu>
            <template slot="title">张三</template>
            <el-menu-item>退出登录</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "index"
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
