<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in bannerList" :key="item._id">
      <img :src="item.url" style="max-width: 100%; height: 100%" alt="pic">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import * as types from '@/store/action-types'
import {mapActions, mapState} from 'vuex'

export default {
  computed: {
    // vuex中数据挂载到实例的data上，辅助函数
    ...mapState(['bannerList'])
  },
  mounted () {
    if (!this.bannerList.length) { // 没有bannerList 就调用方法获取数据
      this[types.SET_BANNER_LIST]()
    }
  },
  methods: {
    ...mapActions([types.SET_BANNER_LIST])
  },
}
</script>

<style scoped>

</style>
