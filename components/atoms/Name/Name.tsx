import React from 'react';
import { Text } from 'react-native';
import styles from "./Name.styles";

type NameProps = {
  name: string;
};

const Name: React.FC<NameProps> = ({ name }) => {
  return (
    <Text style={styles.name}>{name}</Text>
  );
};

export default Name;
