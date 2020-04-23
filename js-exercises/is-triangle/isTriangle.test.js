import { isTriangle } from './isTriangle';

describe('isTriangle', () => {
  it('should return true if triangle can be formed given three lines', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(3, 4, 6)).toBe(true);
    expect(isTriangle(10, 14, 5)).toBe(true);
  });

  it('should return false if triangle can not be formed given three lines', () => {
    expect(isTriangle(1, 4, 2)).toBe(false);
    expect(isTriangle(5, 4, 1)).toBe(false);
    expect(isTriangle(11, 45, 65)).toBe(false);
    expect(isTriangle(1, 4, 2)).toBe(false);
  });

  it('should throw error if input are not positive number', () => {
    expect(() => isTriangle()).toThrowError();
    expect(() => isTriangle(5, 6, -1)).toThrowError();
    expect(() => isTriangle('5', 6, 1)).toThrowError();
    expect(() => isTriangle(5, 6, [1])).toThrowError();
    expect(() => isTriangle(5, 6, { 'value': 1 })).toThrowError();
  })
});
