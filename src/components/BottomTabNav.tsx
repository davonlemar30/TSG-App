import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppTab, AppTabKey } from '../types';
import { colors, radius, spacing, typography } from '../theme/tokens';

type BottomTabNavProps = {
  tabs: AppTab[];
  activeTab: AppTabKey;
  onChangeTab: (key: AppTabKey) => void;
};

export function BottomTabNav({ tabs, activeTab, onChangeTab }: BottomTabNavProps) {
  return (
    <View style={styles.wrap}>
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab;

        return (
          <Pressable
            key={tab.key}
            onPress={() => onChangeTab(tab.key)}
            style={({ pressed }) => [styles.tab, isActive && styles.tabActive, pressed && styles.pressed]}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.sm,
    padding: spacing.xs,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceCharcoal,
    borderColor: colors.borderMutedGray,
    borderWidth: StyleSheet.hairlineWidth,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: radius.md,
  },
  tabActive: {
    backgroundColor: colors.surfaceCharcoalElevated,
  },
  label: {
    color: colors.textMutedGray,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.semibold,
  },
  labelActive: {
    color: colors.textWhite,
  },
  pressed: {
    opacity: 0.85,
  },
});
