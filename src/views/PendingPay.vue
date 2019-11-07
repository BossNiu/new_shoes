<template>
  <div class="head">
    <van-nav-bar title="待付款">
      <van-icon name="arrow-left" slot="left" v-tap="{methods:onClickLeft}" color="#000" />
    </van-nav-bar>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="content">
        <ul>
          <li ref="lie" v-for="(item,index) in list" :key="index">
            <h2>订单编号{{item.id}} {{item.receiver}}{{item.price}}{{item.regions}}{{item.address}}</h2>
            <p></p>
            <van-button type="danger" @click="del(item._id)">删除</van-button>
          </li>
        </ul>

        <img src="static/images/pending.jpg" v-show="show" />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PendingPay",
  data() {
    return {
      isLoading: false,
      show: true,
      list: []
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
    },
    //删除订单
    del(id) {
      console.log(id);
      axios({
        url: "http://api.cat-shop.penkuoer.com/api/v1/orders/" + id,
        method: "delete",
        headers: { authorization: "Bearer " + localStorage.getItem("token") }
      })
        .then(data => {
          console.log(data);
          //删除完以后，重新请求一次订单列表
          axios({
            url: "http://api.cat-shop.penkuoer.com/api/v1/orders",
            method: "get",
            headers: {
              authorization: "Bearer " + localStorage.getItem("token")
            },
            params: {
              per: 30,
              page: 1
            }
          }).then(data => {
            this.list = data.data.orders;
            console.log(data.data.orders);
            console.log(this.list.length);
            if (this.list.length) {
              this.show = false;
            } else {
              this.show = true;
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    //挂载完成后，请求订单列表
    axios({
      url: "http://api.cat-shop.penkuoer.com/api/v1/orders",
      method: "get",
      headers: { authorization: "Bearer " + localStorage.getItem("token") },
      params: {
        per: 30,
        page: 1
      }
    }).then(data => {
      this.list = data.data.orders;

      this.list.forEach((item, index) => {
        this.list.name = item.receiver;
        this.list.id = item.no;
        this.list.address = item.address;
        this.list.tel = item.price;
      });

      console.log(data.data.orders);
      console.log(this.list.length);
      if (this.list.length) {
        this.show = false;
      } else {
        this.show = true;
      }
      // 带商品名称与图片的请求
      //   this.list.forEach((item,index)=>{
      //     console.log(item)
      //   console.log(this.$store.state.productid)
      // //  let id = item._id
      // axios({
      //   url:'http://api.cat-shop.penkuoer.com/api/v1/products/'+item._id,
      //     method:'get',

      //  }).then((data)=>{
      //    console.log(data)
      //  })
      //  })
    });
  }
};
</script>

<style scoped>
li,
h1,
h2,
h3 {
  margin: 0;
  padding: 0;
}
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
  margin-bottom: 10vh;
}
img {
  width: 165px;
  height: 135px;
  position: absolute;
  left: 106px;
  top: 190px;
}
li {
  height: 50px;
  border-bottom: 1px solid #666;
  position: relative;
  background: #eee;
  margin-top: 20px;
  overflow: hidden;
}
.van-button {
  position: absolute;
  right: 0;
  top: 0;
}
h2 {
  font-size: 12px;
  margin-top: -15px;
}
</style>