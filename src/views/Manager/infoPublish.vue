<template>
<el-row >
 <el-col>
   <h3>发布信息</h3>
 </el-col>

  <el-col :span="6">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item>
        <el-input v-model="msg" placeholder="placeholder"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="publish">发布消息</el-button>
      </el-form-item>
    </el-form>
  </el-col>

</el-row>
</template>

<script>
export default {
  name: "infoPublish",
  methods: {
    publish () {

    }
  },
}
</script>

<style scoped>

</style>
