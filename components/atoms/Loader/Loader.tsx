import React, { useMemo } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './Loader.styles';

const Loader: React.FC = () => {
  const memoizedStyles = useMemo(() => styles, []);

  return (
    <View style={memoizedStyles.container}>
      <ActivityIndicator size="large" color="#000" />
      <Text style={memoizedStyles.text}>Loading...</Text>
    </View>
  );
};

export default Loader;
