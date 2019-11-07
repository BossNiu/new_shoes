<template>
  <div>
    <van-nav-bar title="我的优惠券">
      <van-icon name="arrow-left" slot="left" v-tap="{methods:onClickLeft}" color="#000" />
    </van-nav-bar>
    <div class="content">
      <van-tabs
        v-model="active"
        background="#36373a"
        color="#fcd30b"
        title-active-color="#fcd30b"
        title-inactive-color="white"
      >
        <van-tab title="待领取">待领取</van-tab>
        <van-tab title="未使用">未使用</van-tab>
        <van-tab title="已使用">已使用</van-tab>
        <van-tab title="已过期">已过期</van-tab>
      </van-tabs>
      <img src="static/images/pending.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCoupon",
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
.head {
  width: 100vw;
  height: 64px;
  position: absolute;
  top: 0px;
}
.van-nav-bar {
  height: 64px;
  background: #ffdd00;
  line-height: 65px;
}
.van-icon {
  font-size: 20px;
}
.content {
  overflow: auto;
  position: absolute;
  top: 64px;
  bottom: 0;
  width: 100vw;
}
img {
  width: 165px;
  height: 135px;
  position: absolute;
  left: 106px;
  top: 190px;
}
.van-tab {
  background: #ffdd00;
}
</style>