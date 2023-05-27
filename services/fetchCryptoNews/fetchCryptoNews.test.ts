import { fetchCryptoNews } from './fetchCryptoNews';

describe('fetchCryptoNews', () => {
  beforeAll(() => {
    (global as any).fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch crypto news successfully', async () => {
    const mockResponse = {
      data: [
        {
          id: '1',
          title: 'Crypto News 1',
          // other properties...
        },
        {
          id: '2',
          title: 'Crypto News 2',
        },
      ],
    };
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
    (global as any).fetch.mockImplementation(mockFetch);

    const data = await fetchCryptoNews();

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.coingecko.com/api/v3/news'
    );
    expect(data).toEqual(mockResponse.data);
  });

  it('should handle fetch error', async () => {
    const mockError = new Error('Fetch failed');
    const mockFetch = jest.fn(() =>
      Promise.reject(mockError)
    );
    (global as any).fetch.mockImplementation(mockFetch);

    try {
      await fetchCryptoNews();
    } catch (error) {
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.coingecko.com/api/v3/news'
      );
      expect(error).toEqual(mockError);
    }
  });
});

