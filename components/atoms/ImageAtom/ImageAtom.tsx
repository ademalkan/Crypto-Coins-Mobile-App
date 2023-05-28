import React, { useMemo } from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import styles from './ImageAtom.styles';

interface ImageAtomProps {
  image: string;
  width?: number;
  height?: number;
}

const ImageAtom: React.FC<ImageAtomProps> = ({ image, width = 100, height = 100 }) => {
  const memoizedStyles = useMemo(() => styles, []);

  const imageSource: ImageSourcePropType = image
    ? { uri: image }
    : require('./../../../assets/images/logo.png');

  const imageStyle = height
    ? { ...memoizedStyles.image, height: height, width: width }
    : { ...memoizedStyles.image, width: width };

  return <Image style={imageStyle} source={imageSource} resizeMode="contain" />;
};

export default ImageAtom;
