/**
 * @file 通用函数
 */

/**
 * 产生唯一标识字符串
 */
export function guid() {
  return (
    randomChar(8) +
    "-" +
    randomChar(4) +
    "-" +
    randomChar(4) +
    "-" +
    randomChar(4) +
    "-" +
    randomChar(6) +
    randomChar(6)
  );
}

/**
 * 产生指定长度的随机字符
 * @param {number} len - 长度，范围是1-11
 * @param {number} scale - 进制，范围是2-36，默认是16进制
 * @returns {string} - 随机字符
 */
export function randomChar(len, scale = 16) {
  return Math.random()
    .toString(scale)
    .slice(2, len + 2);
}
