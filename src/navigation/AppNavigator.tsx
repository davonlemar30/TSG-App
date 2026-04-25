import { StyleSheet, View } from 'react-native';

import { HomeScreen } from '../app/HomeScreen';

export function AppNavigator() {
  // Placeholder for stack/tabs once routing is added.
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
