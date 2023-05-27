export const getPriceChangeDataHelper = (
  timeRange: string,
  coinDetail: any
): number[] => {
  switch (timeRange) {
    case '7d':
      return Object.values(coinDetail?.market_data?.price_change_percentage_7d_in_currency || []).map((value: any) => Number(value));
    case '30d':
      return Object.values(coinDetail?.market_data?.price_change_percentage_30d_in_currency || []).map((value: any) => Number(value));
    case '1y':
      return Object.values(coinDetail?.market_data?.price_change_percentage_1y_in_currency || []).map((value: any) => Number(value));
    case '24h':
    default:
      return Object.values(coinDetail?.market_data?.price_change_24h_in_currency || []).map((value: any) => Number(value));
  }
};

export const getPriceChangeLabelHelper = (
  timeRange: string,
  coinDetail: any
): string[] => {
  switch (timeRange) {
    case '7d':
      return Object.keys(coinDetail?.market_data?.price_change_percentage_7d_in_currency || []).map((value: any) => value.toString());
    case '30d':
      return Object.keys(coinDetail?.market_data?.price_change_percentage_30d_in_currency || []).map((value: any) => value.toString());
    case '1y':
      return Object.keys(coinDetail?.market_data?.price_change_percentage_1y_in_currency || []).map((value: any) => value.toString());
    case '24h':
    default:
      return Object.keys(coinDetail?.market_data?.price_change_24h_in_currency || []).map((value: any) => value.toString());
  }
};