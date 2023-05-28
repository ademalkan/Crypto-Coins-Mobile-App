import React, { useMemo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './RangeButton.styles';

interface RangeButtonProps {
  label: string;
  onPress: () => void;
  selected?: boolean;
}

const RangeButton: React.FC<RangeButtonProps> = ({ label, onPress, selected }) => {
  const memoizedButtonStyle = useMemo(
    () => [styles.timeRangeButton, selected && styles.selectedTimeRangeButton],
    [selected]
  );

  return (
    <TouchableOpacity style={memoizedButtonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RangeButton;
