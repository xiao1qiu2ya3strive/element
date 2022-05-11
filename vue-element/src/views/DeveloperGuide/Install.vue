<template>
  <div class="container">
    <el-row>
      <h2>安装</h2>
    </el-row>
    <div class="install">
      <h3>npm 安装</h3>
      <div>
        <p>
          推荐使用 npm 的方式安装，它能更好地和
          <a href="#">webpack</a> 打包工具配合使用。
        </p>
        <el-card><code>npm i element-ui -S</code></el-card>
      </div>
    </div>
    <div class="install">
      <h3>CDN</h3>
      <div>
        <p>
          目前可以通过
          <a href="#">unpkg.com/element-ui</a>
          获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用
        </p>
        <el-card>
          <pre>
                  
&lt;!-- 引入样式 --&gt;

&lt;link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"&gt;

&lt;!-- 引入组件库 --&gt;

&lt;!-- &lt;script src="https://unpkg.com/element-ui/lib/index.js"&gt;&lt;/script&gt; --&gt;
          </pre>
        </el-card>
      </div>
    </div>
    <blockquote class="layui-elem-quote">
      我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element
      升级时受到非兼容性更新的影响。锁定版本的方法请查看
      <a href="#">unpkg.com</a>。
    </blockquote>
    <div class="install">
      <h3>Hello world</h3>
      <div>
        <p>
          通过CDN的方式我们可以很容易地使用 Element 写出一个 Hello world页面。<a
            href="#"
            >在线演示</a
          >
        </p>
        <el-card><code>npm i element-ui -S</code></el-card>
      </div>
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
<script src="@/layui/layui.js"></script>
<script>
export default {
  mounted() {
    layui.use(["code"], function () {
      var form = layui.form;
      layui.code();
    });
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
}
h2 {
  font-size: 1.7rem;
}

h3 {
  font-size: 1.4rem;
}

.install h3 {
  margin: 40px 0 18px 0;
}
p {
  font-size: 14px;
  margin-bottom: 15px;
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
.layui-elem-quote {
  border-radius: 6px;
  border-left: 5px solid #409eff;
  margin-top: 25px;
  background: #ecf8ff;
}
pre,
xmp {
  margin: 0;
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
