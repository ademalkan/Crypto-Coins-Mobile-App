export const fetchCoinDetail = async (coin: string) => {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};