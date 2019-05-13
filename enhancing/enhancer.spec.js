const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('suceed() method', () => {
            it('should return an item with durablity 100', () => {
                expect(enhancer.succeed({
                name: 'item1',
                durability: 43,
                enhancement: 12
            })).toEqual({ name: 'item1', durability: 100, enhancement: 12 })
        })
    })
})