import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import styles from './Coin.styles';
import Price from '../../atoms/Price/Price';
import Symbol from '../../atoms/Symbol/Symbol';
import Name from '../../atoms/Name/Name';
import { useNavigation } from 'expo-router';
import Button from '../../atoms/Button/Button';
import { Image } from 'expo-image';
import { useFavorites } from '../../../context/FavoritesContext';
import { useCoinContext } from '../../../context/CoinContext';
import { CoinI } from '../../../interfaces/CoinInterface';


const CoinOrganism: React.FC<CoinI> = ({ name, symbol, price, image, id }) => {
  const navigation = useNavigation();


  const { favoriteCoins, addFavoriteCoin, removeFavoriteCoin } = useFavorites();
  const { addCoin, removeCoin } = useCoinContext();
  const isFavorite = favoriteCoins.some((coin) => coin.id === id);

  const handlePress = () => {
    navigation.navigate('CoinDetail', { coin: id } as { id: string });
  };

  const handleAddFavorite = () => {
    const coin = { id, name, symbol, price, image };

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
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.image}
          source={require('./../../../assets/images/logo.png')}
          contentFit="cover"
          transition={1000}
        />
      </TouchableOpacity>

      <View>
        <Name name={name} />
        <Symbol symbol={symbol} />
        <View style={styles.options}>
          <Button onPress={handlePress} text="Detail" />
          <Button
            onPress={handleAddFavorite}
            text={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          />
        </View>
      </View>

      <Price price={price} />
    </View>
  );
};

export default CoinOrganism;
