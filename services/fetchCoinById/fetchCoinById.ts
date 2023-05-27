export const fetchCoinById = async (coinId: string) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?ids=${coinId}&vs_currency=usd&order=market_cap_desc`
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    throw error;
  }
}
