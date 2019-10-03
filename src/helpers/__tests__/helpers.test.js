import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('returns null if fed a single argument', () => {
    expect(helpers.multiply(2)).toBe(null);
  })
  it('multiplies two negative numbers correctly', () =>{
    expect(helpers.multiply(-4,-6)).toBe(24);
  })
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.multiply('4','6')).toThrow();
  })
  it('can multiply three numbers', () => {
    expect(helpers.multiply(1,2,3)).toBe(6);
  })
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });

  it('throws if the age is a string', () => {
    expect(helpers.personMaker('peter', '4'))
    .not.toMatchObject({
      id: '123',
      name: 'peter',
      age: 4,
    });
  });

  it('throws if only one parameter is passed', () => {
    expect(helpers.personMaker('peter'))
    .not.toMatchObject({
      id: '123',
      name: 'peter',
      age: 4,
    });
  });

  // write more tests! <===========================================
});

describe('divide', () => {
  it('returns null if fed no argument', () => {
    expect(helpers.divide()).toBe(null);
  })
  it('returns positive number when a negative number is divided by another negative number', () =>{
    expect(helpers.divide(-16,-4)).toBe(4);
  })
})