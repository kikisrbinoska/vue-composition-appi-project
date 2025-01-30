<template>
    <div>
      <input v-model="title" placeholder="Title" />
      <input v-model="author" placeholder="Author" />
      <input v-model="id" placeholder="Blog ID (slug)" />
      <textarea v-model="content" placeholder="Content"></textarea>
      <button @click="handleSave">Save</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        author: '',
        id: '',
        content: ''
      };
    },
    methods: {
      handleSave() {
        const newBlog = {
          title: this.title,
          author: this.author,
          id: this.id,
          content: this.content
        };
        this.$emit('addNewItem', newBlog);
        this.title = '';
        this.author = '';
        this.id = '';
        this.content = '';
      }
    }
  };
  </script>
  