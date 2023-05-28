import React, { useMemo } from 'react';
import { Text } from 'react-native';
import styles from './Title.styles';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  const memoizedStyles = useMemo(() => styles, []);

  return (
    <Text style={memoizedStyles.title}>{text}</Text>
  );
};

export default Title;
