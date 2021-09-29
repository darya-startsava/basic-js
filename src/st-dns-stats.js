import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    let obj = {};
    domains = domains.map(item => item.split('.').reverse());
    console.log(domains);
    for (let i = 0; i < domains.length; i++) {
        let str = '';
        for (let j = 0; j < domains[i].length; j++) {
            str += '.' + domains[i][j];
            if (obj[str]) {
                obj[str]++;
            } else {
                obj[str] = 1;
            }
        }
    }
    return obj;
}
