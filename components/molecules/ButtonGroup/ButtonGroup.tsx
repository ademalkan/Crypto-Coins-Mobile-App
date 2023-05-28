import React, { useMemo } from 'react';
import { View } from 'react-native';
import RangeButton from '../../atoms/RangeButton/RangeButton';
import styles from './ButtonGroup.styles';

interface ButtonGroupProps {
  buttons: { label: string; onPress: () => void; selected?: boolean }[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  const memoizedButtons = useMemo(() => buttons, [buttons]);

  return (
    <View style={styles.buttonContainer}>
      {memoizedButtons.map((button, index) => (
        <RangeButton key={index} label={button.label} onPress={button.onPress} selected={button.selected} />
      ))}
    </View>
  );
};

export default ButtonGroup;
