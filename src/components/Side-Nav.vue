<template>
  <div class="Side-Nav">
    <el-menu v-on:click="handleselect" router="true" default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="light">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>文章管理</template>
        <el-menu-item index="1-1">信息列表</el-menu-item>
        <el-menu-item index="1-2">推荐列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>权限管理</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>治疗管理</el-menu-item>
    </el-menu>
  </div>
</template>
<script type="text/javascript">

import 'simditor/styles/simditor.css';

export default {
  methods: {
    handleclose() {
      console.log('haha');
    },
  },
};

</script>
<style type="text/css">
.Side-Nav {
  background-color: gray;
  width: 180px;
  float: left;
  height: 1200px;
  position: fixed;
  z-index: 100;
  top: 50px
}
</style>
