import React from 'react'
import AlertText from '../../atoms/AlertText/AlertText';
import { VirtualizedList, Text, ScrollView } from 'react-native';
import Coin from '../../molecules/Coin/Coin';
import styles from './Coins.styles'
import { CoinI } from '../../../interfaces/CoinInterface';

interface CoinsProps {
  searchQuery: string;
  emptyText: string;
  coins: any;
  title: string;
}

const Coins: React.FC<CoinsProps> = ({ coins, searchQuery, title = "", emptyText = "You have not find any coins yet" }) => {
  if (!coins || !coins.length) {
    return (
      <AlertText text={emptyText} />
    )
  }


  const CoinMemoized = React.memo(Coin);

  const renderItem = ({ item }: { item: CoinI }) => (
    <CoinMemoized
      name={item.name}
      symbol={item.symbol.toUpperCase()}
      price={item.current_price ? item.current_price : item.price}
      total_volume={item.total_volume}
      price_change_24h={item.price_change_24h}
      image={item.image}
      id={item.id}
    />
  );

  const filteredCoins = coins.filter(
    (coin: CoinI | undefined) =>
      coin?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin?.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ITEM_HEIGHT = 100;

  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      {filteredCoins &&
        <VirtualizedList
          style={styles.container}
          data={filteredCoins}
          renderItem={renderItem}
          keyExtractor={(item: CoinI) => item.id}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={10}
          windowSize={10}
          removeClippedSubviews={true}
          getItem={(data, index) => data[index]}
          getItemCount={(data) => data.length}
          getItemLayout={(data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
        />
      }

    </>
  )
}

export default Coins