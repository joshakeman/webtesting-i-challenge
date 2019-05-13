const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('repair() method', () => {
            it('should return an item with durablity 100', () => {
                expect(enhancer.repair({
                name: 'item1',
                durability: 43,
                enhancement: 12
            })).toEqual({ name: 'item1', durability: 100, enhancement: 12 })
        })
    })

    describe('succeed() method', () => {
        it('should return an item with enhancement +1', () => {
            expect(enhancer.succeed({
            name: 'item2',
            durability: 95,
            enhancement: 12
        })).toEqual({ name: 'item2', durability: 95, enhancement: 13 })
    })

    it('if item already has enhancement of 20, no change', () => {
        expect(enhancer.succeed({
        name: 'item2',
        durability: 45,
        enhancement: 20
    })).toEqual({ name: 'item2', durability: 45, enhancement: 20 })
})
})
})