<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav='iStyle'/>
      </el-col>
       <el-col :span="24">
        <container :nav='recommend'/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
export default {
  components: { MMenu, MLife, Container },
  data() {
    return {
      iStyle: {
        class: 'istyle',
        title: '有格调',
        list: [{
        tab: 'all',
        text: '全部'
      },{
        tab: 'food',
        text: '约会聚餐'
      },{
        tab: 'spa',
        text: '全丽人SPA部'
      },{
        tab: 'movie',
        text: '电影演出'
      },{
        tab: 'travel',
        text: '品质出游'
      }]
      },
      recommend: {
        class: 'youhui',
        title: '很优惠',
        list: [{
          tab: 'all',
          text: '全部'
        },{
          tab: 'youhui',
          text: '优惠'
        },{
          tab: 'xiuxian',
          text: '休闲'
        }]
      }
    }
  }
}
</script>

<style lang="scss">
 @import "@/assets/css/index/index.scss";
</style>

