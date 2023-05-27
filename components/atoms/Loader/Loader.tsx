import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './Loader.styles'
const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};


export default Loader;
