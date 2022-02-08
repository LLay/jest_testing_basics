const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  const actual = functions.add(2, 2)
  const expected = 4

  expect(actual).toBe(expected);
});
