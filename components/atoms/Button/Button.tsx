import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './Button.styles'
interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({ onPress, text, containerStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress} activeOpacity={0.8}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};



export default Button;
