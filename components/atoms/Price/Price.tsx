import React, { useMemo } from 'react';
import { Text } from 'react-native';
import styles from './Price.styles';

type PriceProps = {
  price: number;
};

const Price: React.FC<PriceProps> = ({ price }) => {
  const formattedPrice = useMemo(() => `$${price?.toFixed(2)}`, [price]);

  return (
    <Text style={styles.price}>{formattedPrice}</Text>
  );
};

export default Price;
