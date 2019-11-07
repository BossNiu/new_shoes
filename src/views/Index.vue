<template>
  <div id="index">
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#fcd731" inactive-color="black" fixed>
      <van-tabbar-item icon="home-o" to="/mall">商城</van-tabbar-item>
      <van-tabbar-item icon="browsing-history-o" to="/news">咨询</van-tabbar-item>
      <van-tabbar-item icon="cart-circle-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>

<style lang="" scoped>
</style>