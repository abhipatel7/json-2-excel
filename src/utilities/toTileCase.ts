export const toTitleCase = (phrase: string) => {
  // For string with more than one word
  if (phrase.split('.').length > 1) {
    return phrase
      .replace('.', ' ')
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  } else {
    // For camel case
    const result = phrase.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
};
