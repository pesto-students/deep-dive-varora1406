import { sumPrimes } from './sumPrimes';

describe('sumPrimes', () => {
  test('should return a number', () => {
    expect(typeof sumPrimes(10)).toEqual('number');
    expect(typeof sumPrimes(setTimeout(() => { }, 500))).toEqual('number');
  });
  test('should return the correct output', () => {
    expect(sumPrimes(10)).toBe(17);
    expect(sumPrimes(977)).toBe(73156);
  });
  test('should throw error', () => {
    expect(() => sumPrimes()).toThrowError();
    expect(() => sumPrimes([])).toThrowError();
    expect(() => sumPrimes("/t")).toThrowError();
    expect(() => sumPrimes("\t")).toThrowError();
    expect(() => sumPrimes(Number.POSITIVE_INFINITY)).toThrowError();
    expect(() => sumPrimes(Number.NEGATIVE_INFINITY)).toThrowError();
  });
});
