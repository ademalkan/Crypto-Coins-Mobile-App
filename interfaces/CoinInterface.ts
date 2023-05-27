export interface CoinI {
  id: string;
  name: string;
  symbol: string;
  current_price?: number;
  price: number;
  image: string;
  total_volume?: number;
  price_change_24h?: number;
}
