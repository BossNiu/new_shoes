<template>
  <div>
    <van-nav-bar title="我的消息" right-text="全部已读">
      <van-icon name="arrow-left" slot="left" color="#000" v-tap="{methods:onClickLeft}" />
    </van-nav-bar>
    <van-tabs
      v-model="active"
      swipeable
      animated
      background="#36373a"
      color="#fcd30b"
      title-active-color="#fcd30b"
      title-inactive-color="white"
    >
      <van-tab title="物流" background="red" color="red" to="/logistics"></van-tab>
      <van-tab title="消息" to="/myxx"></van-tab>
      <van-tab title="优惠券" to="/myyhj"></van-tab>
    </van-tabs>

    <router-view></router-view>
  </div>
</template>

<script>
// import '@vant/touch-emulator';
export default {
  name: "Message",
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    a() {
      this.$router.push("/logistics");
    }
  }
};
</script>

<style scoped>
.van-nav-bar {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 64px;
  background: #ffdd00;
  line-height: 65px;
}
.van-icon {
  font-size: 20px;
}
.van-tab {
  background: #36373a;
  width: 100vw;
}
.van-tabs {
  margin-top: 64px;
  width: 100%;
}
img {
  width: 165px;
  height: 135px;
  position: absolute;
  left: 106px;
  top: 190px;
}
section {
  width: 100%;
  background: #f5f5f5;
} /*
.content { 
   overflow: auto;
  width: 100vw;
   background: #f5f5f5;
} */
</style>