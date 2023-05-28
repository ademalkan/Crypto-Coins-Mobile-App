import React, { useMemo } from 'react';
import { View } from 'react-native';
import styles from './CoinNewsTemplates.styles';
import News from '../../organisms/News/News';

const CoinNewsTemplates: React.FC = () => {
  const memoizedNews = useMemo(() => <News />, []);

  return (
    <View style={styles.container}>
      {memoizedNews}
    </View>
  );
};

export default CoinNewsTemplates;
