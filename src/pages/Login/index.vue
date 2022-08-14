<template>
  <div class="login">
    <div class="loginContainer">
      <h1 class="title">测试工具平台</h1>
      <el-form
        class="loginForm"
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
            type="text"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            @click.native.prevent="handleLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("用户名不能为空"));
      } else callback();
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else callback();
    };
    return {
      loading: false,
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },
  methods: {
    // 登录方法
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          console.log(this);
          this.loading = true;
          //   this.$store.dispatch("", this.loginForm).then(() => {
          this.$router.push("/home");
          this.$message({
            message:'登录成功',
            type:'success'
          })
          //   });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
.login {
  height: 100%;
  background-color: #434A50;
}
.loginContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -250px;
  border: 1px solid #434A50;
  width: 500px;
  height: 300px;
  background-color: #fff;
}
.title{
  margin-top: 30px;
  text-align: center;
}
.loginForm {
  left: 80px;
  position: absolute;
  width: 370px;
  top: 100px;
}
.el-input__inner {
  line-height: 30px;
  height: 40px;
}
.el-button {
  width: 370px;
}
</style>
