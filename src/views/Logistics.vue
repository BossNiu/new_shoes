<template>
  <div class="content">
    <van-row>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="con">
          <img src="static/images/content.jpg" alt />
          <h2>111</h2>
        </div>
      </van-pull-refresh>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Logistics",
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
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
.content {
  background: #f5f5f5;
  min-height: 90vh;
  width: 100%;
}
.con {
  background: #f5f5f5;
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