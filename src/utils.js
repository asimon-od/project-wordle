/**
 * @param {T[]} arr 
 */
export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * @param {number} start 
 * @param {number | undefined} end 
 * @param {number?} step 
 */
export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
