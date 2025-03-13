const memoryStorage: Record<string, any> = {};

// Basic item type
interface Item {
  id: string;
  name: string;
  description?: string;
}

// Get all items
export function getItems(): Item[] {
  return memoryStorage["items"] || [];
}

// Get a single item by ID
export function getItem(id: string): Item | undefined {
  const items = getItems();
  return items.find((item) => item.id === id);
}

// Add a new item
export function addItem(item: Omit<Item, "id">): Item {
  const items = getItems();
  const newItem = {
    ...item,
    id: Math.random().toString(36).substring(2, 9),
  };

  memoryStorage["items"] = [...items, newItem];
  return newItem;
}

// Update an item
export function updateItem(id: string, data: Partial<Item>): boolean {
  const items = getItems();
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) return false;

  items[index] = { ...items[index], ...data };
  memoryStorage["items"] = items;
  return true;
}

// Remove an item
export function removeItem(id: string): boolean {
  const items = getItems();
  const filtered = items.filter((item) => item.id !== id);

  if (filtered.length === items.length) return false;

  memoryStorage["items"] = filtered;
  return true;
}
