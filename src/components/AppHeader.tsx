import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '../theme/tokens';

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  badgeText?: string;
};

export function AppHeader({ title, subtitle, badgeText }: AppHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
        {badgeText ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeText}</Text>
          </View>
        ) : null}
      </View>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  title: {
    color: colors.textWhite,
    fontSize: typography.size.title,
    fontWeight: typography.weight.bold,
    flexShrink: 1,
  },
  subtitle: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.medium,
  },
  badge: {
    backgroundColor: colors.surfaceCharcoalElevated,
    borderColor: colors.borderMutedGray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  badgeText: {
    color: colors.accentRed,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.bold,
  },
});
