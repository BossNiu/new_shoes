<template>
  <div>
    <van-nav-bar title="意见反馈">
      <van-icon name="arrow-left" slot="left" v-tap="{methods:onClickLeft}" color="#000" />
    </van-nav-bar>
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="message"
          rows="4"
          autosize
          type="textarea"
          maxlength="100"
          placeholder="请输入您的反馈意见"
          show-word-limit
        />
      </van-cell-group>
      <van-button type="primary" color="#ffdd00" size="large">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Opinion",
  methods: {
    onClickLeft() {
      this.$router.push("/site");
    }
  },
  data() {
    return {
      message: ""
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
  background: #e0e0e0;
  height: 80vh;
}
.van-field {
  background: #fff;
}
.van-button {
  width: 80vw;
  height: 44px;
  border-radius: 5px;
  margin-left: 10vw;
  margin-top: 30px;
}
</style>