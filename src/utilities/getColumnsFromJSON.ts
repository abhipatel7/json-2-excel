// Get Columns
const flatten: any = (obj: any, path = '') => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, '')]: obj };

  return Object.keys(obj).reduce((output: any, key: any) => {
    return obj instanceof Array
      ? { ...output, ...flatten(obj[key], path + key + '.') }
      : { ...output, ...flatten(obj[key], path + key + '.') };
  }, {});
};

export const getColumnsFromJSON = (data: any) => Object.keys(flatten(data));
