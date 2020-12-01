<template>
  <el-row>
    <div style="text-align: center">用户登录</div>
    <el-col :span="10" :offset="7">
      <el-form :rules="rules" ref="ruleForm" :model="ruleForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" placeholder="输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="输入密码"></el-input>
        </el-form-item>

        <el-form-item label="验证码">
          <el-row>
            <el-col :span="17">
              <el-input v-model="ruleForm.verify" placeholder="输入验证码"></el-input>
            </el-col>
            <el-col :span="7">
              <h4 style="font-size: 26px; letter-spacing: 3px; padding-left: 20px" v-html="svg"
                  @click="getCaptcha"></h4>
            </el-col>
          </el-row>
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
import {getCaptcha} from '@/api/public'
import {createNamespacedHelpers} from 'vuex'
import * as types from '@/store/action-types'

const {mapActions} = createNamespacedHelpers('user')

export default {
  name: "login",
  data () {
    return {
      ruleForm: {
        username: '',
        password: '',
        verify: '', // 返回一个登录成功后的token
        uid: this.uuid
      },
      svg: '',
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
      this.uuid = v4()
      setLocal('uuid', v4()) // 这样有了uuid 就可以去请求服务器的验证码了
    }

    this.getCaptcha()
  },
  methods: {
    ...mapActions([types.SET_USER_LOGIN]),

    async getCaptcha () {
      this.svg = (await getCaptcha(this.uuid)).svg // 获取验证码
    },
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 调用接口
          const res = await this[types.SET_USER_LOGIN]({...this.ruleForm, uid: this.uuid})
          this.$router.history.push('/')
        }
      })

    },
    resetForm () {

    },
  },
}
</script>

<style scoped>

</style>
