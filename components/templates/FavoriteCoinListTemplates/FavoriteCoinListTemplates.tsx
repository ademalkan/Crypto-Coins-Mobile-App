import React, { useState } from 'react';
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

  return (
    <View>
      {favoriteCoins[0] && <SearchInput handleSearch={handleSearch} searchQuery={searchQuery} />}
      <Coins title="" coins={favoriteCoins} emptyText="You have not any added favorite coins yet" searchQuery={searchQuery} />
    </View>
  );
}
