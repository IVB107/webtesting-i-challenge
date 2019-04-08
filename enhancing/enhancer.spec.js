const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {

  const item = {
    name: "Test",
    enhancement: 16,
    durability: 93
  }
  const string = "Yo, check it I'm a string!"

  describe('repair', () => {
    let repaired = repair(item);

    it('Should return an object', () => {
      expect(typeof repair(item) === 'object' && repair(item) !== null).toBeTruthy();
    });

    it('Should return an object with durability set to 100', () => {
      expect(repaired.durability).toBe(100);
    })
  })

  describe('succeed', () => {
    let success = succeed(item);

    it('Should have an enhancement prop', () => {
      expect(success.enhancement).toBeDefined();
    })

    it('Should have an integer assigned to enhancement', () => {
      expect(typeof success.enhancement).toBe('number');
    })

    it('Should increase enhancement by 1 (if < 20)', () => {
      expect(success.enhancement).toBe(item.enhancement + 1);
    })
  })

  describe('fail', () => {
    let failed = fail(item);
  
    it('Should have an enhancement prop', () => {
      expect(failed.enhancement).toBeDefined();
    })

    it('Should have a durability prop', () => {
      expect(failed.durability).toBeDefined();
    })

    it('Should have integers assigned to enhancement and durability', () => {
      expect(typeof failed.enhancement && typeof failed.durability).toBe('number');
    })

    it('Should decrease durability by 5 if enhancement is < 15', () => {
      if (failed.enhancement < 15){
        expect(failed.durability).toBe(item.durability - 5);
      }
    })

    it('Should decrease durability by 10 if enhancement is >= 15', () => {
      if (failed.enhancement >= 15) {
        expect(failed.durability).toBe(item.durability - 10);
      }
    })

    it('Should decrease enhancement by 1 if enhancement is >= 17', () => {
      if (item.enhancement >= 17) {
        expect(failed.enhancement).toBe(item.enhancement - 1);
      }
    })

  })

})