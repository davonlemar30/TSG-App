import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '../theme/tokens';

type PlacementRowProps = {
  planet: string;
  sign: string;
  house: number;
  isBig3?: boolean;
};

export function PlacementRow({ planet, sign, house, isBig3 = false }: PlacementRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.primary}>
        <Text style={styles.planet}>{planet}</Text>
        {isBig3 ? <Text style={styles.badge}>Big 3</Text> : null}
      </View>
      <Text style={styles.meta}>{`${sign} • House ${house}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.md,
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    flexShrink: 1,
  },
  planet: {
    color: colors.textWhite,
    fontSize: typography.size.body,
    fontWeight: typography.weight.semibold,
  },
  badge: {
    color: colors.accentRed,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.bold,
  },
  meta: {
    color: colors.textOffWhite,
    fontSize: typography.size.body,
    fontWeight: typography.weight.medium,
  },
});
