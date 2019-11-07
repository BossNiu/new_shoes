<template>
  <div id="cart">
    <van-nav-bar fixed title="购物车" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul class="cart_li">
        <li v-for="(item,index) in list" class="cartlist" :key="index">
          <van-swipe-cell :on-close="onClose">
            <van-cell>
              <van-checkbox
                v-model="item.checked"
                checked-color="#fcd731"
                @click="singleChecked(item.checked,index)"
              ></van-checkbox>
              <img :src="item.product.coverImg" alt />
              <div class="right">
                <h3>{{item.product.name}}</h3>
                <h4>
                  <span>
                    鞋子尺码:
                    <i class="xzcm">34</i>
                  </span>
                  <van-icon name="edit" @click="tap()" />
                </h4>
                <p>
                  <span>￥{{item.product.price}}</span>
                  <van-stepper
                    v-model="item.quantity"
                    @plus="plus(item.product._id)"
                    @minus="minus(item.product._id)"
                  />
                </p>
              </div>
            </van-cell>
            <template slot="right">
              <van-button square type="danger" text="删除" @click="deleteitem(item._id)" />
            </template>
          </van-swipe-cell>
        </li>
      </ul>
    </van-pull-refresh>

    <div class="jiesuan">
      <!-- <van-checkbox v-model="checked" checked-color="#fcd731">全选</van-checkbox> -->
      <van-checkbox @click="checkAll" v-model="checked" checked-color="#fcd731">全选</van-checkbox>
      <div class="zongjia">
        <span id="total">￥{{totalPrice}}.0</span>
        <i>(不含税)</i>
        <strong @click="jiesuan()">
          去结算(
          <em>{{list.length}}</em>)
        </strong>
      </div>
    </div>
    <van-popup v-model="show" round position="bottom" :style="{ height: '34%' }">
      <h2>仓库</h2>
      <span>自营仓库</span>
      <h2>尺码</h2>
      <div class="chima">
        <i class="haoma">40</i>
        <i class="haoma">40.5</i>
        <i class="haoma">41</i>
        <i class="haoma">41.5</i>
        <i class="haoma">42</i>
        <i class="haoma">42.5</i>
        <i class="haoma">43</i>
        <i class="haoma">43.5</i>
        <i class="haoma">44</i>
        <i class="haoma">44.5</i>
        <i class="haoma">45</i>
        <i class="haoma">39</i>
        <i class="haoma">46</i>
        <i class="haoma">36</i>
        <i class="haoma">37</i>
        <i class="haoma">38</i>
      </div>
      <div class="queding" @click="close()">确定</div>
    </van-popup>
  </div>
</template>

<script>
import * as api from "../api/cart";
document.onclick = function(e) {
  if (e.target.className == "haoma") {
    var oselect = document.getElementsByClassName("select");
    for (var i = 0; i < oselect.length; i++) {
      oselect[i].classList.remove("select");
    }
    e.target.classList.add("select");
  }
  if (document.getElementsByClassName("queding")[0] == e.target) {
    document.getElementsByClassName(
      "xzcm"
    )[1].innerText = document.getElementsByClassName("select")[0].innerText;
  }
};

export default {
  name: "Cart",
  mounted() {
    api.getCart(localStorage.getItem("token"), {}).then(data => {
      let arr = data.data;
      arr.map(item => {
        item.checked = false;
        if (item.product == null) {
          item.product = {};
          item.product.coverImg =
            "https://i02piccdn.sogoucdn.com/8833c495d199d16b";
          item.product.name = "默认name";
          item.product.price = 0;
        }
      });
      this.list = arr;
      console.log(arr);
    });
  },

  data() {
    return {
      isLoading: false,
      checked: false,
      value1: 1,
      value2: 1,
      show: false,
      list: [],
      deletewhich: ""
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.list.map(item => {
        if (item.checked) {
          total += item.product.price * item.quantity;
        }
      });
      return total;
    }
  },
  methods: {
    getCartList() {
      api.getCart(localStorage.getItem("token"), {}).then(data => {
        let arr = data.data;
        arr.map(item => {
          item.checked = false;
          if (item.product == null) {
            item.product = {};
            item.product.coverImg =
              "https://i02piccdn.sogoucdn.com/8833c495d199d16b";
            item.product.name = "默认name";
            item.product.price = 0;
          }
        });
        this.list = arr;
        console.log(arr);
      });
    },
    checkAll() {
      this.list.map(item => {
        item.checked = !this.checked;
      });
      //   let totalPrice = 0;
      //   this.list.map((item)=>{
      //     if(item.checked){
      //       totalPrice += item.product.price*item.quantity;
      //     }
      //   })
      //   this.totalPrice = totalPrice
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    tap() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 500
      });
      setTimeout(() => {
        this.show = true;
      }, 500);
    },
    close() {
      this.show = false;
    },
    singleChecked(checked, index) {
      this.list[index].checked = !this.list[index].checked;

      let count = 0;
      let totalPrice = 0;
      this.list.map(item => {
        if (item.checked) {
          count++;
        }
      });
      if (count == this.list.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    plus(id) {
      console.log(id, this.$store.state.token);
      api
        .addCart(this.$store.state.token, { product: id, quantity: 1 })
        .then(data => {
          console.log(data);
        });
      // this.getCartList();
    },
    minus(id) {
      api
        .addCart(this.$store.state.token, { product: id, quantity: -1 })
        .then(data => {
          if (data.status == 200) {
            // this.$notify({ type: 'primary', message: '添加成功，在购物车等亲亲'});
          }
        });
      // this.getCartList();
    },
    deleteitem(data) {
      this.deletewhich = data;
      console.log(this.deletewhich);
    },
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: "确定删除吗？"
            })
            .then(() => {
              api.getCart(localStorage.getItem("token"), {}).then(data => {
                let arr = data.data;
                arr.map(item => {
                  item.checked = false;
                  if (item.product == null) {
                    item.product = {};
                    item.product.coverImg =
                      "https://i02piccdn.sogoucdn.com/8833c495d199d16b";
                    item.product.name = "默认name";
                    item.product.price = 0;
                  }
                });
                this.list = arr;
              });
              api
                .delCart(this.deletewhich, localStorage.getItem("token"), {})
                .then(data => {
                  console.log(data);
                });
              api.getCart(localStorage.getItem("token"), {}).then(data => {
                let arr = data.data;
                arr.map(item => {
                  item.checked = false;
                  if (item.product == null) {
                    item.product = {};
                    item.product.coverImg =
                      "https://i02piccdn.sogoucdn.com/8833c495d199d16b";
                    item.product.name = "默认name";
                    item.product.price = 0;
                  }
                });
                this.list = arr;
              });
              instance.close();
            });
          break;
      }
    },
    jiesuan() {
      this.$router.push("/order");
    }
  }
};
</script>

<style scoped>
#cart .van-pull-refresh {
  margin-top: 46px;
}
#cart .van-nav-bar {
  background: #fcd731;
}
#cart .jiesuan {
  z-index: 2;
  background: white;
  position: fixed;
  top: 85.4%;
  left: 0;
  width: 100%;
  height: 48px;
  border-top: solid 1px rgba(241, 227, 227, 0.6);
  border-bottom: solid 1px rgba(241, 227, 227, 0.6);
  padding-top: 10px;
  box-sizing: border-box;
  padding-left: 16px;
}
#cart .jiesuan .van-checkbox {
  margin-top: 4px;
  float: left;
}
#cart .jiesuan .van-checkbox__label {
  font-size: 14px;
  margin-left: 10px;
}
#cart .jiesuan #total {
  color: red;
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
}

#cart .zongjia {
  float: left;
}
#cart .zongjia i {
  font-style: normal;
}
#cart .zongjia strong {
  display: inline-block;
  width: 96px;
  height: 28px;
  margin-left: 60px;
  background: #fcd731;
  color: white;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  font-weight: normal;
  letter-spacing: 2px;
}
#cart .zongjia strong em {
  font-style: normal;
}
.cart_li {
  margin-bottom: 90px;
}
#cart .cart_li li {
  width: 100%;
  height: 110px;
  background: #fcd731;
}
#cart .cart_li li .van-cell {
  height: 110px;
}
#cart .cart_li li .van-button {
  height: 110px;
}
#cart .cart_li li .van-checkbox {
  display: block;
  float: left;
  margin-top: 30px;
}
#cart .cart_li li img {
  width: 100px;
  height: 60px;
  display: block;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
#cart .cart_li li .right {
  float: left;
  margin-left: 8px;
  width: 200px;
  height: 100%;
}
#cart .cart_li li .right h3 {
  width: 100%;
  height: 20px;
  font-size: 14px;
  margin-top: 6px;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 10px;
}
#cart .cart_li li .right h4 {
  margin-top: 2px;
}
#cart .cart_li li .right h4 span {
  font-size: 12px;
  color: #999999;
}
#cart .cart_li li .right h4 .van-icon {
  float: right;
  font-size: 18px;
}
#cart .cart_li li .right p {
  margin-top: 8px;
}
#cart .cart_li li .right p span {
  color: red;
}
#cart .cart_li li .right p .van-stepper {
  display: inline;
  float: right;
  vertical-align: middle;
}
#cart .van-popup h2 {
  font-size: 14px;
  color: #000;
  margin-top: 10px;
  margin-left: 8px;
}
#cart .van-popup span {
  display: block;
  width: 70px;
  height: 20px;
  margin-left: 8px;
  border: solid 1px yellow;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  color: yellow;
  border-radius: 5px;
}
#cart .chima {
  padding: 8px;
}
#cart .chima i {
  font-style: normal;
  display: inline-block;
  padding: 8px;
  border: solid 1px #333333;
  font-size: 12px;
  color: #333333;
  border-radius: 4px;
  margin-right: 4px;
  margin-top: 4px;
}
#cart .queding {
  width: 100%;
  height: 48px;
  background: #fcd731;
  margin-top: 10px;
  text-align: center;
  line-height: 48px;
  font-size: 14px;
  color: black;
}
#cart .select {
  background: #fcd731;
}
#xzcm {
  font-style: normal;
}
</style>