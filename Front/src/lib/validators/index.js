import hint from "./hint";

/**
 * 表单验证规则集
 * @namespace
 * @property {function} required - 必填
 * @property {function} number - 数字号码 | number("6~10") - 长度在6~10间的数字号码
 * @property {function} numeric - 具有数学意义的数字 | numberic("-10~10") - 值在-10~10间的数值
 * @property {function} length - 字符长度 | length("6~18") - 字符长度在6~18之间
 * @property {function} positive - 正数 | positive("12.8~25.6") - 数学值在12.8~25.6之间
 * @property {function} integer - 整数 | integer("-256~256") - 数学值在-256~256之间
 * @property {function} positiveInteger - 正整数 | positiveInteger("128~256") - 数学值在128~256之间
 * @property {function} email - 邮箱
 * @property {function} ipv4 - IPv4地址 | 255.255.255.255
 * @property {function} port - 端口号 | 0~65535
 * @property {function} idcard18 - 18位大陆身份证 | 结尾可以是X、x
 */
const validators = {
  required: v => notVoid(v) || hint._required,
  number: range => (v = "") =>
    v.match(/^\d+$/)
      ? renderRange(v.length, Range(range, "0~"), hint._length)
      : hint._input_must_be_number,
  numeric: range => (v = "") =>
    numberable(v)
      ? renderRange(v, Range(range), hint._input)
      : hint._input_must_be_number,
  length: range => (v = "") =>
    renderRange(v.length, Range(range, "0~"), hint._length),
  positive: range => (v = "") =>
    positivable(v)
      ? renderRange(v, Range(range), hint._input)
      : hint._input_must_be_positive,
  integer: range => (v = "") =>
    integerable(v)
      ? renderRange(v, Range(range), hint._input)
      : hint._input_must_be_integer,
  positiveInteger: range => (v = "") =>
    positiveIntegerable(v)
      ? renderRange(v, Range(range), hint._input)
      : hint._input_must_be_positive_integer,
  email: (v = "") => Boolean(v.match(/@/)) || hint._email_format_error,
  ipv4: (v = "") =>
    Boolean(
      v.match(
        /^([0-1]?\d?\d|2[0-4]\d|25[0-5])\.([0-1]?\d?\d|2[0-4]\d|25[0-5])\.([0-1]?\d?\d|2[0-4]\d|25[0-5])\.([0-1]?\d?\d|2[0-4]\d|25[0-5])$/
      )
    ) || hint._ip_address_format_error,
  port: (v = "") =>
    positiveIntegerable(v)
      ? renderRange(v, Range("0~65535"), hint._input)
      : hint._port_format_error,
  idcard18: (v = "") =>
    Boolean(
      v.match(
        /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
      )
    ) || hint._id_card_format_error
};

/**
 * 字符串非空
 * @param {string} str - 为避错，非字符串会被强制转换成字符串
 * @returns {boolean} true|false
 */
function notVoid(str = "") {
  if (str == null) {
    return false;
  }
  str = ("" + str).trim();
  return str !== "";
}

/**
 * 字符串是否可以转换成数字型
 * @see notVoid
 * @param {string} str - 为避错，非字符串会被强制转换成字符串；这样可以保证[""|null|true|false]不会被change成数字
 * @returns {boolean} true|false
 */
function numberable(str = "") {
  str = ("" + str).trim();
  return notVoid(str) && +str === +str;
}

/**
 * 输入是否可以转换成整数
 * @see numberable
 * @param {string} str
 * @returns {boolean} true|false
 */
function integerable(str = "") {
  return numberable(str) && Number.isInteger(+str);
}

/**
 * 输入是否可以转换成正数
 * @see numberable
 * @param {string} str
 * @returns {boolean} true|false
 */
function positivable(str = "") {
  return numberable(str) && +str > 0;
}

/**
 * 输入是否可以转换成正整数
 * @see numberable
 * @param {string} str
 * @returns {boolean} true|false
 */
function positiveIntegerable(str = "") {
  return integerable(str) && +str > 0;
}

/**
 * 范围
 * @class Range
 * @param {string} str - 期待输入为 "n~m" "n~" "~m"
 * @param {string} extremum - 极值范围，期待输入为 "n~m" "n~" "~m"，输入的str范围超出此范围会被截断
 * @returns {object} {min, max}
 */
function Range(str, extremum) {
  let strRange = str == undefined ? [undefined, undefined] : str.split("~"),
    a = strRange[0],
    b = strRange[1],
    extremumRange =
      extremum == undefined ? [undefined, undefined] : extremum.split("~"),
    minimum = extremumRange[0],
    maximum = extremumRange[1];
  if (numberable(a)) {
    minimum = numberable(minimum) ? Math.max(+a, +minimum) : +a;
  }
  if (numberable(b)) {
    maximum = numberable(maximum) ? Math.min(+b, +maximum) : +b;
  }
  return {
    min: numberable(minimum) ? +minimum : undefined,
    max: numberable(maximum) ? +maximum : undefined
  };
}

/**
 * 范围的文字显示函数，使用该函数必须保证首参的值为numberable
 * @param {string} numberableValue - 一个numberable值
 * @param {Range} range - {min, max}对象
 * @param {string} prefix - 前缀
 */
function renderRange(numberableValue, range, prefix) {
  let { min, max } = range,
    result = true;
  if (min != undefined && max == undefined) {
    result = +numberableValue >= min || prefix + hint._not_less_than + min;
  }
  if (min == undefined && max != undefined) {
    result = +numberableValue <= max || prefix + hint._not_greater_than + max;
  }
  if (min != undefined && max != undefined) {
    result =
      (+numberableValue >= min && +numberableValue <= max) ||
      prefix + hint._range_in + min + "~" + max;
  }
  return result;
}

export default validators;
