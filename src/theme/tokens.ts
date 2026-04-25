import { Platform, StyleSheet, ViewStyle } from 'react-native';

export const colors = {
  backgroundBlack: '#07090F',
  backgroundCharcoal: '#111522',
  surfaceCharcoal: '#171D2D',
  surfaceCharcoalElevated: '#1D2436',
  accentRed: '#E0485E',
  textWhite: '#F7F9FF',
  textOffWhite: '#DDE4F2',
  textMutedGray: '#9AA4BA',
  borderMutedGray: '#343C4F',
  textureRedGlow: 'rgba(224, 72, 94, 0.08)',
  textureBlueGlow: 'rgba(118, 136, 255, 0.08)',
  textureLine: 'rgba(255, 255, 255, 0.04)',
} as const;

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
} as const;

export const typography = {
  size: {
    caption: 12,
    body: 14,
    subtitle: 16,
    title: 28,
  },
  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
} as const;

export const elevation = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 14,
    elevation: 6,
  },
  raised: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
} as const;

export const layout = {
  screenPaddingHorizontal: spacing.lg,
  screenPaddingVertical: spacing.lg,
  contentGap: spacing.sm,
  card: {
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surfaceCharcoal,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderMutedGray,
    ...Platform.select({
      ios: elevation.card,
      android: { elevation: elevation.card.elevation },
      default: {},
    }),
  } satisfies ViewStyle,
} as const;

export const texture = StyleSheet.create({
  layer: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
    pointerEvents: 'none',
  },
  glowTop: {
    position: 'absolute',
    top: -110,
    left: -90,
    width: 260,
    height: 260,
    borderRadius: radius.pill,
    backgroundColor: colors.textureRedGlow,
  },
  glowBottom: {
    position: 'absolute',
    right: -120,
    bottom: -160,
    width: 300,
    height: 300,
    borderRadius: radius.pill,
    backgroundColor: colors.textureBlueGlow,
  },
  grain: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.textureLine,
  },
});
