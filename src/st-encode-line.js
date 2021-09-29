import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    let newStr = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        while (str[i] == str[i + 1]) {
            i++;
            ++count;
        }
        count == 1 ? newStr += str[i] : newStr += count + str[i];
        count=1;
    }
    return newStr;
}