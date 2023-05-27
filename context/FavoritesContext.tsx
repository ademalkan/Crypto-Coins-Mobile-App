import React, { createContext, useState, useContext } from 'react';
import { CoinI } from '../interfaces/CoinInterface';


type FavoritesContextType = {
  favoriteCoins: CoinI[];
  addFavoriteCoin: (coin: CoinI) => void;
  removeFavoriteCoin: (coinId: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType>({
  favoriteCoins: [],
  addFavoriteCoin: () => { },
  removeFavoriteCoin: () => { },
});

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteCoins, setFavoriteCoins] = useState<CoinI[]>([]);

  const addFavoriteCoin = (coin: CoinI) => {
    setFavoriteCoins((prevCoins) => [...prevCoins, coin]);
  };

  const removeFavoriteCoin = (coinId: string) => {
    setFavoriteCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== coinId));
  };

  const contextValue: FavoritesContextType = {
    favoriteCoins,
    addFavoriteCoin,
    removeFavoriteCoin,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
