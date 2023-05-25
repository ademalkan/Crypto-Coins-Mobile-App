import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import CoinDetailTemplates from '../components/templates/CoinDetailTemplates/CoinDetailTemplates';

export default function CoinDetailScreen() {

  return (
    <View style={styles.container}>
      <CoinDetailTemplates />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});