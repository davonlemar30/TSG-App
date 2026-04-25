import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '../theme/tokens';

export function BrandHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TSG Birth Snapshot</Text>
      <Text style={styles.tagline}>Built for TheScorpioGang cosmic insights</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  title: {
    color: colors.textWhite,
    fontSize: typography.size.title,
    fontWeight: typography.weight.bold,
  },
  tagline: {
    marginTop: spacing.xs,
    color: colors.textOffWhite,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.medium,
  },
});
