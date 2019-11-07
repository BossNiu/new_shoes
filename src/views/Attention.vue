<template>
  <div>
    <div class="head">
      <van-nav-bar title="我的关注">
        <van-icon name="arrow-left" slot="left" color="#000" v-tap="{methods:onClickLeft}" />
      </van-nav-bar>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="content">
          <img src="static/images/pending.jpg" alt />
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  name: "Attention",
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
.head {
  position: fixed;
  width: 100%;
  top: 0;
  height: 64px;
  background: #ffdd00;
  line-height: 65px;
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
  width: 100vw;
  min-height: 90vh;
}
img {
  width: 165px;
  height: 135px;
  position: absolute;
  left: 106px;
  top: 190px;
}
</style>