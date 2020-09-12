import Character from '../app';

/* test('Character test', () => {
    new Character
    expect(Math.max(1, 5, 10)).toBe(10);
});
*/


describe('damage tests: ', () => {
  test.each([
    ['damage test(1)', 90, 10],
    ['damage test(2)', 100, 0],
    ['damage test(3)', 101, 0],
  ])(
    ('-> %s'),
    (name, inputData, expectation) => {
      const obj = new Character('Jonh', 'Bowman');
      obj.damage(inputData);

      expect(obj.health).toEqual(expectation);
    },
  );
});
