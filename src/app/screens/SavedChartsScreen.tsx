import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { SectionCard } from '../../components/SectionCard';
import { colors, layout, spacing, typography } from '../../theme/tokens';

const localCharts: Array<{ id: string; label: string; updatedAt: string }> = [];

export function SavedChartsScreen() {
  return (
    <ScreenContainer scrollable>
      <AppHeader title="Saved Charts" subtitle="Local-first chart cache for offline access" />

      <SectionCard title="Local Charts">
        {localCharts.length ? (
          localCharts.map((chart) => (
            <Pressable key={chart.id} style={({ pressed }) => [styles.chartItem, pressed && styles.pressed]}>
              <Text style={styles.chartTitle}>{chart.label}</Text>
              <Text style={styles.chartMeta}>Updated {chart.updatedAt}</Text>
            </Pressable>
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyTitle}>No local charts yet</Text>
            <Text style={styles.emptyText}>Generate and save a chart to access it instantly, even without a connection.</Text>
          </View>
        )}
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  chartItem: {
    ...layout.card,
    gap: spacing.xs,
  },
  pressed: {
    opacity: 0.88,
  },
  chartTitle: {
    color: colors.textWhite,
    fontSize: typography.size.subtitle,
    fontWeight: typography.weight.semibold,
  },
  chartMeta: {
    color: colors.textMutedGray,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.medium,
  },
  emptyState: {
    gap: spacing.xs,
  },
  emptyTitle: {
    color: colors.textOffWhite,
    fontSize: typography.size.subtitle,
    fontWeight: typography.weight.semibold,
  },
  emptyText: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.regular,
    lineHeight: 20,
  },
});
