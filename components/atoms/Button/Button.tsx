import React, { useMemo } from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({ onPress, text, containerStyle, textStyle }) => {
  const memoizedStyles = useMemo(() => styles, []);

  return (
    <TouchableOpacity
      style={[memoizedStyles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[memoizedStyles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
