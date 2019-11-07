<template>
  <div>
    <van-nav-bar title="地址管理">
      <van-icon name="arrow-left" slot="left" color="#000" v-tap="{methods:onClickLeft}" />
    </van-nav-bar>
    <ul>
      <li>
        收件人姓名
        <input type="text" v-model="name" />
      </li>
      <li>
        手机号码
        <input type="text" v-model="tel" />
      </li>
      <li>
        所在区域
        <input type="text" v-model="area" />
      </li>
      <li>
        详细地址
        <input type="text" v-model="address" />
      </li>
    </ul>
    <button @click="sub">提交</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ModifyAddress",
  data() {
    return {
      tel: "",
      area: "",
      address: "",
      name: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    //修改地址
    sub() {
      console.log(this.$route);
      let id = this.$route.params.id;
      axios({
        url: "http://api.cat-shop.penkuoer.com/api/v1/addresses/" + id,
        method: "put",
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
        data: {
          receiver: this.name,
          mobile: this.tel,
          regions: this.area,
          address: this.address,
          idDefault: "true"
        }
      }).then(data => {
        console.log(data.data);
        this.$router.push("/address/" + "地址管理");
      });
    }
  },
  mounted() {
    // console.log(this.$route.params.id)
    let token = localStorage.getItem("token");
    let id = this.$route.params.id;
    axios({
      url: "http://api.cat-shop.penkuoer.com/api/v1/addresses/" + id,
      method: "get",
      headers: { authorization: "Bearer " + token }
    }).then(data => {
      this.tel = data.data.mobile;
      this.area = data.data.regions;
      this.address = data.data.address;
      this.name = data.data.receiver;
      // console.log(data.data)
      // this.name=data.data.addresses.receiver;
      // this.list.forEach((item,index)=>{
      //   this.name=item.receiver
      //   console.log(item.receiver);
      // })
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
input {
  border: 0;
  height: 30px;
  margin-left: 20px;
}
li {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #666;
  line-height: 40px;
  text-indent: 20px;
}
</style>