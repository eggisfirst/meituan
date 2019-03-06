<template>
  <div class="slide">
    <el-carousel height="240px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <router-link :to='item.url'>
          <img :src="item.img" alt="">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [{
        url: '#xx',
        img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
      },{
        url: '#xx',
        img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
      },{
        url: '#xx',
        img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
      }]
    }
  }
}
</script>
