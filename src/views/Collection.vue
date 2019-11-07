<template>
  <div class="body">
    <van-nav-bar title="我的收藏">
      <van-icon name="arrow-left" slot="left" color="#000" v-tap="{methods:onClickLeft}" />
    </van-nav-bar>
    <section>
      <van-tabs
        v-model="active"
        animate
        swipeable
        background="#36373a"
        color="#fcd30b"
        title-active-color="#fcd30b"
        title-inactive-color="white"
      >
        <van-tab title="资讯">
          <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
          <div class="content">
            <img src="static/images/content.jpg" alt />
          </div>
          <!-- </van-pull-refresh> -->
        </van-tab>
        <van-tab title="商品">
          <div class="content">
            <img src="static/images/content.jpg" alt />
          </div>
        </van-tab>
        <van-tab title="帖子">
          <div class="content">
            <img src="static/images/content.jpg" alt />
          </div>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name: "Collection",
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
  },
  data() {
    return {
      active: 0,
      isLoading: false
    };
  }
};
</script>

<style scoped>
.van-nav-bar {
  height: 64px;
  background: #ffdd00;
  line-height: 65px;
}
.van-icon {
  font-size: 20px;
}
.van-tab {
  background: #36373a;
  height: 100vh;
  width: 100vw;
}
img {
  width: 165px;
  height: 135px;
  position: absolute;
  left: 106px;
  top: 190px;
}
section {
  height: 89.8vh;
  background: #f5f5f5;
}
.content {
  overflow: auto;
  position: absolute;
  left: 0;
  top: 6vh;
  width: 100vw;
  height: 83.8vh;
}
</style>