const {chaChaSlide, aOrder, uppercase, testPrime, unique_char, deez, sleepyTime} = require("../index.js");

test('chacha', () => {
  expect(chaChaSlide(4321)).toEqual("1234");
});

test('aOrder', () => {
  expect(aOrder("weebmaster")).toHaveLength(10);
});

test('Chris needs to go to bed', () => {
  expect(sleepyTime()).toBeTruthy();
});

test('assignments to have been called', () => {
  const assignments = jest.fn();
  deez(assignments);
  expect(assignments).toHaveBeenCalled();
});

test('assigments returned', () => {
  const assignments = jest.fn(() => true);
  deez(assignments);
  expect(assignments).toHaveReturned();
});