import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { mockBirthSnapshot } from '../data/mockChart';
import { colors, typography } from '../theme/tokens';

export function SnapshotScreen() {
  return (
    <ScreenContainer>
      <AppHeader title="Birth Snapshot" subtitle="At-a-glance influence levels" badgeText="Chart" />

      <SectionCard title="Strength">
        {mockBirthSnapshot.map((item) => (
          <View key={item.label} style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}%</Text>
          </View>
        ))}
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: colors.textWhite,
    fontSize: typography.size.body,
    fontWeight: typography.weight.medium,
  },
  value: {
    color: colors.accentRed,
    fontSize: typography.size.subtitle,
    fontWeight: typography.weight.bold,
  },
});
