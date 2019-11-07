<template>
  <div id="splash">
    <img src="static/images/splash.jpg" alt class="splash" />
    <img src="static/images/logo.png" alt />
    <h3>Copyright &copy; Ai Ke Trading Co ,. Ltd</h3>
    <p>All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: "Splash",
  mounted() {
    setTimeout(() => {
      // this.$router.push('/index');
      if (this.$store.state.token == "") {
        this.$router.push("/login");
      }
    }, 3000);
  }
};
</script>

<style lang="" scoped>
.splash {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
#splash {
  position: relative;
  width: 100%;
  height: 667px;
  background-size: 100% 100%;
  overflow: hidden;
}
#splash img {
  width: 120px;
  position: absolute;
  top: 80px;
  left: 128px;
}
#splash h3 {
  color: white;
  font-weight: normal;
  font-size: 12px;
  position: absolute;
  top: 590px;
  left: 85px;
}
#splash p {
  color: white;
  font-weight: normal;
  font-size: 12px;
  position: absolute;
  top: 615px;
  left: 134px;
}
</style>