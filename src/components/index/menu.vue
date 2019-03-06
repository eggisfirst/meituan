<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.icon"></i>
        {{ item.title }}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetails" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item, index) in curDetails.children">
        <h4 :key="index">{{ item.title }}</h4>
        <span v-for='(el, i) in item.children' :key="el + '_' + i">{{ el }}</span>
      </template>
    </div>
  </div>
</template>

<script>
import {IndexModel} from '@/utils/index'
const indexModel = new IndexModel()
export default {
  data() {
    return {
      menuList: [{
        title: '美食',
        icon: 'food',
        children: [{
          title: '美食',
          children: ['代金券', '自助餐', '甜点饮品', '火锅自助', '小吃快餐']
        }]
      },{
        title: '外卖',
        icon: 'takeout',
        children: [{
          title: '外卖',
          children: ['美团外卖']
        }]
      },{
        title: '酒店',
        icon: 'hotel',
        children: [{
          title: '酒店',
          children: ['三星', '四星', '五星']
        }]
      }],
      curDetails: null,
      timer: ''
    }
  },
  created() {
    this.mytest()
  },
  methods: {
    mytest() {
      indexModel.test().then(res => {
        console.log(res)
      })
    },
    menuEnter(item) {
      this.curDetails = item
    },
    menuLeave() {
      this.timer = setTimeout(() => {
        this.curDetails = null
      }, 200);
    },
    detailEnter() {
      clearTimeout(this.timer)
    },
    detailLeave() {
      this.curDetails = null
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/index/index.scss'
</style>

