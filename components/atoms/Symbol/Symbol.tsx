import React from 'react';
import { Text } from 'react-native';
import styles from "./Symbol.styles";

type SymbolProps = {
  symbol: string;
};

const Symbol: React.FC<SymbolProps> = ({ symbol }) => {
  return (
    <Text style={styles.symbol}>{symbol}</Text>
  );
};

export default Symbol;
