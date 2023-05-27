import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import CryptoNewsScreen from '../../components/templates/CoinNewsTemplates/CoinNewsTemplates';

export default function TabNewsScreen() {
  return (
    <View style={styles.container}>
      <CryptoNewsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});


