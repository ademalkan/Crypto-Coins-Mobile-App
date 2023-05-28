import React, { useMemo } from 'react';
import { Text } from 'react-native';
import styles from './Name.styles';

type NameProps = {
  name: string;
};

const Name: React.FC<NameProps> = ({ name }) => {
  const memoizedStyles = useMemo(() => styles, []);

  return (
    <Text style={memoizedStyles.name}>{name}</Text>
  );
};

export default Name;
