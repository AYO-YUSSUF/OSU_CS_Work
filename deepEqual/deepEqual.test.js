'use strict';

const deepEqual = require('./deepEqual.js');

test('Test 1. Case 1: numbers with the same value are deep equal', () => {
    expect(deepEqual(23, 23)).toBe(true);
});

test('Test 2. Case 1: strings with the same value are deep equal', () => {
    expect(deepEqual('23', '23')).toBe(true);
});

test('Test 3. Case 2: a string and a number are not deep equal', () => {
    expect(deepEqual(23, '23')).toBe(false);
});

test('Test 4. Case 1: two true values are deep equal', () => {
    expect(deepEqual(true, true)).toBe(true);
});

test('Test 5. Case 2: true and false are not deep equal', () => {
    expect(deepEqual(true, false)).toBe(false);
});

test('Test 6. Case 1: null is deep equal to null', () => {
    expect(deepEqual(null, null)).toBe(true);
});

test('Test 7. Case 1: undefined is deep equal to undefined', () => {
    expect(deepEqual(undefined, undefined)).toBe(true);
});

test('Test 8. Case 2: null and undefined are not deep equal', () => {
    expect(deepEqual(undefined, null)).toBe(false);
});

const student1 = { name: 'Harvey', age: 23 };

test('Test 9. Case 3: an object and null are not deep equal', () => {
    expect(deepEqual(student1, null)).toBe(false);
});

test('Test 10. Case 4: an object is deep equal to itself', () => {
    expect(deepEqual(student1, student1)).toBe(true);
});

const student2 = { name: 'Harvey', age: 23 };

test('Test 11. Case 5.1: objects with same properties with same values are deep equal', () => {
    expect(deepEqual(student1, student2)).toBe(true);
});

const student3 = { age: 23, name: 'Harvey' };

test('Test 12. Case 5.1: objects with same properties are deep equal regardless of the order of the properties', () => {
    expect(deepEqual(student1, student3)).toBe(true);
});

const student4 = { name: 'Harvey' };

test('Test 13. Case 5.3: objects with different properties are not deep equal', () => {
    expect(deepEqual(student1, student4)).toBe(false);
});

const student5 = { name: 'Harvey', age: 23, major: 'CS' };

test('Test 14. Case 5.3: objects with different properties are not deep equal', () => {
    expect(deepEqual(student1, student5)).toBe(false);
});

const student6 = { name: 'Harvey', age: '23' };

test('Test 15. Case 5.3: objects with same properties but of different type are not deep equal', () => {
    expect(deepEqual(student1, student6)).toBe(false);
});

const student7 = { name: 'Harvey', age: 24 };

test('Test 16. Case 5.3: objects with same properties but with different values are not deep equal', () => {
    expect(deepEqual(student1, student7)).toBe(false);
});

const student8 = { name: 'Harvey', age: undefined };

test('Test 17. Case 5.3: objects with same properties but with different values are not deep equal', () => {
    expect(deepEqual(student1, student8)).toBe(false);
});

const majors1 = ['CS', 'Math'];

const majors2 = ['CS', 'Math'];

test('Test 18. Case 5.2: arrays with same elements in the same order are deep equal', () => {
    expect(deepEqual(majors1, majors2)).toBe(true);
});

const majors3 = ['CS', 'Biology'];

test('Test 19. Case 5.3: arrays with different elements are not deep equal', () => {
    expect(deepEqual(majors1, majors3)).toBe(false);
});

const majors4 = ['Math', 'CS'];

test('Test 20. Case 5.3: arrays with same elements but in different order are not deep equal', () => {
    expect(deepEqual(majors1, majors4)).toBe(false);
});

const nestedObj1 = { name: 'Harvey', address: { number: 23, street: 'Prospect Road', city: 'Austin' } };

const nestedObj2 = { name: 'Harvey', address: { number: 23, street: 'Prospect Road', city: 'Austin' } };

test('Test 21. Case 5.1: nested objects with same properties and same values are deep equal', () => {
    expect(deepEqual(nestedObj1, nestedObj2)).toBe(true);
});

const nestedObj3 = { name: 'Harvey', address: { number: 23, street: 'Prospect Road', city: 'New Orlens' } };

test('Test 22. Case 5.3: nested objects with same properties but different values are not deep equal', () => {
    expect(deepEqual(nestedObj1, nestedObj3)).toBe(false);
});

const nestedObj4 = { address: { number: 23, street: 'Prospect Road', city: 'Austin' }, name: 'Harvey' };

test('Test 23. Case 5.1: nested objects with same properties and same values are deep equal regardless of order of properties', () => {
    expect(deepEqual(nestedObj1, nestedObj4)).toBe(true);
});

const arr1 = [1, 2, [3, 4]];

const arr2 = [1, 2, [3, 4]];

test('Test 24. Case 5.2: arrays with nested arrays are deep equal if all elements are deep equal', () => {
    expect(deepEqual(arr1, arr2)).toBe(true);
});

const arr3 = [1, 2, [4, 3]];

test('Test 25. Case 5.3: arrays with nested arrays are not deep equal if any element is not deep equal', () => {
    expect(deepEqual(arr1, arr3)).toBe(false);
});


test('Test 26. Case 5.3: an array and a non-array object are never deep equal even if they are empty', () => {
    expect(deepEqual([],{})).toBe(false);
});

test('Test 27. Case 5.3: an array and a non-array object are never deep equal even if they are empty', () => {
    expect(deepEqual({},[])).toBe(false);
});

test('Test 28. Case 5.3: an array and a non-array object are never deep equal even if they have the same entries', () => {
    expect(deepEqual([1,2,3],{0:1,1:2,2:3})).toBe(false);
});
