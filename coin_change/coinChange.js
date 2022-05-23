function coinChange(coinsArray, n) {
    let requiredCoins = {};

    for (i = 0; i < coinsArray.length; i++) {
        if (Math.floor(n / coinsArray[i])) {
            requiredCoins[`${coinsArray[i]}p`] = Math.floor(n / coinsArray[i]);
            n -= coinsArray[i] * Math.floor(n / coinsArray[i])
        }
    }

    return requiredCoins
}

module.exports = coinChange;