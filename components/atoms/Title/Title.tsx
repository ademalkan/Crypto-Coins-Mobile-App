import React from 'react';
import { Text } from 'react-native';
import styles from './Title.styles'
interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Text style={styles.title}>{text}</Text>
  );
};

export default Title;
