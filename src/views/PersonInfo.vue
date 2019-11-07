<template>
  <div>
    <van-nav-bar title="个人信息">
      <van-icon name="arrow-left" slot="left" v-tap="{methods:onClickLeft}" color="#000" />
    </van-nav-bar>
    <div class="avatar">
      <span>个人头像</span>
      <!-- <span><img :src="name" alt=""></span>
      <van-uploader :after-read="afterRead" />-->
    </div>
    <div class="name" v-tap="{methods:names}">
      <span>用户昵称</span>
      <p>{{username}}</p>
    </div>
    <div class="sex">
      <span>性别</span>
      <p>{{sex}}</p>
    </div>
    <div class="birth">
      <span>生日</span>
      <p>保密</p>
    </div>
    <div class="amendpsd">
      <span>修改密码</span>
      <van-icon name="arrow" />
    </div>
    <div class="amendtel">
      <span>更换手机号</span>
      <p>{{username}}</p>
      <van-icon name="arrow" />
    </div>
    <div class="address">
      <span>联系地址</span>
      <p>未知</p>
      <van-icon name="arrow" />
    </div>

    <van-dialog v-model="show" title="修改昵称" :show-cancel-button="true">
      <van-field v-model="username" label="昵称" placeholder="请输入用户昵称" />
    </van-dialog>
  </div>
</template>
 
<script>
import axios from "axios";
// import * as api from '../api/user.js'
export default {
  name: "PersonInfo",

  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    names() {
      this.$dialog.alert("van-dialong");
    }
    //    afterRead(data) {
    //   // 此时可以自行将文件上传至服务器
    //   console.log(data.file.name);
    //   this.name=data.file.name;
    //  axios({
    //       url:'http://api.cat-shop.penkuoer.com/api/v1/common/file_upload',
    //       type:'POST',
    //       parmas:{file:data}
    //   }).then((data)=>{
    //       console.log(data)
    //   })
    // }
  },
  data() {
    return {
      username: "",
      sex: "男",
      show: false,
      true: true,
      name: ""
    };
  },
  mounted() {
    //   console.log(this.$store.state.token)
    //   let token = this.$store.state.token
    let token = localStorage.getItem("token");
    axios({
      url: "http://api.cat-shop.penkuoer.com/api/v1/users/info",
      method: "get",
      headers: { authorization: "Bearer " + token }
    }).then(data => {
      console.log(data.data);
      this.username = data.data.userName;
    });
  }
};
</script>

<style scoped>
.van-nav-bar {
  height: 60px;
  background: #ffdd00;
  line-height: 65px;
}
.van-icon {
  font-size: 20px;
}
.avatar {
  height: 88px;
  border-bottom: solid 0.5px #f3f3f3;
  line-height: 88px;
  padding-left: 10px;
}
.avatar .van-uploader {
  position: absolute;
  right: 25px;
  top: 65px;
  font-size: 80px;
  color: #e6e6e6;
}
.name {
  line-height: 58px;
  margin-left: 10px;
  height: 58px;
  border-bottom: solid 0.5px #f3f3f3;
}
.name p {
  position: absolute;
  right: 30px;
  top: 150px;
}
.sex {
  border-bottom: solid 0.5px #f3f3f3;
  height: 58px;
  margin-left: 10px;
  line-height: 58px;
}
.sex p {
  position: absolute;
  right: 30px;
  top: 210px;
}
.birth {
  border-bottom: solid 0.5px #f3f3f3;
  height: 58px;
  margin-left: 10px;
  line-height: 58px;
}
.birth p {
  position: absolute;
  right: 30px;
  top: 265px;
}
.amendpsd {
  border-bottom: solid 0.5px #f3f3f3;
  height: 58px;
  margin-left: 10px;
  line-height: 58px;
}
.amendpsd .van-icon {
  position: absolute;
  right: 15px;
  top: 345px;
}
.amendtel {
  border-bottom: solid 0.5px #f3f3f3;
  height: 58px;
  margin-left: 10px;
  line-height: 58px;
}
.amendtel .van-icon {
  position: absolute;
  right: 15px;
  top: 400px;
}
.amendtel p {
  position: absolute;
  top: 380px;
  right: 67px;
}
.address {
  border-bottom: solid 0.5px #f3f3f3;
  height: 58px;
  margin-left: 10px;
  line-height: 58px;
}
.address .van-icon {
  position: absolute;
  right: 15px;
  top: 460px;
}
.address p {
  position: absolute;
  top: 440px;
  right: 90px;
}
span {
  display: block;
  width: 89px;
  text-align: right;
}
</style>