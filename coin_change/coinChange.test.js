const coinChange = require('./coinChange');

describe("coinChange function", () => {
    const coins = [100, 50, 20, 10, 5, 2, 1]

    test("0 input return empty object", () => {
        expect(coinChange(coins, 0)).toEqual({});
    });

    test("39 return least amount of coins from coins selection array as object", () => {
        expect(coinChange(coins, 39)).toEqual({
            '20p': 1,
            '10p': 1,
            '5p': 1,
            '2p': 2
        });
    });

    test("1033 return least amount of coins from coins selection array as object", () => {
        expect(coinChange(coins, 1033)).toEqual({
            '100p': 10,
            '20p': 1,
            '10p': 1,
            '2p': 1,
            '1p': 1
        });
    });
});

// '100p': 10,
// '20p': 1,
// '10p': 1,
// '1p': 3