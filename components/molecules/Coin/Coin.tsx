import React, { useMemo } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './Coin.styles';
import Price from '../../atoms/Price/Price';
import Symbol from '../../atoms/Symbol/Symbol';
import Name from '../../atoms/Name/Name';
import { useNavigation } from 'expo-router';
import Button from '../../atoms/Button/Button';
import { useFavorites } from '../../../context/FavoritesContext';
import { useCoinContext } from '../../../context/CoinContext';
import { CoinI } from '../../../interfaces/CoinInterface';
import SubTitleWithPrice from '../../atoms/SubTitleWithPrice/SubTitleWithPrice';
import ImageAtom from '../../atoms/ImageAtom/ImageAtom';

const CoinOrganism: React.FC<CoinI> = ({ name, symbol, price, image, id, total_volume, price_change_24h }) => {
  const navigation = useNavigation();

  const memoizedName = useMemo(() => name, []);
  const memoizedSymbol = useMemo(() => symbol, []);
  const memoizedImage = useMemo(() => image, []);
  const memoizedTotalVolume = useMemo(() => total_volume, []);
  const memoizedPriceChange24h = useMemo(() => price_change_24h, []);
  const memoizedPrice = useMemo(() => price, []);

  const { favoriteCoins, addFavoriteCoin, removeFavoriteCoin } = useFavorites();
  const { addCoin, removeCoin } = useCoinContext();
  const isFavorite = useMemo(() => favoriteCoins.some((coin) => coin.id === id), [favoriteCoins, id]);

  const handlePress = () => {
    navigation.navigate('CoinDetail', { coin: id } as { id: string });
  };

  const handleAddFavorite = () => {
    const coin = { id, name, symbol, price, image, total_volume, price_change_24h };

    if (isFavorite) {
      removeFavoriteCoin(id);
      addCoin(id);
    } else {
      addFavoriteCoin(coin);
      removeCoin(id);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.image} onPress={handlePress}>
        <ImageAtom image={memoizedImage} height={100} width={80} />
      </TouchableOpacity>

      <View>
        <Name name={memoizedName} />
        <Symbol symbol={memoizedSymbol} />
        <SubTitleWithPrice text="Total Volume:" price={memoizedTotalVolume} />
        <SubTitleWithPrice text="Price Change 24 Hours:" price={memoizedPriceChange24h} />
        <View style={styles.options}>
          <Button onPress={handlePress} text="Detail" />
          <Button
            onPress={handleAddFavorite}
            text={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          />
        </View>
      </View>

      <Price price={memoizedPrice} />
    </View>
  );
};

export default CoinOrganism;
