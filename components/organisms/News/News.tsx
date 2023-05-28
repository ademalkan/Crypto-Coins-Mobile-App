import React, { useContext, useMemo } from 'react';
import { FlatList } from 'react-native';
import { CryptoNewsContext } from '../../../context/CryptoNewsContext';
import { CryptoNewsI } from '../../../interfaces/CryptoNewsInterface';
import New from '../../molecules/New/New';

const News: React.FC = () => {
  const cryptoNewsContext = useContext(CryptoNewsContext);
  const cryptoNews = useMemo(() => cryptoNewsContext?.cryptoNews || [], [cryptoNewsContext]);

  return (
    <FlatList
      data={cryptoNews}
      renderItem={({ item }: { item: CryptoNewsI }) => <New item={item} />}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

export default News;
