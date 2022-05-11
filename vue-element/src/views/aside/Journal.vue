<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <el-col :span="12" class="left">
        <h2>更新日志</h2>
      </el-col>
      <el-col :span="12" class="right">
        <el-button>GitHub Releases</el-button>
      </el-col>
    </el-row>
    <div class="div1">
      <el-row type="flex" justify="space-between">
        <el-col :span="12" class="left">
          <h2>2.15.8</h2>
        </el-col>
        <el-col :span="12" class="right">
          <p>2022-04-12</p>
        </el-col>
      </el-row>
      <div class="content">
        <h3>Bug修复</h3>
        <div>
          <p>Drawer</p>
          <ul>
            <li>
              • 修复 appendToBody 失效问题 (<span>#21264</span> by
              <span>@cs1707</span>)
            </li>
          </ul>
          <p>Switch</p>
          <ul>
            <li>
              • 修复 toggling value 问题(<span>#19473</span> by
              <span>@EdwinBetanc0urt</span>)
            </li>
          </ul>
          <p>Docs</p>
          <ul>
            <li>
              • 修复 input 文案 (<span>#21723</span> by
              <span>@justforuse</span>)
            </li>
            <li>
              • 修复 DatePicker 文案 (<span>#21663</span> by
              <span>@justforuse</span>)
            </li>
            <li>
              • 修复 Skeleton 文案 (<span>#21601</span> by
              <span>@yanwydxf</span>)
            </li>
          </ul>
          <p>其他</p>
          <ul>
            <li>• 修复 vue 版本(<span>#21736</span> by <span>@ckvv</span>)</li>
          </ul>
        </div>
        <h3>优化</h3>
        <p>I18n</p>
        <ul>
          <li>
            • 新增 阿塞拜疆语 翻译 (<span>#21723</span> by
            <span>@justforuse</span>)
          </li>
          <li>
            • 更新 斯洛文尼亚语 翻译 (<span>#21663</span> by
            <span>@justforuse</span>)
          </li>
          <li>
            • 更新 斯洛伐克语 翻译 (<span>#21601</span> by
            <span>@yanwydxf</span>)
          </li>
          <li>
            • 新增 冰岛语 的翻译 (<span>#21663</span> by
            <span>@justforuse</span>)
          </li>
          <li>
            • 新增 孟加拉 语的翻译 (<span>#21601</span> by
            <span>@yanwydxf</span>)
          </li>
        </ul>
        <h3>其他</h3>
        <p>
          因兼容性考虑，撤回2.15.7关于node-sass的更新(<span>#21019</span> by
          <span>@linxsbox</span>)，重新评估后会在后续合适版本上线
        </p>
      </div>
    </div>

    <div class="div1">
      <el-row type="flex" justify="space-between">
        <el-col :span="12" class="left">
          <h2>2.15.6</h2>
        </el-col>
        <el-col :span="12" class="right">
          <p>2021-09-02</p>
        </el-col>
      </el-row>
      <div class="content">
        <h3>Bug修复</h3>
        <div>
          <p>Cascader</p>
          <ul>
            <li>
              • 修复浏览器缩放模式下抖动的 bug (<span>#21264</span> by
              <span>@cs1707</span>)
            </li>
            <li>优化性能 (<span>#21231</span> by <span>@cs1707</span>)</li>
          </ul>
          <p>Select</p>
          <ul>
            <li>
              • 修复多选模式下文字溢出的 bug (<span>#19473</span> by
              <span>@EdwinBetanc0urt</span>)
            </li>
          </ul>
          <p>Dropdown</p>
          <ul>
            <li>
              • 增加 disabled 属性 (<span>#21723</span> by
              <span>@justforuse</span>)
            </li>
            <li>
              • 修复 DatePicker 文案 (<span>#21663</span> by
              <span>@justforuse</span>)
            </li>
          </ul>
          <p>Radio</p>
          <ul>
            <li>• 修复 vue 版本(<span>#21736</span> by <span>@ckvv</span>)</li>
          </ul>
          <p>Descriptions</p>
          <ul>
            <li>
              • 修复类型定义 (<span>#21723</span> by <span>@justforuse</span>)
            </li>
            <li>
              • 修复与表格组件混用样式冲突的问题 (<span>#21663</span> by
              <span>@justforuse</span>)
            </li>
          </ul>
          <p>Drawer</p>
          <ul>
            <li>
              • 修复 append-to-body (<span>#21264</span> by
              <span>@cs1707</span>)
            </li>
          </ul>
        </div>
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
 
<script>
</script>
 
<style scoped>
.container {
  margin-top: 50px;
}
.container > .el-row {
  line-height: 40px;
  margin-bottom: 40px;
}
.left h2 {
  float: left;
}
.right p {
  font-size: 18px;
  color: gray;
}
.right .el-button,
.right p {
  float: right;
}
.div1 {
  border: 1px solid rgb(209, 209, 209);
  border-radius: 5px;
  margin-bottom: 40px;
}
.div1 > .el-row {
  border-bottom: 1px solid rgb(209, 209, 209);
  padding: 20px 30px;
}
.content {
  padding: 0 45px 45px 45px;
  text-align: start;
}
.content h3 {
  padding: 10px 0;
}
.content p,
li {
  font-size: 16px;
  padding: 9px 0;
  list-style-type: none;
}
li {
  padding-left: 10px !important;
}
.content ul,
.content p {
  margin: 0;
  padding: 0;
}
span {
  color: #409eff;
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.tag_foot {
    margin-top:40px;
    line-height: 30px;
    }

</style>
