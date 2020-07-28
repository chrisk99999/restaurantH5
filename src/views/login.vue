<template>
  <div>
    <!-- 加载 -->
    <div>
      <div class="load page" v-if="jindu !== 100">
        <div class="center">
          <div class="logo">
            <img src="../assets/images/01/logo.png" />
          </div>
          <div class="app-name">
            <!-- 费列罗电子签到系统 -->
            <img src="../assets/images/01/logo-zh.png" alt class="app-name-pic" />
          </div>
          <div class="app-local">
            <!-- Ferrero Office Check-in System -->
          </div>
          <div class="login-ani">
            <div class="load-bar">
              <div class="act-bar" :style="{width:jindu+'%'}"></div>
            </div>
            <div id="load-text">{{jindu}}%</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 填写表单 -->
    <!-- 填写页 -->
    <div class="fill page">
      <div class="center">
        <div class="logo">
          <img src="../assets/images/01/logo1.png" />
        </div>
        <div class="app-name">
          <!-- 费列罗电子签到系统 -->
          <img src="../assets/images/01/logo-zh.png" alt class="app-name-pic" />
        </div>

        <div class="fill-from">
          <div class="fill-name">
            <div class="opt">
              <label for="name">
                <div class="title">
                  <img src="../assets/images/02/ipt_name.png" alt />
                </div>
              </label>
            </div>
            <input type="text" id="name" />
          </div>
          <div class="fill-gender">
            <div class="opt">
              <label for="jobnum">
                <div class="title">
                  <img src="../assets/images/02/ipt_jobnum.png" alt />
                </div>
              </label>
            </div>

            <input type="text" id="jobnum" />
          </div>
          <div class="fill-tel">
            <div class="opt">
              <label for="tel">
                <div class="title">
                  <img src="../assets/images/02/ipt_phone.png" alt />
                </div>
              </label>
            </div>
            <input type="text" id="tel" />
          </div>
          <div class="fill-dep">
            <div class="opt">
              <label for="dep">
                <div class="title">
                  <img src="../assets/images/02/ipt_dep.png" alt />
                </div>
              </label>
            </div>
            <select id="dep">
              <option selected="selected">Commercial Planning</option>
              <option selected="selected">Contract Manufacture</option>
              <option selected="selected">Country Quality</option>
              <option selected="selected">CSU</option>
              <option selected="selected">E-Commerce</option>
              <option selected="selected">Finance</option>
              <option selected="selected">General Management</option>
              <option selected="selected">HR</option>
              <option selected="selected">IA & PR</option>
              <option selected="selected">IT</option>
              <option selected="selected">Legal</option>
              <option selected="selected">Marketing Kinder</option>
              <option selected="selected">Marketing Praline</option>
              <option selected="selected">Media</option>
              <option selected="selected">MPG</option>
              <option selected="selected">Packaging</option>
              <option selected="selected">Packaging Quality</option>
              <option selected="selected">Procurement SC&Pack</option>
              <option selected="selected">Sales</option>
              <option selected="selected">Sales Training</option>
              <option selected="selected">Supply Chain</option>
              <option selected="selected">Workplace Mgmt & GP</option>
            </select>
          </div>
        </div>
      </div>
      <div class="next" @click="handleToHome">
        <img src="../assets/images/02/next.png" alt class="tgImg" />
      </div>
    </div>

    <!-- 首次登录提示弹窗 -->
    <div class="tip frist">
      <img src="../assets/images/02/att.png" alt class="att" />
      <p class="text2">账户未激活，首次登录</p>
      <p class="text2">需厨房核准后激活账户</p>
      <p class="text3">Account not activated, frst loginActivate</p>
      <p class="text3">account after kitchen approval</p>

      <div class="prv back-login">
        <img src="../assets/images/02/prv.png" alt class="tgImg" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      jindu: 0,
      clearInt: null // 定时器名
    }
  },
  methods: {
    progress () {
      const _this = this
      _this.clearInt = setInterval(function () {
        _this.jindu++
        if (_this.jindu === 100) {
          console.log(123)
          clearInterval(_this.clearInt)
        }
      }, 16)
    },
    handleToHome () {
      console.log(this.$router)
      this.$router.push('/home')
    }
  },
  created () {
    this.progress()
    console.log(this.$route.name, '123123')
  },
  mounted () {},
  components: {}
}
</script>

<style scoped>
.center {
  margin: 0 auto;
  padding-top: 23vh;
}

.load {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99;
}

.load .logo {
  width: 4.17rem;
  padding-bottom: 16vh;
  margin: 0 auto;
}

.logo img {
  width: 100%;
}

.app-name {
  font-size: 0.6rem;
  height: 4vh;
  line-height: 4vh;

  color: #fff;
  text-align: center;
}

.app-name-pic {
  width: 3.14rem;
  margin: 0 auto;
}

.load .app-local {
  font-size: 0.36rem;
  color: #fff;
  text-align: center;
  padding-bottom: 14vh;
  line-height: 3;
}

.load .login-ani {
  text-align: center;
  width: 2.2rem;
  margin: 0 auto;
}

.load .login-ani .load-bar {
  width: 100%;
  height: 0.25rem;
  background-color: #52352d;
  padding: 0.01rem;
  border-radius: 0.12rem;
  margin-bottom: 0.2rem;
}

.load .login-ani .load-bar .act-bar {
  width: 0;
  height: 100%;
  border-radius: 0.12rem;
  background-color: #fbcb2b;
}

.load #load-text {
  color: #e1b605;
  font-size: 0.3rem;
}
.fill {
  /* display: none; */
  position: fixed;
  width: 100%;
  height: 100%;
}

.fill .center {
  padding-top: 20%;
}

.fill .logo {
  width: 3.17rem;
  height: 1vh;
  /* height: 0.51rem; */
  padding-bottom: 10vh;
  margin: 0 auto;
}

.fill .app-name {
  height: 12vh;
}

.fill .fill-from {
  width: 5.6rem;
  margin: 0 auto;
}

.fill .fill-from .fill-name,
.fill .fill-from .fill-gender,
.fill .fill-from .fill-tel,
.fill .fill-from .fill-dep,
.fill .fill-from .fill-tem {
  height: 1rem;
  background-color: #3c2a26;
  display: flex;
  padding: 1.3vh 0 0.2rem 0.5rem;
  margin-bottom: 2.3vh;
  border: 2px solid #663333;
  border-radius: 0.1rem;
  overflow: hidden;
  position: relative;
  min-height: 34px;
}

.fill .fill-from .fill-tem {
  background-color: #52352d;
  margin-bottom: 7vh;
  /* margin-bottom: 1rem; */
}

.fill .fill-from .opt {
  width: 2rem;
  height: 100%;
  display: flex;
}

.fill .fill-from .opt .title {
  /* font-size: 0.3rem;
  color: #9c9c9c;
  letter-spacing: 0.04rem; */
  width: 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
}

.fill .fill-from .opt .title img {
  width: 100%;
}

.fill .fill-from .opt .icon {
  font-size: 0.66rem;
  color: #e97231;
  line-height: 1.5;
  margin-right: 0.15rem;
}

.fill .fill-from #name,
.fill .fill-from #tel,
#jobnum {
  text-align: right;
  font-size: 0.28rem;
  /* width: 2.9rem; */
  padding-right: 0.4rem;
  height: 100%;
}

.fill .fill-from select,
.fill .fill-from input {
  width: 100%;
  font-size: 0.3rem;
  color: #fff !important;
  background-color: #3c2a26;
}

/* input#name {
  margin-left: 2.3rem;
} */

input#tel {
  margin-left: 2rem;
}

/* select#gender {
  margin-left: 3rem;
} */

select#dep {
  font-size: 0.3rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: right 2px center;
}

.fill .fill-from #gender option,
.fill .fill-from #dep option {
  text-align: right;
}

.fill .fill-from .wd {
  width: 5rem;
  color: #e97538;
  font-size: 0.4rem;
  display: flex;
  padding-right: 0.4rem;
  justify-content: space-around;
  align-items: center;
}

.fill .fill-from #tem {
  width: 4.4rem;
  color: #e97231;
  font-size: 0.36rem;
  text-align: right;
  background-color: transparent;
}

.next,
.prv,
.x,
.v {
  width: 1.1rem;
  height: 1.1rem;
  margin: 0 auto;
  z-index: 1;
  margin-top: 0.5rem;
}
.fill .next {
  top: 1vh;
  position: relative;
}
.fill .prv {
  position: absolute;
  bottom: -3vh;
  left: 50%;
  margin-left: -0.7rem;
}
.next img,
.prv img,
.x img,
.v img {
  width: 100%;
}

.tip {
  /* display: none; */
  width: 6rem;
  height: 8.26rem;
  /* height: 9.9rem; */
  background-color: #3c2a26;
  position: absolute;
  top: 20vh;
  left: 0.8rem;
  padding: 5.5vh 0.8rem;
  text-align: center;
  color: #52352d;
  z-index: 9;
  border: 2px solid #663333;
}

 .tip .att {
  width: 1.82rem;
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
.prv.back-login{
  margin-top: 1rem;
}
</style>
