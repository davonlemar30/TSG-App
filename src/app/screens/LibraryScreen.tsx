import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { SectionCard } from '../../components/SectionCard';
import { colors, layout, spacing, typography } from '../../theme/tokens';

const categories = ['Signs', 'Planets', 'Houses', 'Aspects', 'Scorpio Notes'] as const;

export function LibraryScreen() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => categories.filter((category) => category.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );

  return (
    <ScreenContainer scrollable>
      <AppHeader title="TSG Library" subtitle="Search and browse astrology learning categories" />

      <SectionCard title="Search">
        <TextInput
          placeholder="Search categories"
          placeholderTextColor={colors.textMutedGray}
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </SectionCard>

      <SectionCard title="Categories">
        {filtered.map((category) => (
          <Pressable key={category} style={({ pressed }) => [styles.categoryCard, pressed && styles.pressed]}>
            <Text style={styles.categoryTitle}>{category}</Text>
            <Text style={styles.categoryMeta}>Open notes and interpretations</Text>
          </Pressable>
        ))}
        {!filtered.length ? <Text style={styles.emptyText}>No categories match your search yet.</Text> : null}
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderMutedGray,
    backgroundColor: colors.surfaceCharcoal,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    borderRadius: spacing.sm,
    color: colors.textWhite,
  },
  categoryCard: {
    ...layout.card,
    gap: spacing.xs,
  },
  pressed: {
    opacity: 0.88,
  },
  categoryTitle: {
    color: colors.textWhite,
    fontSize: typography.size.subtitle,
    fontWeight: typography.weight.semibold,
  },
  categoryMeta: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.regular,
  },
  emptyText: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.medium,
  },
});
