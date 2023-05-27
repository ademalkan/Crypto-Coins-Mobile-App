import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import styles from './ImageAtom.styles';

interface ImageAtomProps {
  image: string;
  height?: number;
}

const ImageAtom: React.FC<ImageAtomProps> = ({ image, height }) => {
  const imageSource: ImageSourcePropType = image
    ? { uri: image }
    : require('./../../../assets/images/logo.png');

  const imageStyle = height ? { ...styles.image, height: height } : styles.image;

  return <Image style={imageStyle} source={imageSource} />;
};

export default ImageAtom;
