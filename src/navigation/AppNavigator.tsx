import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { HomeScreen } from '../app/HomeScreen';
import { PlacementsScreen } from '../app/PlacementsScreen';
import { SnapshotScreen } from '../app/SnapshotScreen';
import { BottomTabNav } from '../components/BottomTabNav';
import { AppTab, AppTabKey } from '../types';

export function AppNavigator() {
  const [activeTab, setActiveTab] = useState<AppTabKey>('home');

  const tabs = useMemo<AppTab[]>(
    () => [
      { key: 'home', label: 'Home' },
      { key: 'snapshot', label: 'Snapshot' },
      { key: 'placements', label: 'Placements' },
    ],
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {activeTab === 'home' ? <HomeScreen onNavigate={setActiveTab} /> : null}
        {activeTab === 'snapshot' ? <SnapshotScreen /> : null}
        {activeTab === 'placements' ? <PlacementsScreen /> : null}
      </View>

      <View style={styles.tabWrap}>
        <BottomTabNav tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabWrap: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
});
