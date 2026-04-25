import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { SectionCard } from '../../components/SectionCard';
import { colors, layout, radius, spacing, typography } from '../../theme/tokens';
import { RootStackParamList } from '../../navigation/AppNavigator';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;
};

type HomeCard = {
  title: string;
  description: string;
  action: () => void;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  const cards: HomeCard[] = [
    {
      title: 'Birth Chart Calculator',
      description: 'Start with date, time, and location to generate a natal chart.',
      action: () => navigation.navigate('BirthInput'),
    },
    {
      title: 'Placements',
      description: 'Browse sun, moon, rising, and all core planetary placements.',
      action: () => navigation.navigate('ChartResults'),
    },
    {
      title: 'TSG Library',
      description: 'Learn signs, planets, houses, aspects, and Scorpio notes.',
      action: () => navigation.navigate('Library'),
    },
    {
      title: 'Saved Charts',
      description: 'Access locally cached chart snapshots when you are offline.',
      action: () => navigation.navigate('SavedCharts'),
    },
  ];

  return (
    <ScreenContainer scrollable>
      <AppHeader
        title="TSG Birth Snapshot"
        subtitle="Tap a card to move through your chart workflow"
        badgeText="Offline First"
      />

      <SectionCard title="Start Here">
        {cards.map((card) => (
          <Pressable key={card.title} onPress={card.action} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </Pressable>
        ))}
      </SectionCard>

      <View style={styles.offlineBadgeWrap}>
        <Text style={styles.offlineBadge}>Offline First Ready</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    ...layout.card,
    gap: spacing.xs,
  },
  pressed: {
    opacity: 0.88,
  },
  cardTitle: {
    color: colors.textWhite,
    fontSize: typography.size.subtitle,
    fontWeight: typography.weight.semibold,
  },
  cardDescription: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.regular,
  },
  offlineBadgeWrap: {
    alignItems: 'flex-start',
    marginTop: spacing.sm,
  },
  offlineBadge: {
    color: colors.accentRed,
    borderColor: colors.accentRed,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.bold,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
});
