import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import SearchInput from '../../molecules/SearchInput/SearchInput';
import { useFavorites } from '../../../context/FavoritesContext';
import Coins from '../../organisms/Coins/Coins';

export default function FavoriteCoinListTemplates() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const { favoriteCoins } = useFavorites();

  const memoizedSearchInput = useMemo(() => (
    <SearchInput handleSearch={handleSearch} searchQuery={searchQuery} />
  ), [handleSearch, searchQuery]);

  return (
    <View>
      {favoriteCoins[0] && memoizedSearchInput}
      <Coins title="" coins={favoriteCoins} emptyText="You have not added any favorite coins yet" searchQuery={searchQuery} />
    </View>
  );
}
