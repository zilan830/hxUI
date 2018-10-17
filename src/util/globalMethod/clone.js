
//深复制
const deepClone = (source) => {
  return JSON.parse(JSON.stringify(source));
};

export {
  deepClone
};