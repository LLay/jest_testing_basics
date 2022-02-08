// https://jestjs.io/docs/mock-functions

const {
  greaterThan05,
  rand
} = require('./mocking')

test('works for values <= 0.5', () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(0.7);

  expect(greaterThan05(myMock)).toBeTruthy()
})

test('works for values > 0.5', () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(0.2);

  expect(greaterThan05(myMock)).toBeFalsy()
})

test('works for different sequential values', () => {
  const myMock = jest.fn();
  myMock
    .mockReturnValueOnce(0.2)
    .mockReturnValueOnce(0.8)
    .mockReturnValue(0.2);

  expect(greaterThan05(myMock)).toBeFalsy()
  expect(greaterThan05(myMock)).toBeTruthy()
  expect(greaterThan05(myMock)).toBeFalsy()
  expect(greaterThan05(myMock)).toBeFalsy()
})
