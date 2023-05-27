import { fetchCoinsAll } from './fetchCoins';

describe('fetchCoinsAll', () => {
  beforeAll(() => {
    (global as any).fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch all coins successfully', async () => {
    const mockResponse = [
      {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
      },
      {
        id: 'ethereum',
        symbol: 'eth',
        name: 'Ethereum',
      },
    ];
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    (global as any).fetch.mockImplementation(mockFetch);

    const data = await fetchCoinsAll();

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc'
    );
    expect(data).toEqual(mockResponse);
  });

  it('should handle fetch error', async () => {
    const mockError = new Error('Fetch failed');
    const mockFetch = jest.fn(() =>
      Promise.reject(mockError)
    );
    (global as any).fetch.mockImplementation(mockFetch);

    try {
      await fetchCoinsAll();
    } catch (error) {
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc'
      );
      expect(error).toEqual(mockError);
    }
  });
});