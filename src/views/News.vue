<template>
  <div id="news">
    <van-search
      placeholder="搜索"
      v-model="value"
      shape="round"
      @search="onSearch"
      show-action
      background="#fcd731"
    >
      <div @click="onSearch" slot="action">
        <van-icon name="search" size="20px" color="black" class="icon_search" />
      </div>
    </van-search>
    <van-tabs
      v-model="active"
      animated
      swipeable
      background="#333333"
      line-width="20px"
      title-inactive-color="white"
      title-active-color="#fcd731"
    >
      <van-tab title="快讯">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <ul class="kuaixun_li">
            <li v-for="(item,index) in pro" :key="index">
              <img :src="item.coverImg" alt v-tap="{methods:detail,id:item._id}" />
              <div class="right">
                <h4>{{item.name}}</h4>
                <p>
                  <span>发布时间：2017-09-12</span>
                  <van-icon name="browsing-history-o" color="red" size="14px" />
                  <i>490</i>
                  <van-icon name="comment-o" color="blue" size="14px" />
                  <i>3</i>
                </p>
              </div>
            </li>
          </ul>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="评测">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <ul class="ceping_li">
            <li>
              <img src="static/images/pingce.png" alt />
              <h3>X-LAB|adidas Dame 5 实战测评分享</h3>
              <h4>利拉德的签名鞋凭借着较低的售价和不错的实战能力，在近年来很快占据了中端市场份额</h4>
              <p>
                <span>发布时间：2017-09-12</span>
                <van-icon name="browsing-history-o" color="red" size="14px" />
                <i>490</i>
                <van-icon name="comment-o" color="blue" size="14px" />
                <i>3</i>
              </p>
            </li>
          </ul>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="专题">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <ul class="ceping_li">
            <li>
              <img src="static/images/pingce.png" alt />
              <h3>X-LAB|adidas Dame 5 实战测评分享</h3>
              <h4>利拉德的签名鞋凭借着较低的售价和不错的实战能力，在近年来很快占据了中端市场份额</h4>
              <p>
                <span>发布时间：2017-09-12</span>
                <van-icon name="browsing-history-o" color="red" size="14px" />
                <i>490</i>
                <van-icon name="comment-o" color="blue" size="14px" />
                <i>3</i>
              </p>
            </li>
          </ul>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import * as api from "../api/getProlist";
export default {
  name: "News",
  data() {
    return {
      value: "",
      active: 0,
      count: 0,
      isLoading: false,
      pro: []
    };
  },
  methods: {
    detail(id) {
      this.$router.push("/searchlist/" + id.id);
    },
    onSearch() {},
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  },
  mounted() {
    api.getProlist({ per: 40 }).then(data => {
      this.pro = data.data.products;
    });
  }
};
</script>

<style lang="" scoped>
* {
  margin: 0;
  padding: 0;
}
#news .van-search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  margin-left: 0;
}

#news .van-tabs {
  margin-top: 60px;
}

#news .icon_search {
  margin-top: 8px;
}
#news .van-tabs__line {
  background-color: #fcd731;
  z-index: 0;
}
#news .van-tab {
  font-size: 16px;
}
#news .van-tab--active {
  font-size: 18px;
}
#news .van-tabs__wrap {
  position: fixed;
  top: 58px;
  left: 0;
  width: 100%;
  z-index: 1;
}
#news .van-pull-refresh__track {
  margin-top: 42px;
  margin-bottom: 100px;
}
#news .kuaixun_li li img {
  display: block;
  float: left;
  width: 140px;
  height: 88px;
  margin-top: 4px;
}
#news .kuaixun_li li {
  border-bottom: solid 3px #e0dddd;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
}
#news .right {
  float: left;
}
#news .right h4 {
  font-size: 14px;
  width: 210px;
  margin-left: 8px;
  margin-top: 18px;
  margin-bottom: 10px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#news .right p span {
  margin-left: 8px;
  font-size: 10px;
  margin-right: 10px;
  display: inline;
  vertical-align: middle;
}
#news .right p i {
  font-style: normal;
  display: inline;
  vertical-align: middle;
}
#news .right p i:nth-of-type(2) {
  margin-right: 6px;
}
.ceping_li li {
  width: 100%;
  height: 300px;
  border-bottom: solid 3px #f1eded;
}
#news .ceping_li img {
  width: 100%;
}
.ceping_li h3 {
  font-weight: normal;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 12px;
}
.ceping_li h4 {
  width: 356px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: normal;
  color: #666666;
  margin-top: 12px;
}
.ceping_li p {
  margin-left: 10px;
  margin-top: 10px;
  color: #666666;
}
.ceping_li p span {
  margin-right: 140px;
  display: inline;
  vertical-align: middle;
}
.ceping_li p i {
  display: inline;
  vertical-align: middle;
  font-style: normal;
}
.ceping_li p i:nth-of-type(2) {
  margin-right: 10px;
  font-style: normal;
}
</style>