<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <button @click="add">添加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import MyHeader from '@/components/header/index.vue'
export default {
  components: { MyHeader },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['list']),
  //  ...mapGetters(['newList'])
    // ...mapGetters({
    //   list: 'newList'
    // })
  },
  methods: {
    // ...mapMutations(['changList']),
    ...mapActions(['changList']),
    add() {
      this.changList({name: 'xiaowei', number: 1})
      // this.$store.dispatch('changList', {name: 'xiaowei', number: 1})
      // this.$store.commit('changList', {name: 'xiaowei', number: 1})
      console.log(this.list)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/public/layout.scss'
</style>
