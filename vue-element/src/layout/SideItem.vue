<template>
  <div class="aside">
    <el-menu default-active="1" class="el-menu-vertical-demo" roter="true" >
      <el-menu-item-group>
        <template slot="title"> </template>
        <el-menu-item>
          <router-link :to="{ name: 'journal' }">
            <h3>更新日志</h3>
          </router-link>
        </el-menu-item>
        <el-menu-item >
            <a href="https://elemefe.github.io/element-react/#/zh-CN/quick-start" target="_blank">
            <h3>Element React</h3> </a>
        </el-menu-item>
        <el-menu-item>
            <a href="https://element-angular.faas.ele.me" target="_blank">
            <h3>Element Angular</h3></a>
        </el-menu-item>
         <el-menu-item>
            <h3>开发指南</h3>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: 'install' }"><p>安装</p></router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: 'started' }"><p>快速上手</p></router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: 'international' }"><p>国际化</p></router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: 'theme' }"><p>自定义主题</p></router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: 'animation' }"><p>内置过度动画</p></router-link>
        </el-menu-item>
        <el-menu-item>
          <h3>组件</h3>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">Form</template>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Radio 单选框</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Checkbox 多选框</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Input 输入框</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">InputNumber 计数器</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Select 选择器</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Cascader 级联选择器</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Switch 开关</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Silder 滑块</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">TimerPicker 时间选择器</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">DataPicker 日期时间选择器</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Upload 上传</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Rate 评分</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">ColorPicker 颜色选择器</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Transfer 穿梭框</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Form 表单</router-link>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">Data</template>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Table 表格</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Tag 标签</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Progress 进度条</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Tree 树形控件</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Pagination 分页</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Badge 标记</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Avatar 头像</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Skeleton 骨架屏</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Empty 空状态</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Descriptions 描述列表</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Result 结果</router-link>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">Notice</template>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Alert 警告</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Loading 加载</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Message 消息提示</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">MessageBOX 弹框</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Noticficaion 通知</router-link>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">Navigation</template>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">NavMenu 导航菜单</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Tabs 标签页</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Breadcrumb 面包屑</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">PageHeader 页头</router-link>
        </el-menu-item><el-menu-item>
          <router-link :to="{ name: '' }">Dropdown 下拉菜单</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Steps 步骤条</router-link>
        </el-menu-item>
        <el-menu-item>
          <template slot="title">Other</template>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Dialog 对话框</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Tooltip 文字提示</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Popover 弹出框</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Popconfirm 气泡确认框</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Card 卡片</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Carousel 走马灯</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Collapse 折叠面板</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">TimerLine 时间线</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Divider 分割线</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Calender 日历</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Image 图片</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Backtop 返回顶部</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">InfiniteScroll 无限滚动</router-link>
        </el-menu-item>
        <el-menu-item>
          <router-link :to="{ name: '' }">Drawer 抽屉</router-link>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "SideItem",
};
</script>
<style scoped>
h3 {
  height: 36px;
}
ul > li,
li > span,
.el-item {
  padding: 0!important;
  height: 40px;
  line-height: 40px;
}
a,a p,h3{
  margin: 0;
  padding: 0;
  height: 40px;
  width: 241px;
  color: rgb(97, 97, 97);
  text-decoration: none;
}
</style>
