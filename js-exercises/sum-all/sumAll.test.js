import { sumAll } from './sumAll';

describe('sumAll', () => {
  test('should return a number', () => {
    expect(typeof sumAll([1, 4])).toEqual('number');
  });
  test('should return correct number', () => {
    expect(sumAll([1, 4])).toBe(10);
    expect(sumAll([4, 1])).toBe(10);
    expect(sumAll([5, 10])).toBe(45);
    expect(sumAll([10, 5])).toBe(45);
    expect(sumAll([-5, -1])).toBe(-15);
    expect(sumAll([-1, -5])).toBe(-15);
    expect(sumAll([5, -5])).toBe(0);
    expect(sumAll([100, -100])).toBe(0);
    expect(sumAll([0, 0])).toBe(0);
    expect(sumAll([2, 0.5])).toBe(3);
  });
  test('should throw error in case params are not according to input contract', () => {
    expect(() => sumAll([0, 0, 0])).toThrowError();
    expect(() => sumAll(["0", 0])).toThrowError();
    expect(() => sumAll([0])).toThrowError();
    expect(() => sumAll([])).toThrowError();
    expect(() => sumAll({})).toThrowError();
    expect(() => sumAll("00")).toThrowError();
    expect(() => sumAll(new Array())).toThrowError();
  });
});
