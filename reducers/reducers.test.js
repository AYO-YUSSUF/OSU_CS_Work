'use strict';

const reducers = require('./reducers.js');

test('Test 1. sum of an array of numbers using reducer1', () => {
    expect([1, 2, 3].reduce(reducers.reducer1)).toBe(6);
});

test('Test 2. reducer1 skips all non-numeric values', () => {
    expect([1, 2, true, 'a', 4, true].reduce(reducers.reducer1)).toBe(7);
});

test('Test 3. reducer1 skips a non-numeric value even if it is the first element', () => {
    expect(['a', 1, 2, 3].reduce(reducers.reducer1)).toBe(6);
});

test('Test 4. reducer1 returns 0 if all the elements are non-numeric', () => {
    expect(['a', 'b'].reduce(reducers.reducer1)).toBe(0);
});

test('Test 5. sum of an array of numbers using reducer2', () => {
    expect([1, 2, 3].reduce(reducers.reducer2)).toBe(6);
});

test('Test 6. reducer2 throws TypeError exception for a non-numeric value', () => {
    expect(() => { [1, 2, true, 'a', 4, true].reduce(reducers.reducer2) }).toThrow(TypeError);
});

test('Test 7. reducer2 throws TypeError exception for a non-numeric value even when it is the first element', () => {
    expect(() => { ['a', 1, 2, 3].reduce(reducers.reducer2) }).toThrow(TypeError);
});
