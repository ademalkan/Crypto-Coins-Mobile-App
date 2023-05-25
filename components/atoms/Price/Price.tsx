import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./Price.styles";

type PriceProps = {
  price: number;
};

const Price: React.FC<PriceProps> = ({ price }) => {
  return (
    <Text style={styles.price}>${price}</Text>
  );
};

export default Price;
