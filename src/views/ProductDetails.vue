<template>
  <div>
    <van-nav-bar title="商品详情">
      <van-icon name="arrow-left" slot="left" v-tap="{methods:onClickLeft}" color="#000" />
      <van-icon name="star-o" slot="right" v-tap="{methods:onClickRight}" color="#000" />
    </van-nav-bar>

    <section>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.b" />
        </van-swipe-item>
      </van-swipe>
      <h2>￥{{list.price}}</h2>
      <span class="oriprice">￥1099.00</span>
      <h3>{{list.name}}</h3>
      <h4>货号：{{list.createdAt}}</h4>
      <div class="about">
        <div class="left">
          <p>商品收藏</p>
          <span>0</span>
        </div>
        <div class="right">
          <p>商品浏览</p>
          <span>16</span>
        </div>
      </div>
      <div class="details">图文详情 (建议在WIFI网络下查看)</div>
      <div class="user">
        用户评价
        <span>(0)</span>
      </div>
      <ul>
        <li>
          <img :src="list.coverImg" alt />
        </li>
        <li>
          <img :src="list.coverImg" alt />
        </li>
        <li>
          <img :src="list.coverImg" alt />
        </li>
        <li>
          <img :src="list.coverImg" alt />
        </li>
      </ul>
    </section>
    <footer>
      <van-goods-action>
        <van-goods-action-icon>
          <van-icon name="chat-o" color="#fff" />
        </van-goods-action-icon>
        <van-goods-action-icon>
          <van-icon name="service" color="#fff" />
        </van-goods-action-icon>
        <van-goods-action-icon to="/cart">
          <van-icon name="shop-o" color="#fff" />
        </van-goods-action-icon>
        <van-goods-action-button class="add" type="warning" v-tap="{methods:showPopup}">加入购物车</van-goods-action-button>
        <van-goods-action-button type="warning" v-tap="{methods:showPopup}">立即购买</van-goods-action-button>
      </van-goods-action>
    </footer>
    <div>
      <van-popup v-model="show" position="bottom" :closeable="true" :style="{ height: '66%' }">
        <div class="list">
          <div class="left">
            <img :src="list.coverImg" alt />
          </div>
          <div class="right">
            <h1>{{list.name}}</h1>
            <p>价格:￥{{list.price}}</p>
            <h3>已选:{{list.descriptions}}</h3>
          </div>
        </div>
        <div class="data">
          <h6>仓库</h6>
          <button class="self">自营仓库</button>
          <div class="size">
            <h4>尺寸</h4>
            <ul class="size1">
              <li>40.5</li>
              <li>40</li>
              <li>40</li>
              <li>40</li>
              <li>40</li>
              <li>40.5</li>
              <li>40</li>
              <li>40.5</li>
              <li>40</li>
              <li>40</li>
              <li>40.5</li>
              <li>40</li>
            </ul>
          </div>
          <h5>数量</h5>
          <div class="number">
            <span class="add" v-tap="{methods:add}">+</span>
            <input class="num" type="text" v-model="num" />
            <span class="decrease" v-tap="{methods:decrease}">-</span>
          </div>
          <div class="kong"></div>
        </div>
        <div class="last">
          <van-goods-action>
            <van-goods-action-button class="add1" type="warning" v-tap="{methods:addcart}">加入购物车</van-goods-action-button>
            <van-goods-action-button class="buy1" type="warning">立即购买</van-goods-action-button>
          </van-goods-action>
        </div>
      </van-popup>
    </div>
  </div>
</template> 
   
<script>
import * as api from "../api/getProlist.js";
import * as apicart from "../api/cart";

export default {
  name: "ProductDetails",
  data() {
    return {
      images: [{ b: "" }, { b: "" }, { b: "" }],
      show: false,
      closeable: true,
      num: 1,
      list: []
    };
  },
  methods: {
    addcart() {
      // console.log(this.num);
      // console.log(this.$store.state.token);
      // console.log(this.$route.params.id)
      apicart
        .addCart(localStorage.getItem("token"), {
          product: this.$route.params.id,
          quantity: this.num
        })
        .then(data => {
          if (data.status == 200) {
            this.$notify({
              type: "primary",
              message: "添加成功，在购物车等亲亲"
            });
            this.show = false;
          }
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    showPopup() {
      this.show = true;
    },
    add() {
      this.num++;
    },
    decrease() {
      if (this.num > 1) {
        this.num--;
      } else {
        this.num = 1;
      }
    }
  },
  mounted() {
    api.getDetail(this.$route.params.id, {}).then(data => {
      this.$store.state.productid = data.data._id;
      console.log(data.data._id);
      this.list = data.data;
      this.images[0].b = data.data.coverImg;
      this.images[1].b = data.data.coverImg;
      this.images[2].b = data.data.coverImg;
    });
  }
};
</script>

<style scoped>
h2,
h1,
h3,
h4,
h5,
h6,
span {
  margin: 0;
  padding: 0;
}
section {
  overflow: auto;
  height: 90vh;
}
section::-webkit-scrollbar {
  display: none;
}
.van-nav-bar {
  height: 65px;
  background: #ffdd00;
  line-height: 65px;
}
.van-icon {
  font-size: 20px;
}
/* .van-swipe-item{
  background: fuchsia
} */
.van-swipe {
  width: 100vw;
  height: 53vh;
}
.van-swipe img {
  width: 400px;
}
h2 {
  font-size: 16px;
  margin-left: 15px;
  margin-top: 13px;
  color: #c9483c;
  float: left;
}
.oriprice {
  margin-left: 8px;
  margin-top: 20px;
  float: left;
  text-decoration: line-through;
  color: #999;
}
h3 {
  font-size: 14px;
  margin-left: 18px;
  margin-top: 35px;
}
h4 {
  font-size: 12px;
  margin-left: 18px;
  margin-top: 5px;
  color: #999;
}
.about {
  width: 100vw;
  height: 42px;
  border-top: solid 0.5px #999;
  border-bottom: solid 0.5px #999;
  margin-top: 8px;
}
.about .left {
  float: left;
  width: 187px;
  height: 33px;
  border-right: solid 1px #999;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
}
.about .left p {
  margin-top: 0;
}
.about .left span {
  color: #7a7a7a;
  margin-top: -5px;
}
.about .right {
  float: left;
  width: 187px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5px;
}
.about .right p {
  margin-top: 0;
}
.about .right span {
  color: #7a7a7a;
  margin-top: -5px;
}
.details {
  font-size: 12px;
  height: 42px;
  line-height: 42px;
  border-bottom: solid 0.5px #999;
  text-indent: 16px;
}
.user {
  font-size: 12px;
  height: 42px;
  line-height: 42px;
  border-bottom: solid 0.5px #999;
  text-indent: 16px;
}
.user span {
  color: #ff1c1c;
}
li {
  width: 300px;
  height: 200px;

  text-align: center;
  border: solid 1px #000;
  margin-left: 25px;
  margin-top: 5px;
}
li img {
  width: 200px;
}
.van-goods-action-icon {
  background: #000;
  height: 50px;
  width: 60px;
}
.van-goods-action-icon__icon {
  color: #f5f5f5;
}
footer .van-goods-action-button {
  border-radius: 0;
  height: 50px;
  margin: 0;
  padding: 0;
  color: #333;
}
/* footer .van-goods-action-button .van-icon{} */
footer .add {
  color: #998a2e;
  background: #000;
}

.list {
  width: 100vw;
  height: 80px;
}
.list h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
.list .left {
  float: left;
  width: 100px;
  height: 80px;
}
.list .left img {
  width: 80px;
}
.list .right {
  float: left;
  width: 220px;
  height: 80px;
}
.list .right h1 {
  font-size: 14px;
  color: #000;
}
.list .right p {
  font-size: 14px;
  color: #ff0000;
}
.list .right h3 {
  font-size: 14px;
  color: #4e4e4e;
}
h6 {
  margin-left: 14px;
  font-size: 14px;
  color: #686868;
}
.data {
  overflow: auto;
  height: 50vh;
}
.data::-webkit-scrollbar {
  display: none;
}
.self {
  background: #db1220;
  width: 102px;
  height: 30px;
  border-radius: 3px;
  color: #fff;
  font-size: 18px;
  border: 0;
  margin-left: 15px;
  margin-top: 14px;
}
.size {
  margin-top: 19px;
}
.size h4 {
  margin-left: 14px;
  font-size: 14px;
  color: #686868;
}
.size .size1 {
  margin-top: 3px;
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
}
.size .size1 li {
  font-size: 16px;
  width: 28px;
  height: 14px;
  border: 0;
  padding: 15px 23px;
  margin: 10px;
  background: #f5f5f5;
  border-radius: 3px;
}
h5 {
  margin-left: 14px;
  font-size: 14px;
  color: #686868;
}
.number {
  width: 134px;
  height: 25px;
  border: 0.5px solid #bbb;
  margin-left: 14px;
  margin-top: 10px;
  border-radius: 3px;
  display: flex;
}
.number .add {
  display: block;
  width: 31px;
  height: 25px;
  font-size: 20px;
  text-align: center;
}
.kong {
  width: 100vw;
  height: 54px;
}
.number .num {
  border: 0;
  display: block;
  width: 68px;
  height: 23px;
  font-size: 18px;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  text-align: center;
}
.number .decrease {
  display: block;
  width: 31px;
  height: 25px;
  font-size: 20px;
  text-align: center;
}

.last .van-goods-action-button {
  border-radius: 0;
  height: 50px;
  margin: 0;
  padding: 0;
  color: #333;
}
.last .add1 {
  color: #998a2e;
  background: #424242;
}
</style>