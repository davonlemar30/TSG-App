import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, layout, spacing, typography } from '../theme/tokens';

type MenuCardProps = {
  title: string;
  description: string;
  onPress: () => void;
};

export function MenuCard({ title, description, onPress }: MenuCardProps) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.cta}>Open</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    ...layout.card,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  cardPressed: {
    opacity: 0.86,
  },
  textWrap: {
    gap: spacing.xs,
    flex: 1,
  },
  title: {
    color: colors.textWhite,
    fontSize: typography.size.subtitle,
    fontWeight: typography.weight.semibold,
  },
  description: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.regular,
  },
  cta: {
    color: colors.accentRed,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.bold,
  },
});
