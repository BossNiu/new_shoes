<template>
  <div id="outscropPsd">
    <van-nav-bar class="title" title="找回密码" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field left-icon="graphic" placeholder="请输入手机号" />
    </van-cell-group>
    <van-cell-group>
      <van-field left-icon="lock" center clearable placeholder="请输入验证码">
        <van-button slot="button" size="small" type="primary">获取验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field left-icon="lock" placeholder="请输入6-12位密码" />
    </van-cell-group>
    <van-cell-group>
      <van-field left-icon="lock" placeholder="请再次输入密码" />
    </van-cell-group>
    <van-button type="primary" class="queding">确定</van-button>
  </div>
</template>

<script>
export default {
  name: "OutscropPsd",
  methods: {
    onClickLeft() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="" scoped>
#outscropPsd {
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
.queding {
  width: 320px;
  height: 50px;
  margin-top: 28px;
  margin-left: 27px;
  font-size: 16px;
  box-shadow: #c9c9c9 0px 3px;
}
.van-cell {
  color: #b4b4b4;
}
</style>