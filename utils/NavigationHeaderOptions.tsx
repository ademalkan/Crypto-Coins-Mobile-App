import { Image } from 'react-native';
import React from 'react';
import { StackNavigationOptions } from '@react-navigation/native';

export const headerOptions: StackNavigationOptions = {
  headerShown: true,
  title: 'Crypto Coins',
  headerStyle: {
    backgroundColor: '#383a68',
  },
  headerLeft: () => (
    <Image
      style={{ width: 100, height: 70, marginLeft: 0 }}
      source={require('../assets/images/logo.png')}
      resizeMode='contain'
    />
  ),
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};

export default headerOptions;
