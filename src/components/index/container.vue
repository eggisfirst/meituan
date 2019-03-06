<template>
  <div class="m-istyle" @mouseover="over" >
    <dl :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind === item.tab}"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card class="el-card" :body-style="{padding: '0px'}" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{ item.title }}</div>
            <div class="sub-title" :title="item.sub_title">{{ item.sub_title }}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.current_price }}</span>
              </span>
              <span class="old-price">门市价¥{{ item.price_info.old_price }}</span>
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["nav"],
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "//p0.meituan.net/msmerchant/b74fae61bf20010bc41a9e9a5d016894141022.jpg@736w_416h_1e_1c",
          title: "哈根达斯（国瑞店)",
          sub_title: "玫瑰女王蛋糕冰淇淋1个，约600克，圆",
          price_info: {
            current_price: 228,
            old_price: 268
          },
          address: "崇文门"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@736w_416h_1e_1c",
          title: "北京饭店阳光咖啡厅",
          sub_title: "特价自助晚餐",
          price_info: {
            current_price: 238,
            old_price: 298
          },
          address: "王府井/东单"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/ed959dc1ed655b6d71df3bbbf3c7e69f1313046.jpg@736w_416h_1e_1c",
          title: "羲和小馆(王府中环店)",
          sub_title: "张氏狮子头1位，提供免费WiFi",
          price_info: {
            current_price: 9.9,
            old_price: 25
          },
          address: "王府井/东单"
        }
      ]
    };
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>

