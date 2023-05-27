import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import FavoriteCoinListTemplates from '../../components/templates/FavoriteCoinListTemplates/FavoriteCoinListTemplates';

export default function TabFavoriteCoinsScreen() {
  return (
    <View style={styles.container}>
      <FavoriteCoinListTemplates />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
