import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
   let index
   while (email.search(/@/) != -1) {
   index = email.search(/@/)
email = email.slice(index+1)}
return  email;
}
