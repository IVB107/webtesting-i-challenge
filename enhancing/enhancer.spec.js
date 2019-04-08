const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
  describe('repair', () => {
    const item = {
      name: "Forrest",
      enhancement: 12,
      durability: 94
    }

    it('Should return an object', () => {
      const isObject = repair(item);
      expect(typeof isObject === 'object' && isObject !== null).toBeTruthy();
    });

    it('Should return an object with durability set to 100', () => {
      const repaired = repair(item);
      expect(repaired.durability).toBe(100);
    })
  })
})