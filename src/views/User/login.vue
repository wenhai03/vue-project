<template>
  <el-row >
   <el-col :span="10" :offset="7">
     <el-form ref="form" :model="ruleForm" label-width="80px">

     </el-form>
   </el-col>
  </el-row>
</template>

<script>
export default {
name: "login",
  data () {
    return {
      ruleForm: {}
    }
  },
}
</script>

<style scoped>

</style>
