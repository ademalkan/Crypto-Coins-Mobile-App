import { fetchCoinById } from './fetchCoinById';

describe('fetchCoinById', () => {
  beforeAll(() => {
    (global as any).fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch coin data successfully', async () => {
    const coinId = 'bitcoin';
    const mockResponse = [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
        current_price: 26678,
        market_cap: 517062495375,
        market_cap_rank: 1,
        fully_diluted_valuation: 560131080875,
        total_volume: 7367806487,
        high_24h: 26816,
        low_24h: 26629,
        price_change_24h: -124.49119925799096,
        price_change_percentage_24h: -0.46447,
        market_cap_change_24h: -2465661877.3131104,
        market_cap_change_percentage_24h: -0.4746,
        circulating_supply: 19385306.0,
        total_supply: 21000000.0,
        max_supply: 21000000.0,
        ath: 69045,
        ath_change_percentage: -61.38493,
        ath_date: '2021-11-10T14:24:11.849Z',
        atl: 67.81,
        atl_change_percentage: 39218.8055,
        atl_date: '2013-07-06T00:00:00.000Z',
        roi: null,
        last_updated: '2023-05-27T15:38:35.438Z',
      },
    ];
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    (global as any).fetch.mockImplementation(mockFetch);

    const data = await fetchCoinById(coinId);

    expect(mockFetch).toHaveBeenCalledWith(
      `https://api.coingecko.com/api/v3/coins/markets?ids=${coinId}&vs_currency=usd&order=market_cap_desc`
    );
    expect(data).toEqual(mockResponse[0]);
  });

  it('should handle fetch error', async () => {
    const coinId = 'bitcoin';
    const mockError = new Error('Fetch failed');
    const mockFetch = jest.fn(() =>
      Promise.reject(mockError)
    );
    (global as any).fetch.mockImplementation(mockFetch);

    try {
      await fetchCoinById(coinId);
    } catch (error) {
      expect(mockFetch).toHaveBeenCalledWith(
        `https://api.coingecko.com/api/v3/coins/markets?ids=${coinId}&vs_currency=usd&order=market_cap_desc`
      );
      expect(error).toEqual(mockError);
    }
  });
});
