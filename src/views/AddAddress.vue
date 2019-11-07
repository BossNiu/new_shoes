<template>
  <div>
    <van-nav-bar title="地址信息" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import areaList from "../../config/area.js";
import axios from "axios";
export default {
  name: "Address",
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave(val) {
      let address = `${val.county}${val.addressDetail}`;
      // console.log(val.province + val.city + '')
      let addid = val._id;
      let regions = val.province + val.city + "";
      let receiver = val.name;
      console.log(val.name);
      let mobile = val.tel;
      console.log(val);
      let token = localStorage.getItem("token");
      //  let token = this.$store.state.token
      console.log(token);
      axios({
        method: "post",
        url: "http://api.cat-shop.penkuoer.com/api/v1/addresses",

        headers: { authorization: "Bearer " + token },
        data: {
          receiver: receiver,
          mobile: mobile,
          regions: regions,
          address: address, //   详细地址(航海路1290号)
          idDefault: "true" //  是否默认(true/false)
        }
      }).then(data => {
        console.log("添加失败");
        console.log(data.data.info._id);
        let id = data.data.info._id;
        this.$router.push("/address/" + id);
      });
    },
    onDelete() {
      this.$toast("delete");
      //   this.$router.push("/my");
    }
    // onChangeDetail(val) {
    //   if (val) {
    //     this.searchResult = [
    //       {
    //         name: this.name,
    //         address: this.address
    //       }
    //     ];
    //   } else {
    //     this.searchResult = [];
    //   }
    //   console.log(this.searchResult)
    // }
  }
};
</script>

<style scoped>
</style>
