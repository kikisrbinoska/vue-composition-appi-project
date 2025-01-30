import { ref, computed } from 'vue';

export function useSearch(items) {
  const searchTerm = ref('');
  const filters = ref(['title']);

  const filteredItems = computed(() => {
    return items.filter(item => {
      return filters.value.some(field => {
        return item[field].toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    });
  });

  return { searchTerm, filters, filteredItems };
}
