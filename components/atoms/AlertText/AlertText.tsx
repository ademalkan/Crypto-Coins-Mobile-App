import React from 'react'
import { View, Text } from 'react-native';
import styles from './AlertText.styles'

interface AlertTextProps {
  text: string;
}
const AlertText: React.FC<AlertTextProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default AlertText