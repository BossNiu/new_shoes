<template>
  <div id="mall">
    <van-sticky>
      <header>
        <van-search placeholder="搜索" v-model="value" background="#fcd731" />
        <span class="fenlei">
          <van-icon name="apps-o" color="black" size="18px" v-tap="{methods:sort}" />
          <p>分类</p>
        </span>
      </header>
    </van-sticky>

    <van-tabs
      v-model="active"
      swipeable
      animated
      background="#fcd731"
      line-width="26px"
      title-inactive-color="black"
      sticky
    >
      <van-tab title="全部">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="lunbo"></div>
          <van-swipe :autoplay="3000" indicator-color="yellow">
            <van-swipe-item>
              <img src="static/images/qiao1.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="static/images/qiao2.jpg" alt />
            </van-swipe-item>
            <van-swipe-item>
              <img src="static/images/qiao3.jpg" alt />
            </van-swipe-item>
          </van-swipe>
          <div class="logo">
            <van-grid :border="false" :column-num="5">
              <van-grid-item>
                <img src="static/images/1.png" />
                <p>Jordan</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/2.jpg" alt />
                <p>Nike耐克</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/3.png" />
                <p>adidas</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/4.png" />
                <p>New-B</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/5.png" />
                <p>Puma</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/6.png" />
                <p>Air J</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/7.png" />
                <p>Yeezy</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/8.png" />
                <p>喷泡系列</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/9.png" />
                <p>LEBRON</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/10.png" />
                <p>PG</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/11.png" />
                <p>KYRE</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/12.png" />
                <p>皮蓬系列</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/13.png" />
                <p>LiNing</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/14.png" />
                <p>Reebok</p>
              </van-grid-item>
              <van-grid-item>
                <img src="static/images/15.png" />
                <p>全部</p>
              </van-grid-item>
            </van-grid>
          </div>
          <div class="miaosha">
            <div class="miaosha1">
              <img src="static/images/miaosha.png" alt />
              <van-count-down :time="time">
                <template v-slot="timeData">
                  <span class="item">{{ timeData.hours }}</span>
                  <i>:</i>
                  <span class="item">{{ timeData.minutes }}</span>
                  <i>:</i>
                  <span class="item">{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
            <div class="miaosha2">
              <h3>2折特价，专柜原价969元，现有优惠</h3>
              <p>
                <span>￥199</span>
                <i>￥969</i>
              </p>
            </div>
            <div class="miaosha3">
              <img src="static/images/xie.png" alt />
            </div>
          </div>
          <div class="zhuanqu">
            <div class="zhuan1">
              <img src="static/images/zhuanqu1.jpg" alt />
              <div class="qu1">特价专区</div>
            </div>
            <div class="zhuan2">
              <img src="static/images/zhuanqu2.jpg" alt />
              <div class="qu2">原价购</div>
            </div>
          </div>

          <div class="list_title">
            <strong>综合排序</strong>
            <span>最新</span>
            <i>销量</i>
          </div>

          <div class="list_con">
            <dl v-for="(item,index) in pro" :key="index">
              <dt>
                <img :src="item.coverImg" alt v-tap="{methods:detail,id:item._id}" />
              </dt>
              <dd>
                <h3>{{item.descriptions}}</h3>
                <p>￥{{item.price}}</p>
              </dd>
            </dl>
          </div>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="球鞋">
        <div class="list_title list_title_fixed">
          <strong>综合排序</strong>
          <span>最新</span>
          <i>销量</i>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="list_con">
            <dl v-for="(item,index) in pro1" :key="index">
              <dt>
                <img :src="item.coverImg" alt v-tap="{methods:detail,id:item._id}" />
              </dt>
              <dd>
                <h3>{{item.descriptions}}</h3>
                <p>￥{{item.price}}</p>
              </dd>
            </dl>
          </div>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="服饰">
        <div class="list_title list_title_fixed">
          <strong>综合排序</strong>
          <span>最新</span>
          <i>销量</i>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="list_con">
            <dl v-for="(item,index) in pro2" :key="index">
              <dt>
                <img :src="item.coverImg" alt v-tap="{methods:detail,id:item._id}" />
              </dt>
              <dd>
                <h3>{{item.descriptions}}</h3>
                <p>￥{{item.price}}</p>
              </dd>
            </dl>
          </div>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="配饰">
        <div class="list_title list_title_fixed">
          <strong>综合排序</strong>
          <span>最新</span>
          <i>销量</i>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="list_con">
            <dl v-for="(item,index) in pro3" :key="index">
              <dt>
                <img :src="item.coverImg" alt v-tap="{methods:detail,id:item._id}" />
              </dt>
              <dd>
                <h3>{{item.descriptions}}</h3>
                <p>￥{{item.price}}</p>
              </dd>
            </dl>
          </div>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import * as api from "../api/getProlist";

export default {
  name: "Mall",
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    sort() {
      this.$router.push("/sort");
    },
    detail(id) {
      this.$router.push("/productdetails/" + id.id);
    }
  },
  data() {
    return {
      value: "",
      active: "",
      count: 0,
      isLoading: false,
      time: 60 * 60 * 60 * 1000,
      pro: [],
      pro1: [],
      pro2: [],
      pro3: []
    };
  },
  mounted() {
    //全部
    api.getProlist({}).then(data => {
      this.pro = data.data.products;
    }),
      //球鞋
      api.getProlist({ per: 20 }).then(data => {
        this.pro1 = data.data.products;
      }),
      //服饰
      api.getProlist({ per: 20 }).then(data => {
        this.pro2 = data.data.products;
      }),
      //配饰
      api.getProlist({ per: 20 }).then(data => {
        this.pro3 = data.data.products;
      });
  }
};
</script>

<style lang="" scoped>
* {
  margin: 0;
  padding: 0;
}
#mall .van-search {
  width: 90%;
  margin-left: 6px;
  border-radius: 5px;
}
#mall .fenlei {
  position: absolute;
  top: 12px;
  left: 92%;
}
#mall .fenlei p {
  margin-top: -4px;
  font-size: 10px;
  margin-left: -2px;
}
#mall header {
  background-color: #fcd731;
}
#mall .van-tabs {
  margin-top: -5px;
}
#mall .van-tab--active {
  font-weight: bold;
  font-size: 16px;
}
#mall .van-tabs__line {
  background-color: black;
}
#mall .quanbu {
  width: 100px;
  height: 100px;
  background: red;
}
#mall .van-tabs .van-sticky--fixed {
  top: 53px;
}
.lunbo {
  width: 100%;
  height: 140px;
  background: #fcd731;
  border-radius: 0 0 50% 50%;
  overflow: hidden;
}
.van-swipe {
  width: 90%;
  height: 150px;
  position: relative;
  top: -140px;
  left: 18px;
  border-radius: 8px;
}
.van-swipe-item {
  background: white;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
.logo {
  width: 100%;
  height: 240px;
  border-bottom: solid 1px #eeeeee;
  margin-top: -120px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.van-grid-item img {
  width: 36px;
  height: 36px;
}
.miaosha {
  width: 100%;
  height: 100px;
  border-bottom: #eeeeee solid 2px;
  margin-top: 40px;
  padding-left: 10px;
  box-sizing: border-box;
}
.miaosha1 img {
  width: 100px;
  margin-top: 10px;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #333333;
  border-radius: 4px;
}
.van-count-down i {
  font-style: normal;
  font-weight: bold;
}
.van-count-down {
  margin-top: 10px;
  margin-left: 2px;
}
.miaosha1 {
  float: left;
}
.miaosha2 {
  float: left;
  margin-left: 10px;
}
.miaosha2 h3 {
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: normal;
  margin-top: 12px;
}
.miaosha2 p {
  margin-top: 20px;
}
.miaosha2 p span {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.miaosha2 p i {
  font-style: normal;
  color: #999999;
  font-size: 10px;
  margin-left: 4px;
  text-decoration: line-through;
}
.miaosha3 {
  float: left;
}
.miaosha3 img {
  width: 100px;
  margin-top: 20px;
}
.zhuanqu {
  width: 100%;
  height: 120px;
  border-bottom: solid 3px #d3cfcf;
  padding: 17px;
  box-sizing: border-box;
}
.zhuanqu img {
  width: 150px;
  height: 90px;
  border-radius: 10px;
}
.zhuan1 {
  float: left;
  width: 160px;
  height: 90px;
  border-radius: 8px;
  position: relative;
}
.zhuan2 {
  float: left;
  margin-left: 25px;
  width: 150px;
  height: 90px;
  position: relative;
}
.qu1,
.qu2 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  line-height: 90px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fcd731;
  font-size: 18px;
  font-weight: bold;
}
.list_title {
  width: 100%;
  height: 40px;
  border-bottom: solid 2px rgb(241, 233, 233);
}
.list_title {
  font-size: 14px;
  color: #666666;
  padding-top: 10px;
  box-sizing: border-box;
}
.list_title span {
  margin-left: 210px;
}
.list_title i {
  margin-left: 10px;
  font-style: normal;
}
.list_title strong {
  color: black;
  margin-left: 14px;
}
.list_con dl {
  width: 49.4%;
  height: 180px;
  background: white;
  float: left;
  margin-bottom: 5px;
}
.list_con {
  width: 100%;
  background: #c9c3c3;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  margin-bottom: 100px;
}
.list_con img {
  width: 150px;
  height: 100px;
  margin-top: 12px;
  margin-left: 18px;
}
.list_con dd {
  padding: 8px;
  box-sizing: border-box;
  padding-left: 14px;
  padding-right: 14px;
}
.list_con dd h3 {
  height: 30px;
  font-size: 14px;
  color: black;
  font-weight: normal;
  line-height: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list_con dd p {
  color: red;
}
</style>