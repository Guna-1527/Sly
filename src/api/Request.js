const Request = {
    fetchTrending: "search/trending",
    fetchTable: "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en",
    fetchMarket: "exchanges/list",
}

export default Request;

