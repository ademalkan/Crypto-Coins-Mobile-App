import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import CoinListTemplates from '../../components/templates/CoinListTemplates/CoinListTemplates';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <CoinListTemplates />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
