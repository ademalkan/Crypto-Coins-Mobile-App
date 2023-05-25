import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import Loader from '../../organisms/Loader/Loader';

type RootStackParamList = {
  CoinDetail: { coin: string };
};

type CoinDetailRouteProp = RouteProp<RootStackParamList, 'CoinDetail'>;

const CoinDetailTemplates: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<CoinDetailRouteProp>();
  const { coin } = route.params;

  const [coinDetail, setCoinDetail] = useState<any>(null);

  useEffect(() => {
    // CoinGecko API'den coin detaylarını çekme işlemi
    const fetchCoinDetail = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`);
        const data = await response.json();
        setCoinDetail(data);
      } catch (error) {
        console.error('Error fetching coin detail:', error);
      }
    };

    fetchCoinDetail();
  }, [coin]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  if (!coinDetail) {
    return (
      <Loader />
    );
  }

  const priceChangeData = Object.values(coinDetail?.market_data?.price_change_24h_in_currency || []).map((value: any) => Number(value));
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.content}>

        <Image source={{ uri: coinDetail.image.large }} style={styles.coinImage} />
        <Text style={styles.title}>{coinDetail.name}</Text>
        <Text style={styles.subtitle}>{coinDetail.symbol}</Text>
        <Text style={styles.subtitle}>Current Price: {coinDetail?.market_data?.current_price?.usd}$</Text>
        <Text style={styles.subtitle}>Last 24 Hours Price Change: {coinDetail?.market_data?.price_change_24h}</Text>
        <Text style={styles.subtitle}>Total Supply: {coinDetail?.market_data?.total_supply}$</Text>
        <Text style={styles.chartTitle}>Price Change 24 Hours in Currency</Text>

        <LineChart
          data={{
            labels: Object.keys(coinDetail?.market_data?.price_change_24h_in_currency || []),
            datasets: [
              {
                data: priceChangeData,
              },
            ],
          }}
          width={350}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 8,
            },
          }}
          bezier
          style={styles.chart}
        />
        <Text style={styles.longText}>
          {coinDetail.description.en}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 120,
  },
  coinImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 4,
    textTransform: "capitalize"
  },
  chartTitle: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  chart: {
    marginTop: 16,
    borderRadius: 16,
  },
  longText: {
    fontSize: 14,
    marginTop: 16,
    marginBottom: 16
  },
});

export default CoinDetailTemplates;
