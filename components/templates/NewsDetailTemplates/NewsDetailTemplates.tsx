import React, { useEffect, useState, useContext, useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Loader from '../../atoms/Loader/Loader';
import { CryptoNewsContext } from '../../../context/CryptoNewsContext';
import BackButton from '../../atoms/BackButton/BackButton';
import { CryptoNewsI } from '../../../interfaces/CryptoNewsInterface';
import ImageAtom from '../../atoms/ImageAtom/ImageAtom';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import Title from '../../atoms/Title/Title';
import styles from './NewsDetailTemplates.styles';

type RootStackParamList = {
  NewsDetail: { news_url: string };
};

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

const NewsDetailTemplates: React.FC = () => {
  const route = useRoute<NewsDetailRouteProp>();
  const { news_url } = route.params;
  const cryptoNewsContext = useContext(CryptoNewsContext);
  const cryptoNews = cryptoNewsContext?.cryptoNews || [];
  const [newsDetail, setNewsDetail] = useState<any>(null);

  useEffect(() => {
    const foundNews = cryptoNews.find((news: CryptoNewsI) => news?.url === news_url);
    setNewsDetail(foundNews);
  }, [cryptoNews, news_url]);

  const memoizedLoader = useMemo(() => <Loader />, []);

  if (!newsDetail) {
    return memoizedLoader;
  }

  const formattedUpdatedAt = new Date(newsDetail?.updated_at * 1000).toLocaleDateString();

  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.content}>
        {/* <ImageAtom image={newsDetail.thumb_2x} width={350} height={200} /> */}
        <ImageAtom image={''} width={350} height={200} />
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

export default NewsDetailTemplates;
