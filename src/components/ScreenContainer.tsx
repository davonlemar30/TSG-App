import { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { colors, layout, texture } from '../theme/tokens';

type ScreenContainerProps = PropsWithChildren<{
  scrollable?: boolean;
}>;

export function ScreenContainer({ children, scrollable = false }: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={texture.layer}>
        <View style={texture.glowTop} />
        <View style={texture.glowBottom} />
        <View style={texture.grain} />
      </View>

      {scrollable ? (
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.content}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.backgroundBlack,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingVertical: layout.screenPaddingVertical,
    gap: layout.contentGap,
  },
});
