import React, { createContext, useEffect, useState } from 'react';
import { CryptoNewsI } from '../interfaces/CryptoNewsInterface';
import { fetchCryptoNews } from '../services/fetchCryptoNews';

interface CryptoNewsContextValue {
  cryptoNews: CryptoNewsI[];
}

interface CryptoNewsProviderProps {
  children: React.ReactNode;
}

export const CryptoNewsContext = createContext<CryptoNewsContextValue | undefined>(undefined);

export const CryptoNewsProvider: React.FC<CryptoNewsProviderProps> = ({ children }) => {
  const [cryptoNews, setCryptoNews] = useState<CryptoNewsI[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetchCryptoNews() || [];
        setCryptoNews(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <CryptoNewsContext.Provider value={{ cryptoNews }}>
      {children}
    </CryptoNewsContext.Provider>
  );
};
