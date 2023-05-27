import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CryptoNewsI } from '../../../interfaces/CryptoNewsInterface';
import ImageAtom from '../../atoms/ImageAtom/ImageAtom';
import styles from './News.styles';

interface NewsProps {
  item: CryptoNewsI;
}

const News: React.FC<NewsProps> = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('NewsDetail', { news_title: item.title });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.newsCard}>
        <ImageAtom image={item.thumb_2x} height={200} />
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>
          {item.description.length > 60
            ? `${item.description.slice(0, 60)}...`
            : item.description}
        </Text>
        <Text style={styles.newsSource}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default News;
