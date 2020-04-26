// Write your own test cases.

import { forEach } from "./arrayUtils";

describe('forEach', () => {
    test("should return results as expected - without explicit 'this' argument", () => {
        const array = [1, 2, 3, 4];
        const arrayResult = [];
        const pushToArrayResult = (arg) => arrayResult.push(arg);

        forEach(array, pushToArrayResult);
        expect(arrayResult).toBe(array.length);
    });
    test("should return results as expected - with explicit 'this' argument", () => {
        class Counter {
            constructor() {
                this.sum = 0;
                this.count = 0;
            }
            add(array) {
                forEach(array, (entry) => {
                    this.sum += entry;
                    ++this.count;
                }, this);
            }
        }

        const obj = new Counter()
        obj.add([2, 5, 9]);

        expect(obj.count).toBe(3);
        expect(obj.sum).toBe(16);
    });
    test("should throw error if params are not correct", () => {
        expect(() => forEach({}, () => { })).toThrow();
        expect(() => forEach([])).toThrow();
    });
})