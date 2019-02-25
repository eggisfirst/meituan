<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
     <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import searchBar from './searchBar'
import topBar from './topBar'
export default {
  components: {searchBar, topBar}
}
</script>

