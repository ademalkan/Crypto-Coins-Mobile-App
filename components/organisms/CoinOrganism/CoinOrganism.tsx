import React from 'react';
import { Image } from 'expo-image';

import { Text, TouchableOpacity, View } from 'react-native';
import styles from "./CoinOrganism.styles";
import Price from '../../atoms/Price/Price';
import Symbol from '../../atoms/Symbol/Symbol';
import Name from '../../atoms/Name/Name';
import { useNavigation } from 'expo-router';
import { Button } from '../../atoms/Button/Button';

type CryptoCoinProps = {
  name: string;
  symbol: string;
  price: number;
  image: string;
  id: string;
};

const CoinOrganism: React.FC<CryptoCoinProps> = ({ name, symbol, price, image, id }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CoinDetail', { coin: id });
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
          <Button style={{ marginLeft: 10 }} onPress={handlePress} text="Add Favorite" />
        </View>
      </View>

      <Price price={price} />
    </View>
  );
};

export default CoinOrganism;
