export const textAreaValidator = (value: string) => {
  if (!value) {
    return 'Please enter a JSON object.';
  }
  try {
    JSON.parse(value);
  } catch (e) {
    return 'Please enter a valid JSON object.';
  }
  return '';
};
