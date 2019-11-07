<template>
  <div>
    <van-row class="page1">
      <ul>
        <li v-for="(item,index) in list" :key="index" v-tap="{methods:searchlist,id:item._id}">
          <h1>{{item.price}}</h1>
        </li>
      </ul>
    </van-row>
  </div>
</template>

<script>
import * as api from "../api/getProlist.js";
export default {
  name: "Price",
  data() {
    return {
      list: []
    };
  },
  mounted() {
    api.getProlist({ per: 30 }).then(data => {
      this.list = data.data.products;
    });
  },
  methods: {
    searchlist(id) {
      this.$router.push("/searchlist/" + id.id);
    }
  }
};
</script>

<style scoped>
.van-row::-webkit-scrollbar {
  display: none;
}
.van-row {
  position: absolute;
  left: 70px;
  top: 65px;
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

ul {
  width: 295px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
li {
  font-size: 10px;
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>