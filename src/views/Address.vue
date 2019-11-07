<template>
  <div v-cloak>
    <van-nav-bar title="地址管理" right-text="新增地址" @click-right="onClickRight">
      <van-icon name="arrow-left" slot="left" color="#000" v-tap="{methods:onClickLeft}" />
    </van-nav-bar>
    <div class="content" v-cloak>
      <van-address-list @add="onAdd" @edit="onEdit">
        <ul v-cloak>
          <li v-for="(item,index) in list" :key="index" @click="order(item._id)">
            <van-swipe-cell :on-close="onClose">
              <van-cell>
                <h3>{{item.receiver}},{{item.mobile}}</h3>
                <p>{{item.regions}}{{item.address}}</p>
                <!-- <button @click="del(item._id)">删除</button> -->
                <button @click="change(item._id)">修改</button>
              </van-cell>
              <template slot="right" :on-close="onClose">
                <van-button square type="danger" text="删除" @click="del(item._id)" />
                <!-- <van-button square type="primary" text="修改" @click="change(item._id)" /> -->
              </template>
            </van-swipe-cell>
          </li>
        </ul>
        <!-- 
        <van-swipe-cell >
          <template slot="right">
            <van-button square type="danger" text="删除" />
             
          </template>
        </van-swipe-cell>-->
      </van-address-list>
    </div>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
import axios from "axios";

export default {
  name: "Address",
  data() {
    return {
      list: []
    };
  },
  methods: {
    // clickPosition 表示关闭时点击的位置
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm(
              {
                message: "确定删除吗？"
              },
              axios({
                url: "http://api.cat-shop.penkuoer.com/api/v1/addresses",
                method: "get",
                headers: {
                  authorization: "Bearer " + localStorage.getItem("token")
                },
                data: {
                  per: 10,
                  page: 1
                }
              }).then(data => {
                this.list = data.data.addresses;
              })
            )
            .then(() => {
              // this.$router.push('/modifyaddress/'+id.id)

              console.log("aa");
            });
          break;
      }
    },
    //删除
    del(Id) {
      // console.log(id)
      api.DelAddress(Id, localStorage.getItem("token")).then(data => {
        console.log(data);
        api
          .AddressList(localStorage.getItem("token"), { per: 10, page: 1 })
          .then(data => {
            this.list = data.data.addresses;
          });
        // if (data.status == 200) {
        //   // this.$toast('删除成功')
        // }
      });
      // axios({
      //   method: "delete",
      //   url: "http://api.cat-shop.penkuoer.com/api/v1/addresses/"+Id,
      //   headers: { authorization: "Bearer " + localStorage.getItem('token')},
      // }).then((data)=> {
      //   console.log(data);
      //   // this.list.splice(index)
      //   // location.reload();

      // });
    },
    change(ID) {
      console.log(ID);
      this.$router.push("/modifyaddress/" + ID);
    },
    onEdit(item, index) {
      this.$toast("编辑地址:" + index);
    },
    onClickLeft() {
      this.$router.push("/my");
    },
    onClickRight() {
      this.$router.push("/addaddress");
    },
    onAdd() {
      this.$router.push("/addaddress");
    },
    order(id) {
      console.log(id);
      this.$store.state.addressid = id;
      if (this.$route.params.id == "我是订单") {
        this.$router.go(-1);
      }
    }
  },
  mounted() {
    //获取
    // let token = localStorage.getItem("token");
    // axios({
    //   url: "http://api.cat-shop.penkuoer.com/api/v1/addresses",
    //   method: "get",
    //   headers: { authorization: "Bearer " + token },
    //   parmas: {
    //     per: 10,
    //     page: 1
    //   }
    // }).then((data) => {

    //   this.list = data.data.addresses;
    //   // this.name=data.data.addresses.receiver;
    //   // this.list.forEach((item,index)=>{
    //   //   this.name=item.receiver
    //   //   console.log(item.receiver);
    //   // })
    // });
    api
      .AddressList(localStorage.getItem("token"), { per: 10, page: 1 })
      .then(data => {
        this.list = data.data.addresses;
      });
  }
};
</script>

<style scoped>
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
  position: absolute;
  left: 0;
  top: 64px;
  width: 100vw;
  height: 83.8vh;
  background: #f5f5f5;
}
h3 {
  margin: 0;
  padding: 0;
  font-size: 14px;
}
p {
  font-size: 12px;
  margin: 0;
  padding: 0;
}
.van-swipe-cell .van-button {
  height: 70px;
}
</style>