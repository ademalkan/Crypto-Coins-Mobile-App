import { CryptoNewsI } from "../interfaces/CryptoNewsInterface";

export const fetchCryptoNews = async () => {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/news');
    const responseData = await response.json();
    const data: CryptoNewsI[] = responseData.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};