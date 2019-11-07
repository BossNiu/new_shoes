<template>
  <div>
    <van-nav-bar title="我的好友">
      <van-icon name="arrow-left" slot="left" color="#000" v-tap="{methods:onClickLeft}" />
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="content">
        <img src="static/images/content.jpg" alt />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "Friends",
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.van-nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  height: 64px;
  background: #ffdd00;
  line-height: 65px;
}
.van-icon {
  font-size: 20px;
}
.content {
  overflow: auto;
  width: 100vw;
  margin-top: 64px;
  min-height: 90vh;
  background: #f5f5f5;
}
img {
  width: 165px;
  height: 135px;
  position: absolute;
  left: 106px;
  top: 190px;
}
</style>