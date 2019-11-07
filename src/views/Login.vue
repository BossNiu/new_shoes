<template>
  <div id="login">
    <img src="static/images/bac.jpg" alt class="loginbac" />
    <van-icon name="clear" size="30px" color="gray" @click="go_back" />
    <img src="static/images/logo.png" alt class="logo" />
    <van-cell-group>
      <van-field class="user" left-icon="manager" placeholder="请输入用户名" v-model="username" />
      <van-field
        class="psd"
        type="password"
        left-icon="lock"
        placeholder="请输入6-12位字符密码"
        v-model="psw"
      />
    </van-cell-group>
    <span class="reg" @click="go_register">快速注册</span>
    <span class="find" @click="find">找回密码</span>
    <van-button
      type="primary"
      class="login"
      to="/index"
      v-tap="{methods:tap,username:this.username,psw:this.psw}"
    >登录</van-button>

    <div class="try">
      <p>新新老用户可以直接使用注册手机登录</p>
      <p>快来试试吧</p>
    </div>
  </div>
</template>

<script>
import * as api from "../api/user";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      psw: ""
    };
  },
  methods: {
    go_back() {
      this.$router.go(-1);
    },
    go_register() {
      this.$router.push("/register");
    },
    find() {
      this.$router.push("/outscropPsd");
    },
    tap(data) {
      api.login({ userName: data.username, password: data.psw }).then(data => {
        if (data.data.token == undefined) {
          this.$notify("用户名或密码错误，请重新输入!");
          this.username = "";
          this.psw = "";
        } else {
          // this.$store.state.token=data.data.token;
          localStorage.setItem("token", data.data.token);
          this.$store.state.token = data.data.token;
          this.$toast.loading({
            message: "正在登陆...",
            forbidClick: true,
            duration: 1500
          });
          setTimeout(() => {
            this.$router.push("/index");
          }, 1500);
        }
      });
    }
  }
};
</script>

<style scoped>
.loginbac {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
#login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-size: 100%;
}
.van-icon {
  position: absolute;
  top: 18px;
  left: 320px;
}
.logo {
  width: 120px;
  height: 120px;
  position: absolute;
  top: 10%;
  left: 34%;
}
.van-field:nth-of-type(1) {
  width: 84%;
  height: 46px;
  position: absolute;
  top: 220px;
  left: 30px;
  background-color: rgba(168, 157, 149, 0.349);
  border-radius: 5px;
}
.van-field:nth-of-type(2) {
  width: 84%;
  height: 46px;
  position: absolute;
  top: 267px;
  left: 30px;
  background-color: rgba(168, 157, 149, 0.349);
  border-radius: 5px;
}
.reg {
  position: absolute;
  color: white;
  font-size: 14px;
  top: 330px;
  left: 40px;
}
.find {
  position: absolute;
  color: white;
  font-size: 14px;
  top: 330px;
  left: 276px;
}
.login {
  position: absolute;
  top: 372px;
  left: 33px;
  width: 310px;
  height: 50px;
  font-size: 16px;
  box-shadow: #c9c9c9 0px 2px;
  background: #fcd731;
  border: 0;
  border-radius: 4px;
}
.try {
  position: absolute;
  text-align: center;
  top: 520px;
  font-size: 14px;
  left: 18%;
}
.try p {
  color: white;
}
</style>