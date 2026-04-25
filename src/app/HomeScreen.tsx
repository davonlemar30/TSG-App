import { StyleSheet, Text, View } from 'react-native';

import { BrandHeader } from '../components/BrandHeader';
import { mockBirthSnapshot } from '../data/mockChart';
import { colors, layout, spacing, texture, typography } from '../theme/tokens';

export function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={texture.layer}>
        <View style={texture.glowTop} />
        <View style={texture.glowBottom} />
        <View style={texture.grain} />
      </View>

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
    backgroundColor: colors.backgroundBlack,
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingVertical: layout.screenPaddingVertical,
    gap: layout.contentGap,
  },
  subtitle: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.medium,
    marginBottom: spacing.md,
  },
  row: {
    ...layout.card,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
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
