import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { CryptoNewsContext } from '../../../context/CryptoNewsContext';
import { CryptoNewsI } from '../../../interfaces/CryptoNewsInterface';
import styles from './CoinNewsTemplates.styles';
import News from '../../organisms/News/News';

const CoinNewsTemplates: React.FC = () => {
  const cryptoNewsContext = useContext(CryptoNewsContext) as CryptoNewsContextValue;
  const { cryptoNews } = cryptoNewsContext;

  return (
    <View style={styles.container}>
      <FlatList
        data={cryptoNews}
        renderItem={({ item }: { item: CryptoNewsI }) => <News item={item} />}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export default CoinNewsTemplates;
