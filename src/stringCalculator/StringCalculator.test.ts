const add = require('./StringCalculator')

describe('String Calculator', () => {
    test('should return 0 for provided empty string', () => {
        expect(add('')).toBe(0)
    })

    test("should return the number for a single input", () => {
        expect(add("1")).toBe(1);
    });

    test("should return the number for a multiple number input", () => {
        expect(add("123")).toBe(6);
    });
})