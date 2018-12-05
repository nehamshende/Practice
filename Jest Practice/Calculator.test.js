let Calculator = require('./Calculator');

describe('Addition', () =>
{
    test('adds 1 + 2 to equal 3', () =>
    {
        expect(Calculator.add(1,2)).toBe(3);
    })
    test('adds 2 + undefined to equal 2', () =>
    {
        expect(Calculator.add(2,undefined)).toBe(2);
    })
    test('adds undefined + 2 to equal 2', () =>
    {
        expect(Calculator.add(undefined,2)).toBe(2);
    })
})

test('subtracts 2 - 2 to equal 0', () =>
{
    expect(Calculator.sub(2,2)).toBe(0);
})

test('multiplies 2,2 to equal 4', () =>
{
    expect(Calculator.mul(2,2)).toBe(4);
})