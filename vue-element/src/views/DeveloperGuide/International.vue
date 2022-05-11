<template>
  <div class="container">
    <div>
      <h2>国际化</h2>
      <p>
        Element
        组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在
        main.js 中：
      </p>
      <el-card>
        <code class="hljs">
          <span class="hljs-comment">// 完整引入 Element</span><br />
          <span class="hljs-keyword">import</span> Vue
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue'</span><br />
          <span class="hljs-keyword">import</span> ElementUI
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui'</span><br />
          <span class="hljs-keyword">import</span> locale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/en'</span><br />
          <br />
          Vue.use(ElementUI, { locale })
        </code>
      </el-card>
      <p>或</p>
      <el-card>
        <code class="language-javascript hljs">
          <span class="hljs-comment">// 按需引入 Element</span><br />
          <span class="hljs-keyword">import</span> Vue
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue'</span><br />
          <span class="hljs-keyword">import</span> { Button, Select }
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui'</span><br />
          <span class="hljs-keyword">import</span> lang
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/en'</span><br />
          <span class="hljs-keyword">import</span> locale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale'</span><br />
          <br />
          <span class="hljs-comment">// 设置语言</span><br />
          locale.use(lang)<br />
          <br />
          <span class="hljs-comment">// 引入组件</span><br />
          Vue.component(Button.name, Button)<br />
          Vue.component(Select.name, Select)
        </code>
      </el-card>
      <p style="margin-top: 25px">
        如果使用其它语言，默认情况下中文语言包依旧是被引入的，可以使用 webpack
        的 NormalModuleReplacementPlugin 替换默认语言包。
      </p>
      <p style="font-weight: bold">webpack.config.js</p>
      <el-card>
        <code class="language-javascript hljs">
          {<br />
          &nbsp;<span class="hljs-attr"> plugins</span>: [<br />
          &nbsp;<span class="hljs-keyword"> new </span
          >webpack.NormalModuleReplacementPlugin(
          <span class="hljs-regexp"
            >/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/</span
          >, <span class="hljs-string">'element-ui/lib/locale/lang/en'</span>)
          <br />
          &nbsp;] <br />}
        </code>
      </el-card>
    </div>

    <div class="JianRong">
      <h2>兼容 vue-i18n@5.x</h2>
      <p>Element 兼容 vue-i18n@5.x，搭配使用能更方便地实现多语言切换。</p>
      <el-card>
        <code class="language-javascript hljs"
          ><span class="hljs-keyword">import</span> Vue
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue'</span><br />
          <span class="hljs-keyword">import</span> VueI18n
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue-i18n'</span><br />
          <span class="hljs-keyword">import</span> Element
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui'</span><br />
          <span class="hljs-keyword">import</span> enLocale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/en'</span><br />
          <span class="hljs-keyword">import</span> zhLocale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/zh-CN'</span
          ><br />
          <br />
          Vue.use(VueI18n)<br />
          Vue.use(Element)<br />
          <br />
          Vue.config.lang = <span class="hljs-string">'zh-cn'</span><br />
          Vue.locale(<span class="hljs-string">'zh-cn'</span>, zhLocale)<br />
          Vue.locale(<span class="hljs-string">'en'</span>, enLocale)<br />
        </code>
      </el-card>
    </div>

    <div class="JianRong">
      <h2 style="margin-bottom: 20px">兼容其他 i18n 插件</h2>
      <el-card>
        <code class="hljs">
          <span class="hljs-keyword">import</span> Vue
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue'</span><br />
          <span class="hljs-keyword">import</span> Element
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui'</span><br />
          <span class="hljs-keyword">import</span> enLocale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/en'</span><br />
          <span class="hljs-keyword">import</span> zhLocale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/zh-CN'</span
          ><br />
          <br />
          Vue.use(Element, {<br />
          <span class="hljs-attr">i18n</span>:
          <span class="hljs-function"
            ><span class="hljs-keyword">function</span> (<span
              class="hljs-params"
              >path, options</span
            >) </span
          >{<br />
          <span class="hljs-comment">// ...</span><br />
          }<br />
          })<br />
        </code>
      </el-card>
    </div>

    <div class="JianRong">
      <h2 style="margin-bottom: 20px">兼容 vue-i18n@6.x</h2>
      <p>默认不支持 6.x 的 vue-i18n，你需要手动处理。</p>
      <el-card>
        <code class="language-javascript hljs">
          <span class="hljs-keyword">import</span> Vue
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue'</span><br />
          <span class="hljs-keyword">import</span> Element
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui'</span><br />
          <span class="hljs-keyword">import</span> VueI18n
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue-i18n'</span><br />
          <span class="hljs-keyword">import</span> enLocale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/en'</span><br />
          <span class="hljs-keyword">import</span> zhLocale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/zh-CN'</span
          ><br />
          <br />
          Vue.use(VueI18n)<br />
          <br />
          <span class="hljs-keyword">const</span> messages = {<br />
          <span class="hljs-attr">en</span>: {<br />
          <span class="hljs-attr">message</span>:
          <span class="hljs-string">'hello'</span>,<br />
          ...enLocale
          <span class="hljs-comment"
            >// 或者用 Object.assign({ message: 'hello' }, enLocale)</span
          ><br />
          },<br />
          <span class="hljs-attr">zh</span>: {<br />
          <span class="hljs-attr">message</span>:
          <span class="hljs-string">'你好'</span>,<br />
          ...zhLocale
          <span class="hljs-comment"
            >// 或者用 Object.assign({ message: '你好' }, zhLocale)</span
          ><br />
          }<br />
          }<br />
          <span class="hljs-comment"
            >// Create VueI18n instance with options</span
          ><br />
          <span class="hljs-keyword">const</span> i18n =
          <span class="hljs-keyword">new</span> VueI18n({<br />
          <span class="hljs-attr">locale</span>:
          <span class="hljs-string">'en'</span>,
          <span class="hljs-comment">// set locale</span><br />
          messages, <span class="hljs-comment">// set locale messages</span
          ><br />
          })<br />
          <br />
          Vue.use(Element, {<br />
          <span class="hljs-attr">i18n</span>:
          <span class="hljs-function"
            >(<span class="hljs-params">key, value</span>) =&gt;</span
          >
          i18n.t(key, value)<br />
          })<br />
          <br />
          <span class="hljs-keyword">new</span> Vue({ i18n }).$mount(<span
            class="hljs-string"
            >'#app'</span
          >)<br />
        </code>
      </el-card>
    </div>

    <div class="JianRong">
      <h2 style="margin-bottom: 20px">按需加载里定制 i18n</h2>
      <el-card>
        <code class="language-javascript hljs">
          <span class="hljs-keyword">import</span> Vue
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue'</span><br />
          <span class="hljs-keyword">import</span> Element
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui'</span><br />
          <span class="hljs-keyword">import</span> VueI18n
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'vue-i18n'</span><br />
          <span class="hljs-keyword">import</span> enLocale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/en'</span><br />
          <span class="hljs-keyword">import</span> zhLocale
          <span class="hljs-keyword">from</span>
          <span class="hljs-string">'element-ui/lib/locale/lang/zh-CN'</span
          ><br />
          <br />
          Vue.use(VueI18n)<br />
          <br />
          <span class="hljs-keyword">const</span> messages = {<br />
          <span class="hljs-attr">en</span>: {<br />
          <span class="hljs-attr">message</span>:
          <span class="hljs-string">'hello'</span>,<br />
          ...enLocale
          <span class="hljs-comment"
            >// 或者用 Object.assign({ message: 'hello' }, enLocale)</span
          ><br />
          },<br />
          <span class="hljs-attr">zh</span>: {<br />
          <span class="hljs-attr">message</span>:
          <span class="hljs-string">'你好'</span>,<br />
          ...zhLocale
          <span class="hljs-comment"
            >// 或者用 Object.assign({ message: '你好' }, zhLocale)</span
          ><br /><br />
          }<br />
          }<br />
          <span class="hljs-comment"
            >// Create VueI18n instance with options</span
          ><br />
          <span class="hljs-keyword">const</span> i18n =
          <span class="hljs-keyword">new</span> VueI18n({<br />
          <span class="hljs-attr">locale</span>:
          <span class="hljs-string">'en'</span>,
          <span class="hljs-comment">// set locale</span><br />
          messages, <span class="hljs-comment">// set locale messages</span
          ><br />
          })<br />
          <br />
          Vue.use(Element, {<br />
          <span class="hljs-attr">i18n</span>:
          <span class="hljs-function"
            >(<span class="hljs-params">key, value</span>) =&gt;</span
          >
          i18n.t(key, value)<br />
          })<br />
          <br />
          <span class="hljs-keyword">new</span> Vue({ i18n }).$mount(<span
            class="hljs-string"
            >'#app'</span
          >)<br />
        </code>
      </el-card>
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

.hljs {
  font-weight: 400;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.8;
  font-size: 12px;
  -webkit-font-smoothing: auto;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
}

.hljs-tag {
  color: #3182bd;
}

.hljs-name {
  color: #3182bd;
}

.hljs-attribute {
  color: #e6550d;
}

.hljs-number,
.hljs-regexp {
  color: #31a354;
}

.hljs-attr {
  color: #3182bd;
}

.hljs-keyword {
  color: #3182bd;
}

.hljs-selector-class {
  color: #3182bd;
}

.hljs-string {
  color: #756bb1;
}
.JianRong {
  margin: 20px 0;
}
</style>