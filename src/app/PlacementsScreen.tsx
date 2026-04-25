import { AppHeader } from '../components/AppHeader';
import { PlacementRow } from '../components/PlacementRow';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionCard } from '../components/SectionCard';
import { mockPlacements } from '../data/mockChart';

export function PlacementsScreen() {
  return (
    <ScreenContainer scrollable>
      <AppHeader title="Placements" subtitle="Planets by sign and house" badgeText="Natal" />

      <SectionCard title="Core Placements">
        {mockPlacements.map((placement) => (
          <PlacementRow
            key={placement.planet}
            planet={placement.planet}
            sign={placement.sign}
            house={placement.house}
            isBig3={placement.isBig3}
          />
        ))}
      </SectionCard>
    </ScreenContainer>
  );
}
