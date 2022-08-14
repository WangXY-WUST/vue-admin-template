<template>
  <el-container>
      <SideMenu :isCollapse = 'isCollapse'></SideMenu>
    <el-container>
      <el-header>
        <Header @updateCollapse = 'updateCollapse' :isCollapse = 'isCollapse'></Header>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import Header from '@/components/Header'
export default {
  name: "Home",
  data() {
    return {
        isCollapse: false
    }
  },
  components: {
    SideMenu,
    Header
  },
  methods:{
    updateCollapse(data) {
        this.isCollapse = data
    }
  }
};
</script>

<style>
.el-container {
    height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>