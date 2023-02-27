<template>
  <div id="app">
    <el-card class="login-box">
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="mobile" >
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submit()">登录</el-button>
      </el-form>
    </el-card>
    <router-view />
  </div>
</template>
<script>
import { loginApi } from '@/request/api.js'
export default {
  name: 'app',
  components: {},
  data () {
    return {
      form: {
        mobile: 13811111111,
        code: 246810
      },
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[0-8]8\d{8}$/, message: '请输入正确的手机号码', trigger: 'blur' },
          {
            validator: function (rules, value, callback) {
              if (value.charAt(2) === '8') { // 截取第二位数据，s.substr同样是
                callback()
              } else {
                callback(new Error('第三位为8'))
              }
            }
          }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.submit()
  },
  methods: {
    submit () {
      // 判断校验是否通过
      this.$refs.formRef.validate((isOk) => {
        console.log(isOk)
        if (isOk) {
          loginApi(this.form).then(res => {
            console.log(res)
          })
        }
      })
    }
  }
}

</script>
<style lang="less">
#app {
  background-color: pink;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-box {
  width: 500px;
  height: 400px;
  form {
    padding-top: 80px;
    .el-button--primary {
      width: 100%;
    }
  }
}
</style>
