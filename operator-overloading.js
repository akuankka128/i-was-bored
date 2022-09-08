// Usage:
// let arr = new OperatorArray();
// arr.array += 0; // Push 0    [0]
// arr.array += 5; // Push 5    [0, 5]
// arr.array += 69; // Push 69  [0, 5, 69]
// arr.array -= 2; // Pop 2 elements  [0]

class OperatorArray {
    #_array;

    constructor() {
        class ValueArray extends Array {
            constructor() {
                super(...arguments);
            }

            // Make possible operator detection
            valueOf() {
                return '';
            }
        }
        
        this.#_array = new ValueArray();
    }

    get array() {
        return this.#_array;
    }

    // Thanks JS
    // '' + 1 = '1', '' - 1 = -1
    set array(value) {
        // Custom operator+= overload
        if (typeof value === 'string') {
            console.log(value);
            this.#_array.push(parseInt(value));
        }

        // Custom operator-= overload
        else {
            let loops = -value;
            for (let i = 0; i < loops; i++) {
                this.#_array.pop();
            }
        }
    }
}
