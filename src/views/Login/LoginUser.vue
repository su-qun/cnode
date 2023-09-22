<template>
  <div class="login">
    <h3>登录</h3>
    <el-form
      :model="fomeData"
      :rules="rules"
      label-width="100px"
      class="login-form"
      ref="loginFrom"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="fomeData.username"
          prefix-icon="el-icon-user-solid"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pasdword">
        <el-input
          v-model="fomeData.pasdword"
          prefix-icon="el-icon-lock"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </div>
</template>

<script>
import {mapMutations} from "vuex"
export default {
  data() {
    return {
      fomeData: {
        username: "",
        pasdword: "9948d556-1825-416f-934f-b3ce046403e3",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
        ],
        pasdword: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
 
  methods: {
    onSubmit() {
      this.$refs.loginFrom.validate(async (status) => {
        console.log(status);
        if (status) {
          const { pasdword } = this.fomeData;
          if (pasdword === "9948d556-1825-416f-934f-b3ce046403e3") {
            // 登录成功 后端会返回 token 以及用户信息

            // 将 token 以及 用户信息 存储到 浏览器本地 localStorage
            localStorage.setItem(
              "token",
              "9948d556-1825-416f-934f-b3ce046403e3"
            );
            localStorage.setItem(
              "userInfo",
              JSON.stringify({ username: "xx" })
            );
            const zzz = localStorage.getItem('userInfo')
            console.log(zzz)
            this.getInfo()
            console.log(this.getInfo())
            this.$router.push("/");
          } else {
            this.$message({
              message: "用户名密码不匹配",
              type: "waring",
              duration: 1000,
            });
          }
        }
      });
    },
  ...mapMutations(['getInfo'])
  },
};
</script>

<style scoped lang='less'>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b3140;
  flex-direction: column;
}
</style>