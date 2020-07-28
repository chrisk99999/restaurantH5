<template>
  <div>
    <div class="top-bar">
      <div v-for="(item, i) in tabArr" :key="i">
        <div class="top-item wkmu" :class="[tIndex==i?'top-item-act':'']" @click="handleCheckTab(i)">{{item}}</div>
      </div>
      <div class="top-item his_icon" v-if="tabPic"  @click="handleTohistory">
        <img src="../assets/images/03/history.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabArr: {
      type: Array,
      tabArr: []

    },
    tabType: {
      type: Number,
      default: 0
    },
    tabPic: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      tIndex: 0
    }
  },
  methods: {
    handleCheckTab (i) {
      this.tIndex = i
    },
    handleTohistory () {
      console.log(123)
      this.$router.push('history')
    }
  }
}
</script>

<style>
.top-bar {
  position: fixed;
  width: 100%;
  height: 1rem;
  top: 1.8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top-bar .top-item {
  font-size: 0.46rem;
  padding-bottom: 0.1rem;
  color: #999999;
}
.top-bar .top-item-act {
  color: #fbcb2b;
  border-bottom: 2px solid #fbcb2b;
}
.top-bar .his_icon {
  width: 0.6rem;
}
.top-bar .his_icon img {
  width: 100%;
}
</style>
