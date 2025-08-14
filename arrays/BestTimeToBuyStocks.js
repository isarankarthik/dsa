function findMaximumProfit(prices)
{
    let maximumProfit = 0;
    let minimumPrice = 0;
    for (let i = 0; i<prices.length; i++) {
        if (prices[i] < minimumPrice) {
            minimumPrice = prices[i];
        } else if (prices[i] - minimumPrice > maximumProfit) {
            maximumProfit = prices[i] - minimumPrice;
        }
    }
    return maximumProfit;
}