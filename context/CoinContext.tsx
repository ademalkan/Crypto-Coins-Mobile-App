import React, { createContext, useEffect, useState, useContext } from 'react';
import { fetchCoinsAll } from '../services/fetchCoins';
import { fetchCoinById } from '../services/fetchCoinById';
import { CoinI } from '../interfaces/CoinInterface';



type CoinContextType = {
  coins: CoinI[];
  isLoading: boolean;
  addCoin: (coinId: string) => void;
  removeCoin: (coinId: string) => void;
};

const CoinContext = createContext<CoinContextType>({
  coins: [],
  isLoading: false,
  addCoin: () => { },
  removeCoin: () => { },
});

export const useCoinContext = () => useContext(CoinContext);

export const CoinProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coins, setCoins] = useState<CoinI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCoins = async () => {
      setIsLoading(true);
      try {
        const coinsData = await fetchCoinsAll();
        setCoins(coinsData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const addCoin = (coinId: string) => {
    const fetchCoin = async () => {
      try {
        const coinData = await fetchCoinById(coinId);
        setCoins((prevCoins) => [coinData, ...prevCoins]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoin();
  };

  const removeCoin = (coinId: string) => {
    setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== coinId));
  };

  const contextValue: CoinContextType = {
    coins,
    isLoading,
    addCoin,
    removeCoin,
  };

  return <CoinContext.Provider value={contextValue}>{children}</CoinContext.Provider>;
};
