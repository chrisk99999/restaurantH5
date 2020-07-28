<template>
  <div id="app" class="page">
    <!-- 路由显示 -->
    <router-view></router-view>
    <van-tabbar v-model="tabIndex" route v-show="$route.meta.showTabbar">
      <van-tabbar-item replace to="/home">
        <span></span>
        <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
      </van-tabbar-item>
      <van-tabbar-item  replace to="/mesg">
              <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template></van-tabbar-item>
      <van-tabbar-item  replace to="/mine">
              <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0,
      props: {
        fixed: true
      },
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
        active1: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive1: 'https://img.yzcdn.cn/vant/user-inactive.png',
        active2: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive2: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>
<style>
</style>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page {
  background: #3e2b27 url("./assets/images/01/bg.png");
  background-size: cover;
  position: fixed;
  width: 100%;
  height: calc(100% - 1rem);
  overflow-y: scroll;
}
</style>
