import { useNavigation } from 'expo-router';
import React, { useMemo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './BackButton.styles';
const BackButton = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const memoizedBackButton = useMemo(
    () => (
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    ),
    []
  );

  return memoizedBackButton;
};


export default BackButton;
