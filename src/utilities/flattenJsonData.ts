// Not Needed for now but could be useful if you want to flatten your JSON data
const keyList: string[] = [];

const flatten: any = (obj: any[], path = '') => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, '')]: obj };

  return Object.keys(obj).reduce((output: any, key: any) => {
    !isNaN(+key) && keyList.push(key);
    return { ...output, ...flatten(obj[key], path + key + '.') };
  }, {});
};

export const flattenJsonData = (data: any) => {
  // Total Number of Rows

  const flattenData = flatten(data);

  const flattenDataArray = Object.keys(flattenData);

  const arr = [...keyList];

  flattenDataArray.forEach((key) => {
    const eleNumber: any = key.split('.')[0];

    if (keyList.includes(eleNumber)) {
      arr[eleNumber] = {
        ...(arr[eleNumber] as any),
        [key.split('.').splice(1).join('.')]: flattenData[key],
      };
    }
  });

  flattenDataArray.forEach((key) => {
    const eleNumber: any = key.split('.')[0];

    Object.keys(arr[eleNumber]).forEach((key) => {
      if (!isNaN(+key)) {
        delete (arr[eleNumber] as any)[key];
      }
    });
  });

  return arr;
};
