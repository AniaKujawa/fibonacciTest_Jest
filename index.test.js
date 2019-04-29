const fib = require('./index');

test('Fib 1 gives 1 ', () => {
    expect(fib(1)).toEqual([1]);
  });

  test('Fib 0 gives 0 ', () => {
    expect(fib(0)).toEqual([0]);
  });

  test('Fib 2 gives 0 ', () => {
    expect(fib(2)).toEqual([1]);
  });

  test('Fib with not number argument gives statement ', () => {
      expect(fib('piesel')).toEqual('You must enter a positive number')
  })

  test('Fib with arg > 2 gives correct value ', () => {
    expect(fib(14)).toEqual([377])
})