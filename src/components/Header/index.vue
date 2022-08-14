<template>
  <div>
    <i class="el-icon-s-fold" @click="changeCollapse" ref="icon"></i>
      <el-dropdown trigger="click">
        <el-avatar size="medium" :src="circleUrl"> </el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>xxxx</el-dropdown-item>
          <el-dropdown-item></el-dropdown-item>
          <el-dropdown-item>xxxx</el-dropdown-item>
          <el-dropdown-item divided @click.native="toLogin">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
export default {
  name: "Header",
  props: ["isCollapse"],
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    // 改变折叠状态
    changeCollapse() {
      console.log(this.$refs.icon.className);
      if (this.$refs.icon.className === "el-icon-s-fold") {
        this.$refs.icon.className = "el-icon-s-unfold";
      } else {
        this.$refs.icon.className = "el-icon-s-fold";
      }
      // 触发自定义事件
      this.$emit("updateCollapse", !this.isCollapse);
    },
    // 跳转到登录页
    toLogin() {
      this.$router.push('/login')
    }
  },
};
</script>

<style>
.el-icon-s-fold {
  float: left;
  font-size: 32px;
  margin-top: 15px;
}
.el-icon-s-unfold {
  float: left;
  font-size: 32px;
  margin-top: 15px;
}
.el-dropdown {
  float: right;
  width: 32px;
  height: 32px;
  margin-top: 10px;
  margin-right: 20px;
}
</style>