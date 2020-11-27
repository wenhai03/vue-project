<template>
  <el-row>
    <div style="text-align: center">用户登录</div>
    <el-col :span="10" :offset="7">
      <el-form ref="form" :model="ruleForm" label-width="80px">
        <el-form-item label-width="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>

        <el-form-item label-width="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="primary" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

      </el-form>
    </el-col>
  </el-row>
</template>

<script>
// 根据图来输入的 邮箱验证 手机号
import {v4} from 'uuid'
import {setLocal, getLocal} from '@/utils/local'

export default {
  name: "login",
  data () {
    return {
      ruleForm: {
        username: '',
        password: '',
        verify: '' // 返回一个登录成功后的token
      },
      rules: {
        username: [
          {required: true, message: '用户名必须输入', trigger: 'blur'},
          {min: 2, max: 6, message: '长度在2到6个字符', trigger: 'blue'}
        ],
        password: [
          {required: true, message: '用户名必须输入密码', trigger: 'blur',}
        ]
      }
    }
  },
  created () {
    this.uuid = getLocal('uuid')
    if (!this.uuid) {
      setLocal('uuid', v4())
    }
  },
  methods: {
    submitForm () {

    },
    resetForm () {

    },
  },
}
</script>

<style scoped>

</style>
