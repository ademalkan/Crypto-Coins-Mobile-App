import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Loader from '../../atoms/Loader/Loader';
import { CryptoNewsContext } from '../../../context/CryptoNewsContext';
import BackButton from '../../atoms/BackButton/BackButton';
import { CryptoNewsI } from '../../../interfaces/CryptoNewsInterface';
import ImageAtom from '../../atoms/ImageAtom/ImageAtom';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import Title from '../../atoms/Title/Title';

type RootStackParamList = {
  NewsDetail: { news_title: string };
};

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

const NewsDetailTemplates: React.FC = () => {
  const route = useRoute<NewsDetailRouteProp>();
  const { news_title } = route.params;
  const { cryptoNews } = useContext(CryptoNewsContext);
  const [newsDetail, setNewsDetail] = useState<any>(null);

  useEffect(() => {
    const foundNews = cryptoNews.find((news: CryptoNewsI) => news.title === news_title);
    setNewsDetail(foundNews);
  }, [cryptoNews, news_title]);

  if (!newsDetail) {
    return <Loader />;
  }

  const formattedUpdatedAt = new Date(newsDetail.updated_at * 1000).toLocaleDateString();

  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.content}>
        <ImageAtom image={newsDetail.thumb_2x} height={220} />
        <Title text={newsDetail?.title} />
        <SubTitle text={newsDetail?.news_site} />
        <SubTitle text={newsDetail?.source} />
        <SubTitle text={`Last Updated: ${formattedUpdatedAt}`} />
        <SubTitle text={`Description: ${newsDetail?.description}`} />
        {newsDetail.author && <SubTitle text={`Author: ${newsDetail?.author}`} />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 80
  },

});

export default NewsDetailTemplates;
