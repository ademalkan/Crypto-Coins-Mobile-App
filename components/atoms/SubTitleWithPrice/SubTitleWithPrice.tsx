import React from 'react';
import { View, Text } from 'react-native';
import styles from './SubTitleWithPrice.styles'
interface SubTitleWithPriceProps {
  text: string;
  price: number;
}

const SubTitleWithPrice: React.FC<SubTitleWithPriceProps> = ({ text, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{text}</Text>
      <Text style={styles.price}>${price?.toFixed(2)}</Text>
    </View>
  );
};

export default SubTitleWithPrice;
