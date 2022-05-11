<template>
  <div class="app-wrapper">
    <!-- <el-flu> -->
      <el-header style="padding:0;">
        <header-item></header-item>
      </el-header>
      <div class="main">
        <el-container>
          <el-aside style="width:20%">
            <side-item></side-item>
          </el-aside>
          <el-main style="width:80%">
            <app-main></app-main>
          </el-main>
        </el-container>
      </div>
    <!-- </el-flu> -->
  </div>
</template>
 
<script>
import SideItem from "./SideItem";
import AppMain from "./AppMain";
import HeaderItem from "./HeaderItem";
export default {
  name: "LayOut",
  components: {
    SideItem,
    AppMain,
    HeaderItem,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.main{
  width: 100%;
}
.app-wrapper {
  width: 100%;
}

.el-header {
  color: #333;
  line-height: 80px;
  height: 80px !important;
  width: 100%;
  background: white;
}

.el-container{
  margin: 0 auto;
}

.el-aside {
  color: #333;
  text-align: start;
  height: calc(85vh - 10px);
  min-width: 200px;
  max-width: 250px;
  margin-top: 10px;
}

.el-main {
  padding-left: 30px;
  padding-bottom: 100px;
  color: #333;
  height: calc(85vh - 10px);
  max-width: 890px;
  min-width: 600px;
}
</style>