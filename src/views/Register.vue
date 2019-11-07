<template>
  <div id="register">
    <van-nav-bar class="title" title="注册" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field left-icon="graphic" placeholder="请输入手机号" v-model="username" @blur="tel_regexp" />
    </van-cell-group>
    <van-cell-group>
      <van-field left-icon="lock" center clearable placeholder="请输入验证码" v-model="yanzhengma">
        <van-button slot="button" size="small" type="primary">获取验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field left-icon="lock" placeholder="请输入6-12位密码" v-model="password" @blur="psw_regexp" />
    </van-cell-group>
    <van-cell-group>
      <van-field
        left-icon="lock"
        placeholder="请再次输入密码"
        v-model="confirm_psw"
        @blur="confirm_regexp"
      />
    </van-cell-group>
    <div class="blank">
      <van-checkbox v-model="checked" checked-color="red" shape="square" icon-size="10px">
        我同意
        <span id="xieyi" @click="go_regAgreement">《注册协议》</span>
      </van-checkbox>
      <van-button
        type="primary"
        class="register"
        v-tap="{methods:tap,username:this.username,psd:this.password}"
      >注册</van-button>
    </div>
  </div>
</template>

<script>
import * as api from "../api/user";
export default {
  name: "Register",
  data() {
    return {
      checked: true,
      username: "",
      password: "",
      yanzhengma: "",
      confirm_psw: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/login");
    },
    go_regAgreement() {
      this.$router.push("/regAgreement");
    },
    tel_regexp() {
      var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (!TEL_REGEXP.test(this.username)) {
        this.$notify("请输入正确的手机号");
        this.username = "";
      }
    },
    psw_regexp() {
      var TEL_REGEXP = /.{6,12}/;
      if (!TEL_REGEXP.test(this.password)) {
        this.$notify("密码必须是6-12位");
        this.password = "";
      }
    },
    confirm_regexp() {
      if (this.password != this.confirm_psw) {
        this.$notify("两次输入密码不一致，请重新输入");
        this.confirm_psw = "";
      }
    },
    tap(data) {
      api
        .register({ userName: data.username, password: data.psd })
        .then(data => {
          if (
            this.username == "" ||
            this.yanzhengma == "" ||
            this.password == "" ||
            this.confirm_psw == ""
          ) {
            this.$notify("请将注册信息补充完整");
          } else {
            if (data.data.token != undefined) {
              this.$dialog
                .alert({
                  message: "注册成功，请重新登录"
                })
                .then(() => {
                  this.$router.push("/login");
                });
            } else {
              this.$notify("用户名已存在，请重新注册");
              this.username = "";
              this.password = "";
              this.confirm_psw = "";
              this.yanzhengma = "";
            }
          }
        });
    }
  }
};
</script>

<style lang="" scoped>
#register {
  height: 100vh;
  background: #eeeeee;
}
.van-nav-bar {
  background-color: #fcd731;
}
.van-icon-arrow-left:before {
  color: black;
}
.van-button--primary {
  background-color: #fcd731;
  border: 0;
}
.van-cell-group {
  border-bottom: #eeeeee 1px solid;
}
.blank {
  box-sizing: border-box;
  width: 100%;
  /* height: 100vh; */
  /* background-color: #eeeeee; */
  padding: 16px;
}
.van-checkbox__icon .van-icon {
  border: 0.026667rem solid red;
}
#xieyi {
  color: #fcd731;
  text-decoration: underline;
}
.register {
  width: 320px;
  height: 50px;
  margin-top: 28px;
  margin-left: 10px;
  font-size: 16px;
  box-shadow: #c9c9c9 0px 3px;
}
.van-cell {
  color: #b4b4b4;
}
</style>