import axios from 'axios';
class CoinMarketApi {
    constructor() {
        this.baseUrl = 'https://api.coinmarketcap.com/v1';
    }
    async getAll(limit: number = 100) {
        return axios.get(`${this.baseUrl}/ticker/?limit=${limit}`)
    }
}

export const CoinMarket = new CoinMarketApi();