const add = require('./StringCalculator')

describe('String Calculator', () => {
    test('should return 0 for provided empty string', () => {
        expect(add('')).toBe(0)
    })

    test("should return the number for a single input", () => {
        expect(add("1")).toBe(1);
    });

    test("should return the number for a multiple number input", () => {
        expect(add("123")).toBe(123);
    });

    test("should return the number for multiple numbers separated by comma", () => {
        expect(add("1,2,3")).toBe(6)
    })

    test("should return number for new lines between numbers", () => {
        expect(add("1\n2,3")).toBe(6)
    })

    test("should handle the custom delimeters", () => {
        expect(add("//;\n1;2")).toBe(3)
    })

    test("should throw an error for negative numbers", () => {
        expect(() => add("-1,2,-3")).toThrow(
            "Negative numbers not allowed: -1, -3"
        );
    });
})