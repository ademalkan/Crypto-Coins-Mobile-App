import React, { useMemo } from 'react';
import { Text } from 'react-native';
import styles from './SubTitle.styles';

interface SubTitleProps {
  text: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  const memoizedStyles = useMemo(() => styles, []);

  return (
    <Text style={memoizedStyles.subtitle}>{text}</Text>
  );
};

export default SubTitle;
