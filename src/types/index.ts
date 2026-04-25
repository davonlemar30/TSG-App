export type Brand = 'TheScorpioGang' | 'TSG Birth Snapshot';

export type AppTabKey = 'home' | 'snapshot' | 'placements';

export type AppTab = {
  key: AppTabKey;
  label: string;
};

export type Placement = {
  planet: string;
  sign: string;
  house: number;
  isBig3?: boolean;
};
