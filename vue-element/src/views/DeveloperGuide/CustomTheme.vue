<template>
  <div class="container">
    <div class="block">
      <h2>自定义主题</h2>
      <p>Element 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。我们提供了四种方法，可以进行不同程度的样式自定义。</p>
    </div>
    <div class="block">
      <h3>主题编辑</h3>
      <p>使用在线主题编辑器，可以修改定制 Element 所有全局和组件的 Design Tokens，并可以方便地实时预览样式改变后的视觉。同时它还可以基于新的定制样式生成完整的样式文件包，供直接下载使用（关于如何使用下载的主题包，请参考本节「引入自定义主题」部分）。</p>
      <p>也可以使用主题编辑器 Chrome 插件，在任何使用 Element 开发的网站上配置并实时预览主题。</p>
      <el-card>
<!--        <img src="@/assets/theme.png" alt="">-->
      </el-card>
    </div>

    <div class="block">
      <h3></h3>
      <el-card>
        <code>
          <pre></pre>
        </code>
      </el-card>
    </div>
    <div class="block">
      <h3></h3>
    </div>
  </div>
</template>
<script>
export default {
  // data(){

  // }
}
</script>
<style scoped>
.container {
  margin-top: 50px;
}
.block{
  padding-top: 10px;
  padding-bottom: 20px;
}
h2 {
  font-size: 1.7rem;
}
p {
  margin: 10px 0;
  font-size: 14px;
  line-height: 23px;
  color: gray;
}

a {
  text-decoration: none;
  color: #409eff;
}

.el-card {
  max-width: 1140px;
  background-color: #f7f7f7;
  border: 1px solid rgb(224, 224, 224);
}


</style>