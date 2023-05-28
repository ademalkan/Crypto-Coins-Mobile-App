import React, { useMemo } from 'react';
import { Text } from 'react-native';
import styles from './Symbol.styles';

type SymbolProps = {
  symbol: string;
};

const Symbol: React.FC<SymbolProps> = ({ symbol }) => {
  const memoizedStyles = useMemo(() => styles, []);

  return (
    <Text style={memoizedStyles.symbol}>{symbol}</Text>
  );
};

export default Symbol;
