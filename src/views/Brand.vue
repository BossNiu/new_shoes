<template>
  <div>
    <van-row class="page1">
      <ul>
        <!-- <li v-for="item in list1" >
         <img :src="item.coverImg" alt="" v-tap="{methods:detail,id:item._id}"> 
        
        </li>-->

        <li v-tap="{methods:detail,ID:item.ID}" v-for="(item,i) in arr" :key="i">
          <!-- <img src="../assets/2.jpg" alt="" ><h3>Nike 耐克</h3> -->
          <img :src="item.coverImg" alt />
          <h3>{{item.name}}</h3>
        </li>
        <!-- <li >"><img src="../assets/1.png" alt=""><h3>Jordan 乔丹</h3></li>
    <li><img src="../assets/3.png" alt=""><h3>adidas阿迪</h3></li>
    <li><img src="../assets/4.png" alt=""><h3>New Blance</h3></li>
    <li><img src="../assets/5.png" alt=""><h3>Puma 彪马</h3></li>
    <li><img src="../assets/16.jpg" alt=""><h3>Asics 亚瑟士</h3></li>
    <li><img src="../assets/17.jpg" alt=""><h3>Converse 匡威</h3></li>
    <li><img src="../assets/18.jpg" alt=""><h3>Reebook 锐步</h3></li>
    <li><img src="../assets/19.jpg" alt=""><h3>Onitsuka Tiger</h3></li>
    <li><img src="../assets/20.jpg" alt=""><h3>Under Armour</h3></li>
    <li><img src="../assets/21.jpg" alt=""><h3>VANS 范斯</h3></li>
    <li><img src="../assets/22.jpg" alt=""><h3>其它运动品牌</h3></li>
    <li><img src="../assets/23.jpg" alt=""><h3>AAPE BAPE</h3></li>
    <li><img src="../assets/24.jpg" alt=""><h3>CDG PLAY 川保...</h3></li>
    <li><img src="../assets/25.jpg" alt=""><h3>MCQ 麦昆</h3></li>
    <li><img src="../assets/26.jpg" alt=""><h3>运动品牌服饰</h3></li>
    <li><img src="../assets/27.jpg" alt=""><h3>国潮服饰品牌</h3></li>
    <li><img src="../assets/28.jpg" alt=""><h3>日美潮流品牌</h3></li>
    <li><img src="../assets/29.jpg" alt=""><h3>奢侈品牌</h3></li>
    <li><img src="../assets/14.png" alt=""><h3>Lining/李宁</h3></li>
        <li><img src="../assets/30.jpg" alt=""><h3>明星系列球鞋</h3></li>-->
      </ul>
    </van-row>
  </div>
</template>

<script>
// import * as api from '../api/getProlist.js'
export default {
  name: "Brand",
  data() {
    return {
      list: [],
      list1: [],
      arr: [
        { name: "耐克", coverImg: "static/images/2.jpg", ID: 1 },
        { name: "乔丹", coverImg: "static/images/1.png", ID: 2 },
        { name: "阿迪", coverImg: "static/images/3.png", ID: 3 },
        { name: "New Blance", coverImg: "static/images/4.png", ID: 4 },
        { name: "彪马", coverImg: "static/images/5.png", ID: 5 },
        { name: "亚瑟士", coverImg: "static/images/16.jpg", ID: 6 },
        { name: "匡威", coverImg: "static/images/17.jpg", ID: 7 },
        { name: "锐步", coverImg: "static/images/18.jpg", ID: 8 },
        { name: "Onitsuka Tiger", coverImg: "static/images/19.jpg", ID: 9 },
        { name: "Under Armour", coverImg: "static/images/20.jpg", ID: 10 },
        { name: "范斯", coverImg: "static/images/21.jpg", ID: 11 },
        { name: "其它", coverImg: "static/images/22.jpg", ID: 12 },
        { name: "AAPE BAPE", coverImg: "static/images/23.jpg", ID: 13 },
        { name: "川保", coverImg: "static/images/24.jpg", ID: 14 },
        { name: "麦昆", coverImg: "static/images/25.jpg", ID: 15 },
        { name: "运动品牌", coverImg: "static/images/26.jpg", ID: 16 },
        { name: "国潮", coverImg: "static/images/27.jpg", ID: 17 },
        { name: "日美", coverImg: "static/images/28.jpg", ID: 18 },
        { name: "奢侈", coverImg: "static/images/29.jpg", ID: 19 },
        { name: "李宁", coverImg: "static/images/14.png", ID: 20 },
        { name: "明星", coverImg: "static/images/30.jpg", ID: 21 }
      ]
    };
  },
  methods: {
    detail() {
      this.$router.push("/searchlist");
    }
    //  detail(id){
    //    this.$router.push('/searchlist/'+id.id)
    //  }
  }
  //  mounted () {
  //    api.getProlist({page:1,per:30})
  //    .then((data)=>{
  //     //  if(data.data.products)

  //      console.log(data)
  //      this.list=data.data.products
  //     this.list.forEach((item,i) => {
  //       // console.log(item.name);
  //       let pattern= /耐克/;
  //       if(pattern.test(item.name)){
  //         console.log(item)
  //         this.list1.push(item)
  //       }
  //     });

  //   })

  //  }
};
</script>

<style scoped>
div::-webkit-scrollbar {
  display: none;
}
.van-row {
  position: absolute;
  left: 70px;
  top: 64px;
  overflow: auto;
  width: 295px;
  border-left: 1.5px solid #eee;
  float: left;
  z-index: 1;
}
.van-col {
  text-align: center;
  line-height: 102px;
}
img {
  width: 50px;
  height: 50px;
}
ul {
  width: 295px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
li {
  width: 90px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>