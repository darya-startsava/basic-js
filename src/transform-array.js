import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    } if (arr.length == 0) return [];
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        switch (arr[index]) {
            case '--discard-next': index++;
                break;
            case '--discard-prev': if (arr[index-2] != '--discard-next') newArr.pop();
                break;
            case '--double-next': if (index< arr.length-1) newArr.push(arr[index + 1]);
                break;
            case '--double-prev': if (index > 0 && arr[index-2] != '--discard-next') newArr.push(arr[index - 1]);
                break;
            default: newArr.push(arr[index]);
        }
    }
    return newArr;
}

