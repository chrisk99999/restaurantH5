<template>
  <div class="page">
        <!-- 月报 -->
      <dc-top-bar :tabArr='tabArr'></dc-top-bar>

    <div class="month stab2">
      <div class="month-item">
        <div class="item-type1">
          <div class="tit1">
            上周最受欢迎菜品
          </div>
          <div class="tit2">
            套餐A
          </div>
        </div>
      </div>
      <div class="month-item month-item2">
        <div class="item-type1">
          <div class="tit1">
            餐厅服务评价
          </div>
          <div class="tit2 pjx">
            <div class="i">
              <img src="../assets/images//03/sxin.png" alt="">
            </div>
            <div class="i">
              <img src="../assets/images//03/sxin.png" alt="">
            </div>
            <div class="i">
              <img src="../assets/images//03/sxin.png" alt="">
            </div>
            <div class="i">
              <img src="../assets/images//03/sxin.png" alt="">
            </div>
            <div class="i">
              <img src="../assets/images//03/kxin.png" alt="">
            </div>
          </div>
        </div>

      </div>
      <div class="month-item month-item3">
        <div class="item-type2">
          <i class="i-lj">
            <img src="../assets/images//03/i-lj.png" alt="">
          </i>
          <div class="t">本月累计厨余垃圾</div>
          <div class="t-num">10吨</div>
        </div>
      </div>
      <div class="month-item month-item4">
        <div class="item-type2">
          <i class="i-fd">
            <img src="../assets/images//03/i-fd.png" alt="">
          </i>
          <div class="t">本月累计未取食物</div>
          <div class="t-num">28份</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tabArr: ['每周菜谱', '营养加餐']
    }
  }
}
</script>

<style scoped lang="less">
.month {
  position: relative;
  top: 14%;
  width: 100%;
  margin-bottom: .3rem ;
}
.month-item {
  width: 6.83rem;
  height: 2.72rem;
  margin: 0 auto;
  margin-bottom: 0.1rem;
  font-size: .44rem;
  padding: 0.3rem;
  display: flex;
  background: url(~@/assets/images/03/m1.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.month-item2 {
  background: url(~@/assets/images/03/m2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.month-item3 {
  background: url(~@/assets/images/03/m3.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.month-item4 {
  background: url(~@/assets/images/03/m4.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.month .month-item .item-type1 {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.month .month-item .item-type1 .tit1,
.month .month-item .item-type1 .tit2 {
  height: 50%;
  font-size: 0.44rem;
  letter-spacing: .03rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.month .month-item .item-type1 .pjx {
  align-items: flex-start;
  padding-top: 0.2rem;
}
.month .month-item .item-type1 .i {
  width: 0.46rem;
  margin-left: 0.1rem;
}
.month .month-item .item-type1 .i img {
  width: 100%;
}
.month .month-item .item-type2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.month .month-item .item-type2 .i-lj {
  width: 0.52rem;
}
.month .month-item .item-type2 .i-lj img {
  width: 100%;
}
.month .month-item .item-type2 .i-fd {
  width: 0.73rem;
}
.month .month-item .item-type2 .i-fd img {
  width: 100%;
}
.month .month-item .item-type2 .t {
  color: #fff;
  font-size: 0.3rem;
  flex-wrap: 500;
  margin: 0 0.3rem;
}
.month .month-item .item-type2 .t-num {
  font-size: 0.56rem;
  font-weight: 500;
  color: #fff;
}
</style>
