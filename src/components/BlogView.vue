<template>
    <div>
      <button @click="toggleEditor">Add new blog</button>
      <BlogEditor v-if="showEditor" @addNewItem="addNewItem" />
      <Blogs
        v-if="!showEditor"
        :blogs="blogs"
        :isLoading="isLoading"
        :error="error"
        :deleteItem="deleteItem"
      />
    </div>
  </template>
  
  <script>
  import { useBlogs } from '../composables/useBlogs';
  import BlogEditor from './BlogEditor.vue';
  import Blogs from './Blogs.vue';
  
  export default {
    components: {
      BlogEditor,
      Blogs
    },
    data() {
      return {
        showEditor: false
      };
    },
    setup() {
      const { blogs, isLoading, error, addItem, deleteItem } = useBlogs();
  
      const addNewItem = (newBlog) => {
        addItem(newBlog);
      };
  
      const toggleEditor = () => {
        this.showEditor = !this.showEditor;
      };
  
      return { blogs, isLoading, error, addNewItem, deleteItem, toggleEditor };
    }
  };
  </script>
  