import { AppTabKey, Placement } from '../types';

export type SnapshotPoint = {
  label: string;
  value: number;
};

export type HomeMenuItem = {
  key: AppTabKey;
  title: string;
  description: string;
};

export const mockBirthSnapshot: SnapshotPoint[] = [
  { label: 'Moon', value: 88 },
  { label: 'Rising', value: 71 },
  { label: 'Sun', value: 93 },
  { label: 'Venus', value: 64 },
  { label: 'Mars', value: 56 },
];

export const mockMenuItems: HomeMenuItem[] = [
  {
    key: 'snapshot',
    title: 'Birth Snapshot',
    description: 'Quick chart percentages and strength markers.',
  },
  {
    key: 'placements',
    title: 'Placements',
    description: 'Planets, signs, houses, and Big 3 callouts.',
  },
];

export const mockPlacements: Placement[] = [
  { planet: 'Sun', sign: 'Scorpio', house: 1, isBig3: true },
  { planet: 'Moon', sign: 'Pisces', house: 4, isBig3: true },
  { planet: 'Rising', sign: 'Leo', house: 1, isBig3: true },
  { planet: 'Mercury', sign: 'Scorpio', house: 2 },
  { planet: 'Venus', sign: 'Libra', house: 3 },
  { planet: 'Mars', sign: 'Aries', house: 9 },
];
