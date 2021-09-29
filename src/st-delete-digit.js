import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
    n = n.toString();
    for (let i = 0; i < n.length - 1; i++) {
        if (n[i] < n[i + 1]) {
            return +(n.substring(0, i) + n.slice(i + 1));
        }
    } return +n.substring(0, n.length - 1);
}
