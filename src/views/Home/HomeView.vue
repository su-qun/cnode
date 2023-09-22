<template>
  <div>
    <header>
      <div class="inner">
        <router-link to="/">
          <img
            src="//static2.cnodejs.org/public/images/cnodejs_light.svg"
            alt=""
          />
        </router-link>
         <span>{{userInfo.username}}</span>
         <el-button type='info' @click="logout">退出</el-button>
      </div>
    </header>
    <main>
          <router-view></router-view>
    </main>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    logout() {
      window.localStorage.clear()
      this.$router.push('/login')
    }
  },
};
</script>

<style scoped lang='less'>
header {
  background-color: #444;
  .inner {
    width: 800px;
    margin: 0 auto;
    line-height: 50px;
    height: 50px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    a {
      display: flex;
      img {
        width: 120px;
      }
    }
  }
}
main {
  width: 850px;
  margin: 0 auto;
 
}
</style>