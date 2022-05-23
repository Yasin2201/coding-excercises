const fibonacci = require('./fibonacci');

describe("Fibonacci function", () => {
    test("Less than 1 should return input", () => {
        expect(fibonacci(0)).toEqual(0);
    });

    test("Equal to 1 should return input", () => {
        expect(fibonacci(1)).toEqual(1);
    });

    test("n = 2 should === 1", () => {
        expect(fibonacci(2)).toEqual(1);
    });

    test("n = 5 should === 5", () => {
        expect(fibonacci(5)).toEqual(5);
    });

    test("n = 9 should === 34", () => {
        expect(fibonacci(9)).toEqual(34);
    });
});