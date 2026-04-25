import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors, layout, spacing, typography } from '../theme/tokens';

type SectionCardProps = PropsWithChildren<{
  title?: string;
}>;

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <View style={styles.card}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    ...layout.card,
    gap: spacing.sm,
  },
  title: {
    color: colors.textOffWhite,
    fontSize: typography.size.caption,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: typography.weight.semibold,
  },
  content: {
    gap: spacing.sm,
  },
});
