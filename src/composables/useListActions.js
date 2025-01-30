import { ref } from 'vue';

export function useListActions(items) {
  const addItem = (newItem) => {
    items.push(newItem);
  };

  const deleteItem = (id) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
    }
  };

  return { addItem, deleteItem };
}
