import React, { useState } from 'react';
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

  return (
    <View>
      <SearchInput handleSearch={handleSearch} searchQuery={searchQuery} />
      {favoriteCoins[0] && <Coins coins={favoriteCoins} searchQuery={searchQuery} title="Favorite Coins" emptyText="You have not find any favorite coins yet" />}
      <Coins coins={coins} searchQuery={searchQuery} title="Coins" emptyText="You have not find any coins yet" />
    </View>
  );
}
