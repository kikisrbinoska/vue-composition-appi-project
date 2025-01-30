import { ref } from 'vue';
import { useListActions } from './useListActions';
import contentful from 'contentful';

const client = contentful.createClient({
  space: 'your-space-id',
  accessToken: 'your-access-token'
});

export function useBlogs() {
  const blogs = ref([]);
  const isLoading = ref(true);
  const error = ref(null);

  const fetchBlogs = async () => {
    try {
      const response = await client.getEntries({ content_type: 'blog' });
      blogs.value = response.items.map(item => ({
        id: item.fields.slug,
        title: item.fields.title,
        description: item.fields.description,
        heroImage: item.fields.heroImage,
        publishDate: item.fields.publishDate,
      }));
    } catch (err) {
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  };

  fetchBlogs();
  const { addItem, deleteItem } = useListActions(blogs.value);

  return { blogs, isLoading, error, addItem, deleteItem };
}
