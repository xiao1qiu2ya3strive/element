<template>
  <div>
    <el-container>
      <el-header>
        <div class="row">
          <el-row>
            <el-col :span="4" class="hidden-sm-and-down">
              <div class="logo"><img src="../assets/logo.svg" alt="" /></div>
            </el-col>
            <el-col :sm="4" class="hidden-md-and-up">
              <div class="logo2"><img src="../assets/logo2.svg" alt="" /></div>
            </el-col>
            <el-col :span="4" class="hidden-sm-and-down">
              <div class="input">
                <el-input placeholder="搜索文档"></el-input>
              </div>
            </el-col>
            <el-col :span="2" :offset="2"> 指南 </el-col>
            <el-col :span="2"> 组件 </el-col>
            <el-col :span="2"> 主题 </el-col>
            <el-col :span="2"> 资源 </el-col>
            <el-col :span="2" :offset="2">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link"
                  >2.15.7<i class="el-icon-arrow-down el-icon--right"></i
                ></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>1.4.13</el-dropdown-item>
                  <el-dropdown-item>2.0.11</el-dropdown-item>
                  <el-dropdown-item>2.5.1</el-dropdown-item>
                  <el-dropdown-item>2.5.71</el-dropdown-item>
                  <el-dropdown-item>2.7.01</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="2">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link"
                  >2.15.7<i class="el-icon-arrow-down el-icon--right"></i
                ></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>中文</el-dropdown-item>
                  <el-dropdown-item>English</el-dropdown-item>
                  <el-dropdown-item>Español</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-container>
          <aside>

          </aside>
          <container>
              <el-main>

              </el-main>
              <el-footer>
                  
              </el-footer>
          </container>
      </el-container>
    </el-container>
  </div>
</template>