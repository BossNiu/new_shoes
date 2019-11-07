<template>
  <div class="body">
    <header>
      <van-icon name="arrow-left" v-tap="{methods:onClickLeft}" />

      <van-search background="#ffdd00" placeholder="搜索" v-model="value" />
    </header>
    <div class="nav">
      <van-row type="flex" justify="space-around">
        <van-col span="2" v-tap="{methods:sell}">销量</van-col>
        <van-col span="2" v-tap="{methods:price}">价格</van-col>
        <van-col span="2" v-tap="{methods:time}">上架时间</van-col>
      </van-row>
    </div>
    <section>
      <ul>
        <li v-for="(item,index) in list1" :key="index" v-tap="{methods:productdetails,id:item._id}">
          <h3>{{item.name}}</h3>
          <img :src="item.coverImg" alt />
        </li>
        <!-- <li v-for="(item,index) in list1" :key='index' @click="locationListInfo(item._id)">
              <h3>{{item.name}}</h3><img :src="item.coverImg" alt="">
        </li>-->
      </ul>
      <!-- <van-col span="12"></van-col>
        <van-col span="12"></van-col>
        <van-col span="12">span: 6</van-col>
        <van-col span="12">span: 6</van-col>
        <van-col span="12">span: 6</van-col>
        <van-col span="12">span: 6</van-col>
        <van-col span="12">span: 6</van-col>
        <van-col span="12">span: 6</van-col>
      <van-col span="12">span: 6</van-col>-->
    </section>
  </div>
</template>
   
<script>
import * as api from "../api/getProlist.js";
export default {
  name: "SearchList",
  data() {
    return {
      value: "",
      activeKey: "",
      list: [],
      list1: []
    };
  },
  methods: {
    // locationListInfo(listId){
    //   // this.$router.push("/productdetails/"+listId);
    //   this.$router.push({
    //     path : '/productdetails',
    //     query : {listId:listId}
    //   })
    // },
    onClickLeft() {
      this.$router.go(-1);
    },
    productdetails(id) {
      // console.log(this.$route)
      this.$router.push("/productdetails/" + id.id);
    },

    sell() {},
    price() {},
    time() {}
  },
  // mounted () {
  //   console.log(this.$route.params.id)

  //   api.getDetail(this.$route.params.id,{}).then((data)=>{
  //     console.log(data.data)
  //       this.list=data.data;

  //   })
  // }
  mounted() {
    //  console.log(this.$route.params.id)
    api.getProlist({ page: 1, per: 500 }).then(data => {
      //  if(data.data.products)

      console.log(data);
      this.list = data.data.products;
      this.list.forEach((item, i) => {
        // console.log(item.name);
        let pattern = /运动/;
        if (pattern.test(item.descriptions)) {
          console.log(item.name);
          this.list1.push(item);
        }
      });
    });
  }
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  height: 65px;
  background: #ffdd00;
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
/* section .van-col {
  margin: 2px;
  border: solid 1px red;
  width: 180px;
  height: 200px;
} */
.nav {
  height: 6vh;
  background: #36373a;
  width: 100vw;
}
.nav .van-col {
  line-height: 6vh;
  color: #fefefe;
}
section {
  overflow: auto;
  height: 84vh;
}
/* .van-row {
  width: 375px;
  flex-wrap: wrap; 
 
} */
ul {
  min-height: 20vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  width: 100px;
  height: 150px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  
}
img {
  width: 80px;
  margin-top: 20px;
}
</style>