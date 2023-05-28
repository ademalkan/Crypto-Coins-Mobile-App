import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import styles from './AlertText.styles';

interface AlertTextProps {
  text: string;
}

const AlertText: React.FC<AlertTextProps> = ({ text }) => {
  const memoizedStyles = useMemo(() => styles, []);

  return (
    <View style={memoizedStyles.container}>
      <Text style={memoizedStyles.text}>{text}</Text>
    </View>
  );
};

export default AlertText;
