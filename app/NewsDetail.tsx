import { StyleSheet, Text } from 'react-native';
import { View } from '../components/Themed';

import NewsDetailTemplates from '../components/templates/NewsDetailTemplates/NewsDetailTemplates';

export default function CoinDetailScreen() {

  return (
    <View style={styles.container}>
      <NewsDetailTemplates />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});