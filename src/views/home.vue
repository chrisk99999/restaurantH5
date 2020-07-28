<template>
  <div class="page">
      <dc-top-bar></dc-top-bar>
          <!-- 登录成功 -->
      <div class="tip success">
         <div class="logo">
            <img src="../assets/images/01/logo.png" />
          </div>
        <img src="../assets/images/02/hi.png" alt="" class="att">
        <p class="text2">你好</p>
        <p class="text2">欢迎登陆费列罗点餐系统</p>
        <p class="text3">Hello</p>
        <p class="text3">Welcorme to Fr ordering aystem</p>

        <div class="prv  to-tab1">
          <img src="../assets/images/02/next.png" alt="" class='tgImg'>
        </div>
      </div>
    <!-- 选周模块 -->

    <div class="select-week">
      <div class="week-item">06-11 第1周</div>
      <div class="week-item">06-18 第2周</div>
      <div class="week-item week-item-act">06-25 第3周</div>

    </div>
      <div class="next to-times">
        <img src="../assets/images/02/next.png" alt class="tgImg" />
      </div>
    <!-- 选时段1 -->
    <div class="select-times">
      <div class="times-item">早餐</div>
      <div class="times-item">中餐</div>
      <div class="times-item">晚餐</div>
      <div class="times-item times-item-act">夜宵</div>
      <div class="next to-fodmuen">
        <img src="../assets/images/02/next.png" alt class="tgImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'home',
      props: {
        active: 0,
        fixed: true,
        icon: {
          active: 'https://img.yzcdn.cn/vant/user-active.png',
          inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
        }
      }
    }
  },
  methods: {},
  computed: {},
  components: {}
}
</script>

<style scoped lang="less">
img{
  width: 100%;
}

.select-week {
  display: block;
  position: relative;
  top: 24vh;
  height: 8rem;
  overflow-y: scroll;
}
.select-week .week-item {
  width: 5.6rem;
  height: 1.4rem;
  font-size: 0.46rem;
  font-weight: 500;
  background-color: #3c2a26;
  color: #b76629;
  border-radius: 0.7rem;
  border: 2px solid #663333;
  margin: 0 auto 0.66rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-week .week-item-act {
  background-color: #fbcb2b;
  color: #402c28;
  border: none;
}
.select-week .next {
  position: absolute;
  left: 50%;
  margin-left: -0.7rem;
  bottom: 0;
}
.select-times {
  display: none;
  position: relative;
  top: 18vh;
}
.select-times .times-item {
  width: 5.7rem;
  height: 1rem;
  font-size: 0.4rem;
  font-weight: 600;
  background-color: #3c2a26;
  color: #b76629;
  border-radius: 0.7rem;
  border: 2px solid #663333;
  margin: 0 auto 0.64rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-times .times-item-act {
  background-color: #fbcb2b;
  color: #402c28;
  border: none;
}
.select-times .next {
  position: absolute;
  bottom: -2.9rem;
  left: 50%;
  margin-left: -0.7rem;
}
.next {
  width: 1.1rem;
  height: 1.1rem;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  z-index: 1;
  // margin-top: 2rem;
  top: 1.9rem;
  img{
      width: 100%;
  }
}

 .logo {
  width: 4.17rem;
  position: absolute;
  top: -13vh;
  margin: 0 auto;
}

.tip {
  /* display: none; */
  width: 6rem;
  height: 8.26rem;
  border-radius: .2rem;
  /* height: 9.9rem; */
  background-color: #3c2a26;
  position: absolute;
  top:20vh;
  left: 0.8rem;
  padding: 5.5vh 0.8rem;
  text-align: center;
  color: #52352d;
  z-index: 9;
  border: 2px solid #663333;
}

 .tip .att {
  width: 1.67rem;
  /* margin-bottom: 2vh; */
  margin-bottom: 1rem;
}

 .tip .text1 {
  font-size: 0.4rem;
  text-align: center;
}

 .tip .text2 {
  font-size: .28rem;
  text-align: center;
  margin-bottom: 2vh;
  color: #fff;
  /* margin-bottom: 0.3rem; */

}

 .tip .text2:nth-child(1) {
  margin-bottom: 0.67;
}

 .tip .text3 {
  font-size: 0.24rem;
  text-align: center;
  margin-bottom: 2vh;
  color: #fff;
  /* margin-bottom: 0.3rem; */

}
.prv{
  width: 1.1rem;
  height: 1.1rem;
  margin: 0 auto;
  margin-top: 1rem;
}
.prv img{
  width: 100%;
}
</style>
