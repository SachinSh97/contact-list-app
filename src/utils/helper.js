/**
 * function provide functionality of debouncing user events
 *
 * @param {func} func event handler that need to be debounce
 * @param {Number} delay time to delay the handler after user stop interactivity
 *
 */
export const debouncing = (func, delay) => {
  let timeOut;
  return function (...args) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * function provide functionality of sorting a list of objects
 *
 * @param {Array} list list of objects need to be sorted
 * @param {String}  key key by which the object needs to be sorted
 *
 */
export const sortList = (list, key) =>
  list?.sort((itemOne, itemSecond) =>
    itemOne?.[key] > itemSecond?.[key]
      ? 1
      : itemOne?.[key] < itemSecond?.[key]
      ? -1
      : 0,
  );

/**
 * function generate random color
 *
 * @returns rgb color
 */
export const randomBgColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = 100 + Math.floor(Math.random() * 256);
  let blue = 50 + Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
