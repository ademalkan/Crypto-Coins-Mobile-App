import React from 'react';
import { Text } from 'react-native';
import styles from './SubTitle.styles'
interface SubTitleProps {
  text: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return (
    <Text style={styles.subtitle}>{text}</Text>
  );
};

export default SubTitle;
