import { fetchCoinDetail } from './fetchCoinDetail';

describe('fetchCoinDetail', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch coin detail successfully', async () => {
    const coin = 'bitcoin';
    const mockResponse = [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        description: 'Bitcoin is a decentralized digital currency, without a central bank or single administrator.',
        market_cap_rank: 1,
      },
    ];

    const mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    (global as any).fetch = mockFetch;

    const data = await fetchCoinDetail(coin);

    expect(mockFetch).toHaveBeenCalledWith(`https://api.coingecko.com/api/v3/coins/${coin}`);
    expect(data).toEqual(mockResponse);
  });

  it('should handle fetch error', async () => {
    const coin = 'bitcoin';
    const mockError = new Error('Fetch failed');

    const mockFetch = jest.fn().mockRejectedValue(mockError);

    (global as any).fetch = mockFetch;

    await expect(fetchCoinDetail(coin)).rejects.toThrowError(mockError);
    expect(mockFetch).toHaveBeenCalledWith(`https://api.coingecko.com/api/v3/coins/${coin}`);
  });
});
