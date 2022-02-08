// https://jestjs.io/docs/setup-teardown

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
describe('Checking Names', () => {
  // beforeEach(() => initDatabase());
  // afterEach(() => closeDatabase());

  // beforeAll(() => initDatabase());
  // afterAll(() => closeDatabase());
  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});
