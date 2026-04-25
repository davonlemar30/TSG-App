import { StyleSheet, Text } from 'react-native';

import { AppHeader } from '../components/AppHeader';
import { MenuCard } from '../components/MenuCard';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { mockMenuItems } from '../data/mockChart';
import { colors, typography } from '../theme/tokens';
import { AppTabKey } from '../types';

type HomeScreenProps = {
  onNavigate: (tab: AppTabKey) => void;
};

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <ScreenContainer>
      <AppHeader
        title="TSG Birth Snapshot"
        subtitle="Built for TheScorpioGang cosmic insights"
        badgeText="v1"
      />

      <SectionCard title="Explore">
        {mockMenuItems.map((item) => (
          <MenuCard
            key={item.key}
            title={item.title}
            description={item.description}
            onPress={() => onNavigate(item.key)}
          />
        ))}
      </SectionCard>

      <Text style={styles.caption}>Use the cards or tabs to move between sections.</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  caption: {
    color: colors.textMutedGray,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.medium,
  },
});
