// https://jestjs.io/docs/asynchronous

// Working with async data
const { fetchUser } = require('./async');

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  const data = await fetchUser();
  expect(data.name).toEqual('Leanne Graham');
});

// Promise
test('User fetched name should be Leanne Graham', () => {
  return fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
});
