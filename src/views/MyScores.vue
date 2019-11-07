<template>
  <div>
    <van-nav-bar title="我的积分">
      <van-icon name="arrow-left" slot="left" v-tap="{methods:onClickLeft}" color="#000" />
    </van-nav-bar>
    <div class="content">
      <img src="static/images/scores.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "MyScores",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
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
  width: 100vw;
}
</style>