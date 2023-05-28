import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import { useCoinContext } from '../../../context/CoinContext';
import { useFavorites } from '../../../context/FavoritesContext';
import Coins from '../../organisms/Coins/Coins';

export default function CoinListTemplates() {
  const { coins } = useCoinContext();
  const { favoriteCoins } = useFavorites();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const memoizedFavoriteCoins = useMemo(() => favoriteCoins, [favoriteCoins]);
  const memoizedCoins = useMemo(() => coins, [coins]);

  return (
    <View>
      <SearchInput handleSearch={handleSearch} searchQuery={searchQuery} />
      {memoizedFavoriteCoins[0] && (
        <Coins
          coins={memoizedFavoriteCoins}
          searchQuery={searchQuery}
          title="Favorite Coins"
          emptyText="You have not found any favorite coins yet"
        />
      )}
      <Coins
        coins={memoizedCoins}
        searchQuery={searchQuery}
        title="Coins"
        emptyText="You have not found any coins yet"
      />
    </View>
  );
}
