const add = require('./StringCalculator')

describe('String Calculator', () => {
    test('should return 0 for provided empty string', () => {
        expect(add('')).toBe(0)
    })
})