import { cacheFunction } from './cacheFunction';

describe('cacheFunction', () => {
  it('should return a function', () => {
    expect(typeof cacheFunction()).toBe('function');
  });
  it('The cached function should return the correct result', () => {
    const foo = x => (x * x);
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(5)).toBe(25);
  });
  it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
    const foo = jest.fn();
    const myCachedFunction = cacheFunction(foo);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    expect(foo).toHaveBeenCalledTimes(2);
  });
  it('should cache results and not take updated data', () => {
    const users = [
      {
        id: 121,
        name: 'Abc',
        age: 20,
      },
      {
        id: 117,
        name: 'Xyz',
        age: 23,
      }
    ];

    const getUserData = (id) => users.filter(user => user.id === id);

    const cachedUsersData = cacheFunction(getUserData);
    expect(cachedUsersData(121).name).toBe('Abc');

    users.filter(user => user.id === 121).name = 'Nothing';
    expect(getUserData(121).name).toBe('Nothing');
    expect(cachedUsersData(121).name).toBe('Abc');
  });
  it('should throw error if params are incorrect', () => {
    expect(() => cacheFunction()).toThrow();
    expect(() => cacheFunction({})).toThrow();
  });
});
