<template>
    <div class="container">
        <el-row>
            <h2>内置过渡动画</h2>
            <p style="margin-top:10px">Element 内应用在部分组件的过渡动画，你也可以直接使用。在使用之前请阅读 transition 组件文档 。</p>
        </el-row>

        <div class="transition">
            <h3>fade淡入淡出</h3>
            <div class="express">
                <el-button @click="show = !show">Click Me</el-button>
                <div class="express_such" style="display: flex;">
                    <transition name="el-fade-in-linear">
                        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
                    </transition>
                    <transition name="el-fade-in">
                        <div v-show="show" class="transition-box">.el-fade-in</div>
                    </transition>
                </div>
                <div class="hide" v-show="show4">
                    <div class="hide_title">提供 <code>el-fade-in-linear</code> 和 <code>el-fade-in</code> 两种效果</div>
                    <pre style="padding: 0 10px">
                    <code class="html hljs xml">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"show3 = !show3"</span>&gt;</span>Click Me<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px; height: 200px;"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-transition</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">"show3"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transition-box"</span>&gt;</span>el-collapse-transition<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transition-box"</span>&gt;</span>el-collapse-transition<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-transition</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">data</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> ({
      <span class="hljs-attr">show3</span>: <span class="hljs-literal">true</span>
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.transition-box</span> {
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#409EFF</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">40px</span> <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">20px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                    </code>
                        </pre>
                </div>
                <div>
                    <div class="fluid" @click="show4 = !show4"><i class="el-icon-caret-bottom"></i><span
                            style="display:none">显示代码</span><i class="el-icon-caret-top" style="display:none"></i><span
                            style="display:none">隐藏代码</span></div>
                </div>
            </div>
        </div>

        <div class="transition">
            <h3>zoom缩放</h3>
            <div class="express">
                <el-button @click="show2 = !show2">Click Me</el-button>

                <div class="express_such" style="display: flex;">
                    <transition name="el-zoom-in-center">
                        <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
                    </transition>

                    <transition name="el-zoom-in-top">
                        <div v-show="show2" class="transition-box">.el-zoom-in-top</div>
                    </transition>

                    <transition name="el-zoom-in-bottom">
                        <div v-show="show2" class="transition-box">.el-zoom-in-bottom</div>
                    </transition>
                </div>
                <div class="hide" v-show="show5">
                    <div class="hide_title">提供 <code>el-fade-in-linear</code> 和 <code>el-fade-in</code> 两种效果</div>
                    <pre>
                    <code class="html hljs xml">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"show3 = !show3"</span>&gt;</span>Click Me<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px; height: 200px;"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-transition</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">"show3"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transition-box"</span>&gt;</span>el-collapse-transition<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transition-box"</span>&gt;</span>el-collapse-transition<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-transition</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">data</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> ({
      <span class="hljs-attr">show3</span>: <span class="hljs-literal">true</span>
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.transition-box</span> {
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#409EFF</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">40px</span> <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">20px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                    </code>
                    </pre>
                </div>
                <div>
                    <div class="fluid" @click="show5 = !show5"><i class="el-icon-caret-bottom"></i><span
                            class="none">显示代码</span><i class="el-icon-caret-top" style="display:none"></i><span
                            style="display:none">隐藏代码</span>
                        <el-button type="text" size="medium" style="margin-right:20px; float:right"><span>在线运行</span>
                        </el-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="transition">
            <h3>collapse展开折叠</h3>
            <p>使用 <code>el-collapse-transition</code> 组件实现折叠展开效果。</p>
            <div class="express">
                <el-button @click="show3 = !show3">Click Me</el-button>

                <div class="express_such">
                    <el-collapse-transition>
                        <div v-show="show3">
                            <div class="transition-box">el-collapse-transition</div>
                            <div class="transition-box">el-collapse-transition</div>
                        </div>
                    </el-collapse-transition>
                </div>
                <div class="hide" v-show="show6">
                    <div class="hide_title">提供 <code>el-fade-in-linear</code> 和 <code>el-fade-in</code> 两种效果</div>
                    <pre>
                    <code class="html hljs xml">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"show3 = !show3"</span>&gt;</span>Click Me<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-top: 20px; height: 200px;"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-collapse-transition</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">"show3"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transition-box"</span>&gt;</span>el-collapse-transition<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"transition-box"</span>&gt;</span>el-collapse-transition<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-collapse-transition</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">data</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> ({
      <span class="hljs-attr">show3</span>: <span class="hljs-literal">true</span>
    })
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.transition-box</span> {
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100px</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#409EFF</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">40px</span> <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">20px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                    </code>
                    </pre>
                </div>
                <div>
                    <!-- <button class="layui-btn-fluid" @click="show6 = !show6"><i class="el-icon-caret-bottom"></i><span
                            style="display:none">显示代码</span><i class="el-icon-caret-top" style="display:none"></i><span
                            style="display:none">隐藏代码</span></button> -->
                    <div class="demo-block-control" style="left: 0px;"><i class="el-icon-caret-top"></i><span
                            style="display: none;">隐藏代码</span><button type="button"
                            class="el-button control-button el-tooltip el-button--text el-button--small"
                            aria-describedby="el-tooltip-3934" tabindex="0" style="">
                            <span>在线运行</span>
                        </button></div>
                </div>
            </div>
        </div>
        <div class="transition">
            <h3>按需引入</h3>
            <div class="express" style="padding:20px 15px">
                <code class="hljs">
                    <pre><span class="hljs-comment">// fade/zoom 等</span></pre>
                    <pre><span class="hljs-keyword">import</span> <span class="hljs-string">'element-ui/lib/theme-chalk/base.css'</span>;</pre>
                    <pre><span class="hljs-comment">// collapse 展开折叠</span></pre>
                    <pre><span class="hljs-keyword">import</span> CollapseTransition <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui/lib/transitions/collapse-transition'</span>;</pre>
                    <pre><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
                    </pre>
                    <pre>Vue.component(CollapseTransition.name, CollapseTransition)</pre>
                </code>
            </div>
        </div>
        <div class="tag_foot">
            <div style="float:left">
                <router-link to="/DeveloperGuide/CustomTheme"><i class="el-icon-arrow-left"> 自定义主题</i></router-link>
            </div>
            <div style="float:right;">
                <router-link to="">Layot布局<i class="el-icon-arrow-right"> </i></router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        show: true,
        show2: true,
        show3: true,
        show4: false,
        show5: false,
        show6: false
    }),
    methods: {
        hover: function () {

        }
    }
}
</script>

<style scoped>
pre {
    padding: 0 10px;
}

.none {
    display: none;
}

.block {
    display: block;
}

.container {
    margin-top: 50px;
}

h2 {
    font-size: 1.7rem;
}

h3 {
    font-size: 1.3rem;
}

.transition h3 {
    margin: 40px 0 18px 0;
}

.express {
    border: 1px solid rgb(224, 224, 224);
    border-radius: 4px;
}

.express>.el-button {
    margin: 20px 0 0 25px;
}

.express_such {
    padding: 20px 20px 20px 25px;
    border-bottom: 1px solid rgb(224, 224, 224);
}

.hide {
    padding: 10px 10px 0 10px;
    background: rgb(252, 251, 251);
    transition: 1s all ease-out;
}

.hide_title {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    padding: 20px;
    background: white;
    color: rgb(104, 104, 104);
}

.hide_title code {
    font-size: 12px;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    line-height: 1.8;
    background: #e1f0ff;
    border-radius: 3px;
    padding: 3px;
}

p {
    margin: 5px 0;
    font-size: 14px;
    line-height: 25px;
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

.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
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

.hljs-number {
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
    ;
}

.fluid {
    background: #fff;
    height: 43px;
    line-height: 43px;
    border-top: 1px solid rgb(224, 224, 224);
    color: gray;
    cursor: pointer;
    text-align: center;
}

.tag_foot {
    margin-top:40px;
    line-height: 30px;
}
.tag_foot a{
  color: rgb(82, 82, 82);
}
.tag_foot a:hover{
   color: #409eff;
}

</style>