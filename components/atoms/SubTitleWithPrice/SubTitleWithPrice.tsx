import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import styles from './SubTitleWithPrice.styles';

interface SubTitleWithPriceProps {
  text: string;
  price?: number;
}

const SubTitleWithPrice: React.FC<SubTitleWithPriceProps> = ({ text, price }) => {
  const formattedPrice = useMemo(() => `$${price?.toFixed(2)}`, [price]);

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{text}</Text>
      <Text style={styles.price}>{formattedPrice}</Text>
    </View>
  );
};

export default SubTitleWithPrice;
