<template>
  <div class="body">
    <header>
      <div class="head"></div>
      <div>
        <van-icon class="set" name="setting-o" color="white" v-tap="{methods:site}" />
        <van-icon name="user-circle-o" class="avatar" color="white" v-tap="{methods:info}" />
        <ul>
          <li v-tap="{methods:myscores}">
            <h3>100</h3>
            <h4>积分</h4>
          </li>
          <li v-tap="{methods:mycoupon}">
            <h3>0</h3>
            <h4>优惠券</h4>
          </li>
          <li v-tap="{methods:cart}">
            <h3>
              <van-icon name="shopping-cart-o" />
            </h3>
            <h4>购物车</h4>
          </li>
        </ul>
      </div>
      <p v-tap="{methods:info}">{{username}}</p>
      <h2 v-tap="{methods:info}">
        <van-icon name="medel-o" />
        <div>银牌会员</div>
      </h2>
    </header>
    <section>
      <div class="myorder">我的订单</div>
      <van-grid>
        <van-grid-item icon="pending-payment" color="red" text="待付款" to="/pendingpay"></van-grid-item>
        <van-grid-item icon="logistics" text="待收货" to="/pendingreceipt"></van-grid-item>
        <van-grid-item icon="pending-payment" text="待评价" to="/pendingcommen"></van-grid-item>
        <van-grid-item icon="pending-payment" text="售后管理" to="/aftersales"></van-grid-item>
      </van-grid>
      <div class="my">
        <div class="left">
          <van-icon name="star" color="#f2d84e" />
          <van-icon name="bell" color="#f2d84e" />
          <van-icon name="location-o" color="#f2d84e" />
          <van-icon name="records" color="#f2d84e" />
          <van-icon name="friends" color="#f2d84e" />
          <van-icon name="location-o" color="#f2d84e" />
          <van-icon name="location-o" color="#f2d84e" />
          <van-icon name="location-o" color="#f2d84e" />
        </div>
        <div class="right">
          <van-cell is-link to="/collection">我的收藏</van-cell>
          <van-cell is-link to="/message">我的消息</van-cell>
          <van-cell is-link @click="address">地址管理</van-cell>
          <van-cell is-link to="/comment">我的评论</van-cell>
          <van-cell is-link to="friends">我的好友</van-cell>
          <van-cell is-link to="/post">我的帖子</van-cell>
          <van-cell is-link to="/fan">我的粉丝</van-cell>
          <van-cell is-link to="attention">我的关注</van-cell>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "My",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    info() {
      this.$router.push("/personinfo");
    },
    mycoupon() {
      this.$router.push("/mycoupon");
    },
    myscores() {
      this.$router.push("/myscores");
    },
    cart() {
      this.$router.push("/cart");
    },
    site() {
      this.$router.push("/site");
    },
    address() {
      let id = "地址管理";
      this.$router.push("/address/" + id);
    }
  },
  mounted() {
    console.log(this.$store.state.token);
    //   let token = this.$store.state.token
    let token = localStorage.getItem("token");
    axios({
      url: "http://api.cat-shop.penkuoer.com/api/v1/users/info",
      method: "GET",
      headers: { authorization: "Bearer " + token }
    }).then(data => {
      console.log(data.data);
      this.username = data.data.userName;
    });
  }
};
</script>

<style scoped="">
.body {
  background: #efeff4;
}
header {
  position: absolute;
  top: 0;
  height: 250px;
  background: #252525;
}
.head {
  height: 65px;
}
.set {
  position: absolute;
  top: 58px;
  right: 15px;
  font-size: 25px;
}
.avatar {
  width: 111px;
  height: 111px;
  border-radius: 100%;
  font-size: 111px;
  background: #e6e6e6;
  margin-left: 19px;
}
header p {
  position: absolute;
  left: 138px;
  top: 90px;
  font-size: 20px;
  color: white;
}
h2 {
  color: white;
  font-size: 16px;
  position: absolute;
  left: 160px;
  top: 120px;
}
h2 .van-icon {
  position: absolute;
  left: -20px;
  font-size: 20px;
}
header ul {
  margin-top: 10px;
  width: 100vw;
  height: 65px;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  color: white;
  text-align: center;
}
section {
  overflow: auto;
  position: absolute;
  top: 260px;
  bottom: 50px;
  width: 100vw;
  background: white;
}
section::-webkit-scrollbar {
  display: none;
}
.myorder {
  height: 42px;
  line-height: 42px;
  font-size: 13px;
  padding-left: 20px;
  font-weight: 600;
  border-bottom: 1px solid #ddd;
}
.myorder .van-grid .van-grid-item {
  font-size: 30px;
}

.my .left {
  float: left;
  width: 44px;
}
.my .right {
  float: left;
  width: 330px;
}
.my .left .van-icon {
  height: 34px;
  font-size: 26px;
  margin-top: 10px;
  margin-left: 16px;
}
.my .right .van-cell {
  width: 330px;
  border-bottom: solid 0.5px #eee;
}
</style>