import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CryptoNewsI } from '../../../interfaces/CryptoNewsInterface';
import ImageAtom from '../../atoms/ImageAtom/ImageAtom';
import styles from './New.styles';

interface NewProps {
  item: CryptoNewsI;
}

const New: React.FC<NewProps> = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('NewsDetail', { news_url: item?.url });
  };

  const description = useMemo(() => {
    if (item.description.length > 60) {
      return `${item.description.slice(0, 60)}...`;
    } else {
      return item.description;
    }
  }, [item.description]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.newsCard}>
        <ImageAtom image={""} height={200} width={300} />
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{description}</Text>
        <Text style={styles.newsSource}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default New;
