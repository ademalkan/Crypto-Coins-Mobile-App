import { SafeAreaView } from "react-native-safe-area-context";
import CoinOrganism from "../../organisms/CoinOrganism/CoinOrganism";
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput } from 'react-native';
import { fetchCoinsAll } from "../../../services/fetchCoins";

export default function CoinListTemplates() {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const fetchCoins = fetchCoinsAll();
    fetchCoins.then(coins => setCoins(coins))
  }, []);



  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const renderItem = ({ item }) => (
    <CoinOrganism
      name={item.name}
      symbol={item.symbol.toUpperCase()}
      price={item.current_price}
      image={item.image}
      id={item.id}
    />

  );


  return (
    <SafeAreaView>
      <TextInput
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <FlatList
        data={coins.filter(coin =>
          coin?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin?.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        )} renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={10}
        windowSize={50}
        removeClippedSubviews={true}
      />

    </SafeAreaView>
  );
}




