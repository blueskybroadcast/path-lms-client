export const convertBoolToNumber = (value) => {
  if (value) return '1';
  return '0';
};

export const formatDate = (date) => {
  if (date instanceof Date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  return undefined;
};
