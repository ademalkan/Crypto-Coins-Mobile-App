import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import styles from './ImageAtom.styles';

interface ImageAtomProps {
  image: string;
  width?: number;
  height?: number;
}

const ImageAtom: React.FC<ImageAtomProps> = ({ image, width = 100, height = 100 }) => {
  const imageSource: ImageSourcePropType = image
    ? { uri: image }
    : require('./../../../assets/images/logo.png');

  const imageStyle = height
    ? { ...styles.image, height: height, width: width }
    : { ...styles.image, width: width };
  return <Image style={imageStyle} source={imageSource} resizeMode="contain" />;
};

export default ImageAtom;
