<template>
  <el-row :gutter="10">
    <el-col :md="4" class="hidden-sm-and-down logo">
      <img src="@/assets/logo.svg" alt="" />
    </el-col>
    <el-col :sm="4" :xs="7" class="hidden-md-and-up logo">
      <img src="@/assets/logo2.svg" alt="" />
    </el-col>
    <el-col :md="4" :sm="4" class="hidden-xs-only" :offset="2">
      <el-input placeholder="搜索文档"></el-input>
    </el-col>
    <el-col :md="2" :sm="2" :xs="3" :offset="0">
      <router-link :to="{ name: 'guide' }">指南</router-link>
    </el-col>
    <el-col :md="2" :sm="2" :xs="3">
      <router-link :to="{ name: 'assembly' }">组件</router-link>
    </el-col>
    <el-col :md="2" :sm="2" :xs="3">
      <router-link :to="{ name: 'theme' }">主题</router-link>
    </el-col>
    <el-col :md="2" :sm="2" :xs="3">
      <router-link :to="{ name: 'resources' }">资源</router-link>
    </el-col>
        <!-- <el-col :span="9" :sm="9">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <el-col :md="2" :sm="2" :xs="3" :offset="1">
            <router-link :to="{ name: 'guide' }">指南</router-link>
          </el-col>
        </el-menu-item>
        <el-menu-item index="2">
          <el-col :md="2" :sm="2" :xs="3">
            <router-link :to="{ name: 'assembly' }">组件</router-link>
          </el-col>
        </el-menu-item>
        <el-menu-item index="3">
          <el-col :md="2" :sm="2" :xs="3">
            <router-link :to="{ name: 'theme' }">主题</router-link>
          </el-col>
        </el-menu-item>
        <el-menu-item index="4">
          <el-col :md="2" :sm="2" :xs="3">
            <router-link :to="{ name: 'resources' }">资源</router-link>
          </el-col>
        </el-menu-item>
      </el-menu>
    </el-col> -->

    <el-col :md="2" :sm="3" :xs="0" :offset="1">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          2.15.8
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>1.3.4</el-dropdown-item>
          <el-dropdown-item>1.31.4</el-dropdown-item>
          <el-dropdown-item>2.1.12</el-dropdown-item>
          <el-dropdown-item>2.0.1</el-dropdown-item>
          <el-dropdown-item>2.1.11</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-divider direction="vertical"></el-divider>
      <!-- <el-select v-model="value">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select> -->
    </el-col>
    <!-- <el-col :md="1" :sm="1" :xs="1">
      
    </el-col> -->
    <el-col :md="2" :sm="2" :xs="3" :offset="0">中文</el-col>
  </el-row>
</template>
<script>
export default {
  name: "HeaderItem",
  data() {
    return {
      activeIndex: '2',
      options: [
        {
          value: "选项1",
          label: "1.21.1",
        },
        {
          value: "选项2",
          label: "1.61.1",
        },
        {
          value: "选项3",
          label: "1.71.1",
        },
        {
          value: "选项4",
          label: "2.05.1",
        },
        {
          value: "选项5",
          label: "2.5.1",
        },
      ],
      value: "选项5",
    };
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>
<style scoped>
.el-row{
  border-bottom: 1px solid rgb(202, 202, 202);
  /* width: 1140px; */
  height: 81px;
  overflow: hidden;
  margin: 0 auto!important;
}
.el-col{
    text-align: center;
}
.logo,
.logo2 {
  text-align: start;
  height: 38px;
  margin: 0;
}
a {
  text-decoration: none;
  color: #409eff;
}

.el-input {
  width: 200px;
  margin: auto 0;
}

.el-menu-item {
  text-align: left;
  background-color: white;
}
</style>