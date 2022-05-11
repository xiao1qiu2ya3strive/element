<template>
  <div class="container">
    <div>
      <h2>快速上手</h2>
      <p style="margin-top: 15px">本节将介绍如何在项目中使用 Element</p>
    </div>
    <div class="start">
      <h3>使用 vue-cli@3</h3>
      <p>
        我们为新版的 vue-cli 准备了相应的
        <a href="#">Element 插件</a>，你可以用它们快速地搭建一个基于 Element
        的项目。
      </p>
    </div>
    <div class="start">
      <h3>使用 Starter Kit</h3>
      <p>
        我们提供了通用的<a href="#">项目模板</a>，你可以直接使用。对于 Laravel
        用户，我们也准备了相应的<a href="#">模板</a>，同样可以直接下载使用。
      </p>
      <p>如果不希望使用我们提供的模板，请继续阅读。</p>
    </div>
    <div class="start">
      <h3>引入 Element</h3>
      <p>
        你可以引入整个
        Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。
      </p>
      <h4>完整引入</h4>
      <p>在main .js中写入以下内容：</p>
      <el-card>
        <code>
          <xmp>import Vue from 'vue';</xmp>
          <xmp>import ElementUI from 'element-ui';</xmp>
          <xmp>import 'element-ui/lib/theme-chalk/index.css';</xmp>
          <xmp>import App from './App.vue';</xmp>
          <xmp>Vue.use(ElementUI);</xmp>
          <xmp>new Vue({</xmp>
          <xmp>el: '#app',</xmp>
          <xmp>render: h => h(App)</xmp>
          <xmp>});</xmp>
        </code>
      </el-card>
      <p style="margin-top: 20px">
        以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。
      </p>
      <h4>按需引入</h4>
      <p>
        借助
        <a href="#">babel-plugin-component</a
        >，我们可以只引入需要的组件，以达到减小项目体积的目的。
      </p>
      <p>首先，安装 babel-plugin-component：</p>
      <el-card><code>npm install babel-plugin-component -D</code></el-card>
      <p style="margin-top: 20px; margin-bottom: 10px">
        然后，将 .babelrc 修改为：
      </p>
      <el-card>
        <code>
          <pre>{</pre>
          <pre>  "presets": [["es2015", { "modules": false }]],</pre>
          <pre>  "plugins": [</pre>
          <pre>    [</pre>
          <pre>      "component",</pre>
          <pre>      {</pre>
          <pre>         "libraryName": "element-ui",</pre>
          <pre>         "styleLibraryName": "theme-chalk"</pre>
          <pre>      }</pre>
          <pre>    ]</pre>
          <pre>  ]</pre>
          <pre>}</pre>
        </code>
      </el-card>
      <p>
        接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在
        main.js 中写入以下内容：
      </p>
      <el-card>
        <code>
          <pre>import Vue from 'vue';</pre>
          <pre>import { Button, Select } from 'element-ui';</pre>
          <pre>
import App from './App.vue';

                </pre
          >
          <pre>Vue.component(Button.name, Button);</pre>
          <pre>Vue.component(Select.name, Select);</pre>
          <pre>/* 或写为</pre>
          <pre>* Vue.use(Button)</pre>
          <pre>* Vue.use(Select)</pre>
          <pre>
*/

                </pre
          >
          <pre>new Vue({</pre>
          <pre>el: '#app',</pre>
          <pre>render: h => h(App)</pre>
          <pre>});</pre>
        </code>
      </el-card>
      <p>
        完整组件列表和引入方式（完整组件列表以
        <a href="#">components.json</a> 为准）
      </p>
    </div>
    <div class="tag_foot">
      <div style="float: left">
        <router-link to="/DeveloperGuide/CustomTheme"
          ><i class="el-icon-arrow-left"> 自定义主题</i></router-link
        >
      </div>
      <div style="float: right">
        <router-link to=""
          >Layot布局<i class="el-icon-arrow-right"> </i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-top: 50px;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.4rem;
}

h4 {
  font-size: 1.1rem;
  margin: 20px 0;
}

pre {
  margin: 10px 0;
}

.start h3 {
  margin: 40px 0 18px 0;
}

p {
  margin: 8px 0;
  font-size: 14px;
  line-height: 25px;
  color: rgb(95, 95, 95);
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
.tag_foot {
  margin-top: 40px;
  line-height: 30px;
}
.tag_foot a{
  color: rgb(82, 82, 82);
}
.tag_foot a:hover{
   color: #409eff;
}

</style>