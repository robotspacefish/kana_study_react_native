export const chooseRandom = obj => {
  const keys = Object.keys(obj);
  const randomIndex = Math.floor(Math.random() * (keys.length + 1));

  return obj[keys[randomIndex]];
};