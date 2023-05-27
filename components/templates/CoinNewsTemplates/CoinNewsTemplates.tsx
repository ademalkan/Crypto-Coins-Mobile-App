import React from 'react';
import { View } from 'react-native';
import styles from './CoinNewsTemplates.styles';
import News from '../../organisms/News/News';

const CoinNewsTemplates: React.FC = () => {

  return (
    <View style={styles.container}>
      <News />
    </View>
  );
};

export default CoinNewsTemplates;
