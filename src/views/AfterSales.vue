<template>
  <div>
    <van-nav-bar title="售后管理">
      <van-icon name="arrow-left" slot="left" v-tap="{methods:onClickLeft}" color="#000" />
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="content">
        <img src="static/images/pending.jpg" alt />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "AfterSales",
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