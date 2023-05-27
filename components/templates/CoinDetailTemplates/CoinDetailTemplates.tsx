import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import Loader from '../../atoms/Loader/Loader';
import { localeDateString } from '../../../utils/LocaleDateString';
import BackButton from '../../atoms/BackButton/BackButton';
import { CryptoNewsContext } from '../../../context/CryptoNewsContext';
import { fetchCoinDetail } from '../../../services/fetchConDetail';
import { getPriceChangeDataHelper, getPriceChangeLabelHelper } from '../../../utils/helper';
import styles from './CoinDetailTemplates.styles';
import ImageAtom from '../../atoms/ImageAtom/ImageAtom';
import News from '../../organisms/News/News';
import SubTitle from '../../atoms/SubTitle/SubTitle';
import LineChartAtom from '../../atoms/LineChartAtom/LineChartAtom';
import ButtonGroup from '../../molecules/ButtonGroup/ButtonGroup';
import Title from '../../atoms/Title/Title';

type RootStackParamList = {
  CoinDetail: { coin: string };
};

type CoinDetailRouteProp = RouteProp<RootStackParamList, 'CoinDetail'>;

const CoinDetailTemplates: React.FC = () => {
  const route = useRoute<CoinDetailRouteProp>();
  const { coin } = route.params;
  const { cryptoNews } = useContext(CryptoNewsContext);

  const [coinDetail, setCoinDetail] = useState<any>(null);
  const [timeRange, setTimeRange] = useState<'24h' | '7d' | '30d' | '1y'>('24h');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const coinsData = await fetchCoinDetail(coin);
        setCoinDetail(coinsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCoins();
  }, [coin]);

  const getCoinNews = (coin: string) => {
    const lowercaseCoin = coin.toLowerCase();
    return (
      cryptoNews?.filter(
        (news: any) =>
          news.title.toLowerCase().includes(lowercaseCoin) ||
          news.description.toLowerCase().includes(lowercaseCoin)
      ) || []
    );
  };

  const getPriceChangeData = (): number[] => {
    return getPriceChangeDataHelper(timeRange, coinDetail);
  };

  const getPriceChangeLabel = (): string[] => {
    return getPriceChangeLabelHelper(timeRange, coinDetail);
  };

  const priceChangeData = getPriceChangeData();
  const priceChangeLabel = getPriceChangeLabel();
  const coinNews = getCoinNews(coin);

  if (!coinDetail) {
    return <Loader />;
  }

  const buttonGroupButtons = [
    { label: '24h', onPress: () => setTimeRange('24h'), selected: timeRange === '24h' },
    { label: '7d', onPress: () => setTimeRange('7d'), selected: timeRange === '7d' },
    { label: '30d', onPress: () => setTimeRange('30d'), selected: timeRange === '30d' },
    { label: '1y', onPress: () => setTimeRange('1y'), selected: timeRange === '1y' },
  ];

  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView contentContainerStyle={styles.content}>
        <ImageAtom image={''} height={200} />
        <Title text={coinDetail.name} />
        <SubTitle text={coinDetail.symbol} />
        <SubTitle text={`Current Price: ${coinDetail?.market_data?.current_price?.usd}$`} />
        <SubTitle text={`Last 24 Hours Price Change: ${coinDetail?.market_data?.price_change_24h}`} />
        <SubTitle text={`Total Supply: ${coinDetail?.market_data?.total_supply}$`} />
        <SubTitle text={`Last Updated: ${localeDateString(coinDetail?.market_data?.last_updated)}`} />

        <Text style={styles.chartTitle}>Price Change {timeRange} in Currency</Text>
        <ButtonGroup buttons={buttonGroupButtons} />

        <LineChartAtom
          data={{
            labels: priceChangeLabel,
            datasets: [
              {
                data: priceChangeData,
              },
            ],
          }}
          width={350}
          height={200}
        />


        <Text style={styles.longText}>{coinDetail.description.en}</Text>

        {coinNews.length > 0 && <Text style={styles.newsTitle}>Related News:</Text>}
        {coinNews.map((news: any, id: number) => (
          <News key={id} item={news} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CoinDetailTemplates;
