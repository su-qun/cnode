<template>
  <div>个人页面</div>
</template>

<script>
import { getUserInfo } from "../../api/api";
export default {
  data() {
    return {
      info: null,
    };
  },
  // watch: {
  // "$route.params.loginname": {
  //   handler(val) {
  //     const res = this.getUserInfo(val);
  //     this.info = res.data;
  //   },
  //   immediate: true,
  // },
  async created() {
    const { loginname } = this.$route.params;
    const res = await getUserInfo(loginname);
    this.info = res.data;
  },
};
</script>

<style>
</style>