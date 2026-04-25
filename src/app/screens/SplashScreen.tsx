import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '../../components/ScreenContainer';
import { colors, spacing, typography } from '../../theme/tokens';

export function SplashScreen() {
  return (
    <ScreenContainer>
      <View style={styles.center}>
        <Text style={styles.title}>TSG Birth Snapshot</Text>
        <Text style={styles.subtitle}>Preparing your offline-first astrology workspace...</Text>
        <ActivityIndicator color={colors.accentRed} size="small" />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
  },
  title: {
    color: colors.textWhite,
    fontSize: typography.size.title,
    fontWeight: typography.weight.bold,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.textMutedGray,
    fontSize: typography.size.body,
    fontWeight: typography.weight.medium,
    textAlign: 'center',
  },
});
