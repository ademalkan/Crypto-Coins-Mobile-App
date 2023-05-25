export const fetchCoinsAll = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
