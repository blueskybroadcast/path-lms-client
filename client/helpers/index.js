export const convertBoolToNumber = (value) => {
  if (value) return '1';
  return '0';
};

export const formatDate = date => (
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
);
