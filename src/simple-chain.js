import { NotImplementedError } from '../extensions/index.js';



export default
    {
        chain: [],
        getLength() {
            return this.chain.length;
        },
        addLink(value) {
            if (value == null) {
                this.chain.push(`( ${null} )`)
            } else {
                this.chain.push(`( ${value} )`);
            }
            return this;
        },
        removeLink(position) {
            if (typeof position != 'number' || position <= 0 || position > this.chain.length) {
                this.chain.length = 0;
                throw new Error("You can't remove incorrect link!")
            }
            if (position-1 < this.chain.length) {
                while (position-1 < this.chain.length - 1) {
                    this.chain[position-1] = this.chain[position];
                    position++;
                }
            }
            this.chain.length = this.chain.length - 1;
            return this;
        },
        reverseChain() {
            this.chain.reverse();
            return this;
        },
        finishChain() {
            let a = this.chain.join('~~');
            this.chain.length = 0;
            return a;
        }
    };