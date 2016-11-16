<template lang="html">
  <div class="post-create">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="资讯标题">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
        <el-form-item label="作者">
    </el-form-item>
    <el-form-item label="来源">
          <el-input v-model="form.name"></el-input>

      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="内容">
       <!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
    <v-editor :input-content="inputContent" :upload-url="uploadUrl" v-model="outputContent"></v-editor>
    <input type="button" name="name" value="submit" @click="submit">

    </el-form-item>
 
</el-form>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        // input content to editor
        inputContent: 'base on wangeditor',
        // output content from editor
        outputContent: '',
        // set image upload api url
        uploadUrl: '/api/v1/help/upload/wangEditorH5File',
      };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
      submit() {
        console.log('提交');
        console.log(this.outputContent);
      },
    },
  };
</script>


<style type="text/css">
  .post-create {
    margin-top: 100px;
    margin-left: 100px;
    width: 1040px;
  }
</style>