import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { AppHeader } from '../../components/AppHeader';
import { ScreenContainer } from '../../components/ScreenContainer';
import { SectionCard } from '../../components/SectionCard';
import { colors, radius, spacing, typography } from '../../theme/tokens';
import { RootStackParamList } from '../../navigation/AppNavigator';

type BirthInputScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'BirthInput'>;
};

export function BirthInputScreen({ navigation }: BirthInputScreenProps) {
  const [dob, setDob] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthLocation, setBirthLocation] = useState('');

  return (
    <ScreenContainer scrollable>
      <AppHeader title="Birth Chart Calculator" subtitle="Enter the core birth details" />

      <SectionCard title="Birth Details">
        <View style={styles.fieldWrap}>
          <Text style={styles.label}>DOB</Text>
          <TextInput
            placeholder="YYYY-MM-DD"
            placeholderTextColor={colors.textMutedGray}
            value={dob}
            onChangeText={setDob}
            style={styles.input}
          />
        </View>

        <View style={styles.fieldWrap}>
          <Text style={styles.label}>Birth time</Text>
          <TextInput
            placeholder="HH:MM"
            placeholderTextColor={colors.textMutedGray}
            value={birthTime}
            onChangeText={setBirthTime}
            style={styles.input}
          />
          <Text style={styles.helper}>Time accuracy helps improve houses, angles, and rising sign precision.</Text>
        </View>

        <View style={styles.fieldWrap}>
          <Text style={styles.label}>Birth location</Text>
          <TextInput
            placeholder="City, State, Country"
            placeholderTextColor={colors.textMutedGray}
            value={birthLocation}
            onChangeText={setBirthLocation}
            style={styles.input}
          />
        </View>

        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]} onPress={() => navigation.navigate('ChartResults')}>
          <Text style={styles.buttonText}>Generate Chart</Text>
        </Pressable>
      </SectionCard>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  fieldWrap: {
    gap: spacing.xs,
  },
  label: {
    color: colors.textOffWhite,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.semibold,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.borderMutedGray,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    color: colors.textWhite,
    backgroundColor: colors.surfaceCharcoal,
    fontSize: typography.size.body,
    fontWeight: typography.weight.medium,
  },
  helper: {
    color: colors.textMutedGray,
    fontSize: typography.size.caption,
    fontWeight: typography.weight.regular,
  },
  button: {
    backgroundColor: colors.accentRed,
    borderRadius: radius.md,
    alignItems: 'center',
    paddingVertical: spacing.md,
    marginTop: spacing.sm,
  },
  buttonPressed: {
    opacity: 0.88,
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: typography.size.subtitle,
    fontWeight: typography.weight.bold,
  },
});
