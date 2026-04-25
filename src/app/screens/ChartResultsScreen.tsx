import { StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { PlacementRow } from '../../components/PlacementRow';
import { ScreenContainer } from '../../components/ScreenContainer';
import { SectionCard } from '../../components/SectionCard';
import { colors, radius, spacing, typography } from '../../theme/tokens';

const planetaryPlacements = [
  { planet: 'Sun', sign: 'Scorpio', house: 1, isBig3: true },
  { planet: 'Moon', sign: 'Pisces', house: 4, isBig3: true },
  { planet: 'Mercury', sign: 'Scorpio', house: 2 },
  { planet: 'Venus', sign: 'Libra', house: 3 },
  { planet: 'Mars', sign: 'Aries', house: 9 },
  { planet: 'Jupiter', sign: 'Sagittarius', house: 5 },
  { planet: 'Saturn', sign: 'Aquarius', house: 7 },
  { planet: 'Uranus', sign: 'Capricorn', house: 6 },
  { planet: 'Neptune', sign: 'Capricorn', house: 6 },
  { planet: 'Pluto', sign: 'Scorpio', house: 4 },
] as const;

export function ChartResultsScreen() {
  return (
    <ScreenContainer scrollable>
      <AppHeader title="Chart Results" subtitle="Review your Big 3 and planetary placements" />

      <SectionCard title="Big 3 Summary">
        <Text style={styles.summaryText}>Sun in Scorpio • Moon in Pisces • Rising in Leo</Text>
      </SectionCard>

      <SectionCard title="Chart Wheel">
        <View style={styles.chartWheelPlaceholder}>
          <Text style={styles.placeholderText}>Chart wheel placeholder area</Text>
        </View>
      </SectionCard>

      <SectionCard title="Planetary Placements">
        {planetaryPlacements.map((placement) => (
          <PlacementRow key={placement.planet} {...placement} />
        ))}
      </SectionCard>

      <SectionCard title="Topical Snapshot">
        <Text style={styles.snapshotStub}>Stub: Interpretive highlights for love, career, and personal growth will appear here.</Text>
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  summaryText: {
    color: colors.textOffWhite,
    fontSize: typography.size.body,
    fontWeight: typography.weight.semibold,
  },
  chartWheelPlaceholder: {
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderMutedGray,
    borderStyle: 'dashed',
    minHeight: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surfaceCharcoal,
  },
  placeholderText: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.medium,
  },
  snapshotStub: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.regular,
    lineHeight: 20,
  },
});
