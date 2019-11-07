<template>
  <div class="body">
    <header>
      <van-icon name="arrow-left" v-tap="{methods:onClickLeft}" />

      <van-search background="#ffdd00" placeholder="搜索" v-model="value" />
    </header>
    <section>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="品牌" to="/brand" />
        <van-sidebar-item title="系列" to="/series" />
        <van-sidebar-item title="尺寸" to="/size" />
        <van-sidebar-item title="价格" to="/price" />
      </van-sidebar>

      <router-view></router-view>
    </section>
  </div>
</template>
   
<script>
export default {
  name: "Sort",
  data() {
    return {
      value: "",
      activeKey: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    }
  }
};
</script>

<style scoped>
.body::-webkit-scrollbar {
  display: none;
}
.body {
  display: flex;
  flex-direction: column;
}

header {
  position: fixed;
  width: 100vw;
  top: 0;
  height: 65px;
  background: #ffdd00;
  z-index: 10;
}
section {
  display: flex;
  height: 90vh;
  margin-top: 64px;
}
.van-icon {
  position: absolute;
  left: 19px;
  top: 20px;
  color: #000;
  font-size: 20px;
}
.van-search {
  width: 290px;
  height: 30px;
  margin-left: 41px;
  margin-top: 16px;
}
.van-sidebar {
  width: 80px;
  position: fixed;
  left: 0;
  top: 65px;
}
.van-sidebar-item {
  padding: 0;
  padding: 15px 20px;
  margin-top: 10px;
  background-color: white;
}
.van-sidebar-item:active {
  color: #fde25d;
}
.van-sidebar-item--select {
  border-color: #fcd30b;
}
</style>