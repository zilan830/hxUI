
//对象深复制
const deepClone = (source) => {
  return JSON.parse(JSON.stringify(source));
};

//数组深复制
const deepArrayClone = (arr) => {
  return arr.slice(0);
};

export {
  deepClone,
  deepArrayClone
};