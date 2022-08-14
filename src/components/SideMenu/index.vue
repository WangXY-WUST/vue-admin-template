<template>
  <div class="menu">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="1-4-1"
      class="el-menu"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color = '#fff'
      active-text-color = '#C4A64D'
    >
    <h3 class="headName">测试工具</h3>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-4">
          <span slot="title">选项4</span>
        </el-menu-item>
        <el-menu-item index="1-1">
          <span slot="title">选项1</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  props:['isCollapse'],
  data() {
      return {
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

};
</script>

<style>
.menu {
    height: 100%;
}
.el-menu {
    background-color: #545C64;
    height: 100%;
    width: 200px;
}
.headName {
    color: #fff;
    text-align: center;
    margin-top: 10px;

}
.el-menu--collapse {
    width: 64px;
}
.el-menu-item:hover {
    background-color: #434A50;
}
.el-submenu__title:hover {
    background-color: #434A50;
}
.is-active:focus {
    background-color: #434A50;
}

.h-menu {
    height: 100px;
}
</style>