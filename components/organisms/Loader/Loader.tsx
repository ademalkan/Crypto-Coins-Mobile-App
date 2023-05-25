import React, { memo } from 'react';
import { Text, View } from 'react-native';
import styles from './Loader.styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export default memo(Loader);
