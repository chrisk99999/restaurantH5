<template>
  <div class="page">
      <dc-top-bar></dc-top-bar>

    <div class="mine">
      <div class="avar">
        <img src="../assets/images/04/hd1.png" alt />
      </div>

      <div class="mine-item">
        <div class="m-tit">姓名</div>
        <div class="m-cont">Frank</div>
      </div>
      <div class="mine-item">
        <div class="m-tit">工号</div>
        <div class="m-cont">NO.100532</div>
      </div>
      <div class="mine-item">
        <div class="m-tit">电话</div>
        <div class="m-cont">18617116991</div>
      </div>
      <div class="mine-item">
        <div class="m-tit">部门</div>
        <div class="m-cont">Commercial Planning</div>
      </div>

      <div class="select-pj">
        <div class="pj-item">营养加餐评价</div>
        <div class="pj-item">套餐及特色餐评价</div>
        <div class="pj-item pj-item-act">餐厅服务评价</div>
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

<style scoped>
.mine {
  position: relative;
  top: 14%;
  width: 7rem;
  height: 10.6rem;
  margin: 0 auto;
  margin-bottom: 0.3rem;
  border-radius: 10px;
  border: 2px solid #663333;
  background-color: #3c2a26;
  padding: 0.4rem;
}
.mine img {
  width: 100%;
}
.mine .avar {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
}
.mine .mine-item {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #4e332c;
  font-size: 0.28rem;
}
.mine .mine-item .m-tit {
  color: #c2bbab;
}
.mine .mine-item .m-cont {
  color: #fb882b;
}
.mine .select-pj {
  margin-top: 5%;
}
.mine .select-pj .pj-item {
  width: 5.46rem;
  height: 1.04rem;
  font-size: 0.4rem;
  font-weight: 500;
  background-color: #ffffff;
  color: #51352d;
  border-radius: 0.7rem;
  border: 2px solid #663333;
  margin: 0 auto 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
}
.mine .select-pj .pj-item-act {
  background-color: #fbcb2b;
  color: #402c28;
  border: none;
}
</style>
