/**
 * Format a date
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

/**
 * Generate a random ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};
