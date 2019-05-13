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

    describe('fail() method', () => {
            it('if enhancement < 15, durability goes down by 5', () => {
                expect(enhancer.fail({
                name: 'item1',
                durability: 95,
                enhancement: 12
            })).toEqual({ name: 'item1', durability: 90, enhancement: 12 })
        })

            it('enhancement > 14, durability goes down by 10', () => {
                expect(enhancer.fail({
                name: 'item1',
                durability: 95,
                enhancement: 16
            })).toEqual({ name: 'item1', durability: 85, enhancement: 16 })
        })
            it('enhancement > 16, enhancement goes down by 1', () => {
                expect(enhancer.fail({
                name: 'item1',
                durability: 95,
                enhancement: 19
            })).toEqual({ name: 'item1', durability: 85, enhancement: 18 })
        })
    })

    describe('get() method', () => {
            it('put enhancement level before name of item', () => {
                expect(enhancer.get({
                name: 'Sword',
                durability: 43,
                enhancement: 12
            })).toEqual({ name: '[+12] Sword', durability: 43, enhancement: 12 })
        })
    })
})