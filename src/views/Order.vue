<template>
  <div id="order">
    <van-nav-bar background="yellow" fixed title="订单" left-arrow @click-left="onClickLeft" />
    <div class="address" @click="addressid">
      <van-icon name="location-o" color="red" size="20px" />
      <div class="right">
        <p>{{address.receiver}} {{address.mobile}}</p>
        <p>{{address.regions}}{{address.address}}</p>
      </div>
    </div>
    <ul class="prolist">
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.product.coverImg" alt />
        <div class="con">
          <h3>{{item.product.name}}</h3>
          <h4>鞋子尺码：37.5</h4>
          <p>
            <span>￥{{item.product.price}}</span>
            <i>x{{item.quantity}}</i>
          </p>
        </div>
      </li>
    </ul>
    <div class="kuaidi">
      <span>配送方式</span>
      <i>普快包邮</i>
      <van-checkbox
        v-model="checked"
        shape="square"
        checked-color="red"
        icon-size="10px"
        @click="tap1()"
      ></van-checkbox>
      <strong>顺丰快递: 28.0</strong>
    </div>
    <div class="quan">
      <span>使用优惠券</span>
      <van-icon name="arrow" />
    </div>
    <div class="jifen">
      <span>积分</span>
      <van-checkbox
        v-model="checked1"
        shape="square"
        checked-color="red"
        icon-size="10px"
        @click="tap()"
      ></van-checkbox>
      <strong>使用积分</strong>
      <p :class="display">当前积分：100.0,使用积分：100.0</p>
    </div>
    <div class="total">
      <p>
        <span>商品金额:</span>
        <i>￥{{totalprice}}</i>
      </p>
      <p>
        <span>优惠金额:</span>
        <i>￥0.0</i>
      </p>
      <p>
        <span>积分抵扣:</span>
        <i>￥{{youhui}}</i>
      </p>
      <p>
        <span>运 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费:</span>
        <i>￥{{yunfei}}</i>
      </p>
    </div>
    <van-cell-group class="dingdan">
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        maxlength="100"
        placeholder="订单备注"
        show-word-limit
      />
    </van-cell-group>
    <van-submit-bar :price="totalprices" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import * as api from "../api/cart";
import * as api_order from "../api/order";
import axios from "axios";
export default {
  name: "Order",
  data() {
    return {
      list: [],
      checked: false,
      checked1: true,
      display: "block",
      yunfei: 0.0,
      youhui: 0,
      totalprice: 0,
      // totalprices:100,
      message: "",
      address: []
    };
  },
  computed: {
    totalprices() {
      return (
        (parseInt(this.totalprice) +
          parseInt(this.youhui) +
          parseInt(this.yunfei)) *
        100
      );
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    //点击到收货地址页
    addressid() {
      let id = "我是订单";
      this.$router.push("/address/" + id);
    },
    tap() {
      if (this.checked1 == false) {
        this.display = "block";
        this.youhui = "-10";
      } else {
        this.display = "hidden";
        this.youhui = "0";
      }
    },
    tap1() {
      if (this.checked == true) {
        this.yunfei = "0.0";
      } else {
        this.yunfei = "28.8";
      }
    },
    onSubmit() {
      console.log(this.list);
      let orderDetails = [];
      this.list.map((item, index) => {
        orderDetails[index] = {};
        orderDetails[index].quantity = item.quantity;
        if (item.product._id == null) {
          orderDetails[index].product = "5dbfa93626a7dacece36ecec";
        } else {
          orderDetails[index].product = item.product._id;
        }
        orderDetails[index].price = item.product.price;
      });
      api_order
        .addOrder(localStorage.getItem("token"), {
          receiver: this.address.receiver,
          regions: this.address.regions,
          address: this.address.address,
          orderDetails: orderDetails
          // api_order.addOrder(localStorage.getItem('token'),{receiver:'卜雨萌',regions:'河南省郑州市高新区',address:'威科姆顶层',orderDetails:orderDetails
        })
        .then(data => {
          if (data.data.code == "success") {
            this.$notify("提交订单成功");
          } else {
            this.$notify("提交订单失败");
          }
        })
        .catch(err => {
          this.$notify("提交订单失败");
          console.log(err);
        });
    }
  },
  mounted() {
    api.getCart(localStorage.getItem("token"), {}).then(data => {
      let arr = data.data;
      var monney = 0;
      arr.map(item => {
        if (item.product == null) {
          item.product = {};
          item.product.coverImg =
            "https://img.zaozuo.com/58e82f171ad77e39c34ca156285f3be2";
          item.product.name = "默认name";
          item.product.price = 0;
        }
        monney += parseInt(item.product.price * item.quantity);
      });
      this.totalprice = monney;
      this.list = arr;
    });
    // this.totalprices=this.totalprice+this.youhui+this.yunfei;
    console.log(this.$store.state.addressid);
    let id = this.$store.state.addressid;
    axios({
      url: "http://api.cat-shop.penkuoer.com/api/v1/addresses/" + id,
      method: "get",
      headers: { authorization: "Bearer " + localStorage.getItem("token") }
    }).then(data => {
      console.log(data.data);
      this.address = data.data;
      // this.onSubmit();
    });
  }
};
</script>

<style lang="" scoped>
#order .van-nav-bar {
  background: #fcd731;
}
#order .van-nav-bar .van-icon {
  color: #333333;
}
#order .address {
  margin-top: 48px;
  width: 100%;
  height: 60px;
  border-bottom: solid 3px rgb(233, 221, 221);
  padding: 10px;
  box-sizing: border-box;
}
#order .address .van-icon {
  display: block;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
#order .address .right p {
  color: rgb(199, 179, 179);
  font-size: 14px;
}
.prolist li {
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
}
#order .prolist li img {
  display: block;
  width: 90px;
  height: 70px;
}
#order .prolist .con {
  width: 240px;
  display: inline-block;
  margin-left: 10px;
}
.prolist h3 {
  color: black;
  font-size: 14px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 10px;
}
.prolist h4 {
  font-size: 12px;
  color: rgb(172, 158, 158);
}
.prolist p {
  margin-top: 10px;
  line-height: 18px;
}
.prolist p span {
  color: red;
}
.prolist p i {
  font-style: normal;
  float: right;
}
.prolist {
  width: 100%;
  height: 220px;
  border-bottom: solid 3px rgb(233, 221, 221);
  overflow-y: auto;
}
.kuaidi {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid rgb(230, 216, 216);
  padding: 8px;
  box-sizing: border-box;
}
.kuaidi span {
  margin-left: 4px;
  color: black;
  font-size: 14px;
  vertical-align: middle;
}
.kuaidi i {
  font-size: 12px;
  color: red;
  font-style: normal;
  margin-left: 8px;
}
.kuaidi .van-checkbox {
  display: inline-block;
  margin-left: 110px;
  vertical-align: middle;
}
.kuaidi strong {
  font-weight: normal;
  color: rgb(153, 140, 140);
  font-size: 12px;
  margin-left: 6px;
  vertical-align: middle;
}
.quan {
  width: 100%;
  height: 40px;
  border-bottom: 2px solid rgb(230, 216, 216);
  padding: 8px;
  box-sizing: border-box;
}
.quan span {
  font-size: 14px;
  margin-left: 4px;
}
.quan .van-icon {
  float: right;
  margin-right: 4px;
  margin-top: 4px;
}
.jifen {
  width: 100%;
  height: auto;
  border-bottom: solid 3px rgb(233, 218, 218);
  padding: 8px;
  box-sizing: border-box;
}
.jifen span {
  font-size: 14px;
  margin-left: 4px;
}
.jifen .van-checkbox {
  display: inline-block;
  margin-left: 230px;
  vertical-align: middle;
}
.jifen strong {
  font-size: 12px;
  color: rgb(165, 151, 151);
  vertical-align: middle;
  margin-left: 8px;
}
.jifen p {
  margin-left: 20px;
}
.jifen .hidden {
  display: none;
}
.total {
  width: 100%;
  height: 90px;
  border-bottom: solid 3px rgb(233, 218, 218);
  padding: 8px;
  box-sizing: border-box;
}
.total p {
  line-height: 20px;
  margin-left: 4px;
}
.total p i {
  font-style: normal;
  margin-left: 10px;
}
.dingdan {
  margin-bottom: 50px;
  border-bottom: solid 3px rgb(202, 194, 194);
}
.van-submit-bar__price {
  font-size: 14px;
}
.van-submit-bar__button {
  width: 100px;
  height: 30px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 30px;
  margin-right: 10px;
}
</style>