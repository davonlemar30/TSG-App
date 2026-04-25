import { StyleSheet, Text, View } from 'react-native';

import { BrandHeader } from '../components/BrandHeader';
import { mockBirthSnapshot } from '../data/mockChart';
import { colors, spacing, typography } from '../theme/tokens';

export function HomeScreen() {
  return (
    <View style={styles.screen}>
      <BrandHeader />
      <Text style={styles.subtitle}>TheScorpioGang · TSG Birth Snapshot</Text>
      {mockBirthSnapshot.map((item) => (
        <View key={item.label} style={styles.row}>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}%</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.body,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: 12,
    backgroundColor: colors.surface,
    marginBottom: spacing.sm,
  },
  label: {
    color: colors.textPrimary,
    fontSize: typography.body,
  },
  value: {
    color: colors.accent,
    fontSize: typography.body,
    fontWeight: '700',
  },
});
