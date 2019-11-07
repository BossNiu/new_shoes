<template>
  <div>
    <van-nav-bar title="设置">
      <van-icon name="arrow-left" slot="left" v-tap="{methods:onClickLeft}" color="#000" />
    </van-nav-bar>
    <div class="content">
      <van-cell is-link to="./aboutwe">关于我们</van-cell>
      <van-cell is-link to="./opinion">意见反馈</van-cell>
      <van-cell is-link v-tap="{methods:del}">清理缓存</van-cell>
      <van-cell is-link>拨打客服</van-cell>
      <van-cell is-link to="./version">产看版本</van-cell>
      <span class="tel">
        <a href="tel:400-881-9879"></a>400-881-9878
      </span>
      <span class="version">版本3.2.0</span>
    </div>
    <van-button
      type="primary"
      color="#ffdd00"
      size="large"
      @click="show = true"
      v-tap="{methods:out}"
    >退出登录</van-button>

    <van-overlay :show="show" @click="show = false"></van-overlay>
  </div>
</template>

<script>
export default {
  name: "MyScores",
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    out() {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "确认是否退出登录"
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {
          // on cancel
        });
    },
    del() {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "确认要清理46.87M的缓存？"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  data() {
    return {
      show: false
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
img {
  width: 100vw;
}
.van-cell {
  border-bottom: solid 0.5px #eee;
}
.tel {
  position: absolute;
  right: 45px;
  top: 210px;
}
.version {
  position: absolute;
  right: 45px;
  top: 256px;
}
.van-button {
  width: 80vw;
  height: 44px;
  border-radius: 5px;
  margin-left: 10vw;
  margin-top: 30px;
}
</style>