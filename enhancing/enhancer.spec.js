const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {

  describe('repair', () => {
    const item = {
      name: "Test",
      enhancement: 12,
      durability: 94
    }
    const string = "Yo, check it I'm a string!"

    it('Should return an object', () => {
      const isObject = repair(item);
      expect(typeof isObject === 'object' && isObject !== null).toBeTruthy();
    });

    it('Should return an object with durability set to 100', () => {
      const repaired = repair(item);
      expect(repaired.durability).toBe(100);
    })
  })

  describe('succeed', () => {
    const item = {
      name: "Test",
      enhancement: 12,
      durability: 94
    }

    it('Should have an enhancement prop', () => {
      const success = succeed(item);
      expect(success.enhancement).toBeDefined();
    })

    it('Should increase enhancement by 1 (if < 20)', () => {
      const success = succeed(item);
      expect(success.enhancement).toBe(13);
    })
  })

})