<template>
    <div>
      <input v-model="searchTerm" placeholder="Search blogs..." />
      <fieldset>
        <input type="checkbox" v-model="filters" value="title" /> By title
        <input type="checkbox" v-model="filters" value="description" /> By content
      </fieldset>
  
      <div v-if="isLoading">Loading...</div>
      <div v-if="error">{{ error }}</div>
  
      <div v-for="blog in filteredBlogs" :key="blog.id">
        <h2>{{ blog.title }}</h2>
        <p>{{ blog.description }}</p>
        <button @click="deleteBlog(blog.id)">Remove</button>
      </div>
    </div>
  </template>
  
  <script>
  import { useSearch } from '../composables/useSearch';
  
  export default {
    props: {
      blogs: Array,
      isLoading: Boolean,
      error: String,
      deleteItem: Function
    },
    setup(props) {
      const { searchTerm, filters, filteredItems } = useSearch(props.blogs);
  
      const deleteBlog = (id) => {
        props.deleteItem(id);
      };
  
      return { searchTerm, filters, filteredBlogs: filteredItems, deleteBlog };
    }
  };
  </script>
  