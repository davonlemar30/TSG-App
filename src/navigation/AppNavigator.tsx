import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';

import { BirthInputScreen } from '../app/screens/BirthInputScreen';
import { ChartResultsScreen } from '../app/screens/ChartResultsScreen';
import { HomeScreen } from '../app/screens/HomeScreen';
import { LibraryScreen } from '../app/screens/LibraryScreen';
import { SavedChartsScreen } from '../app/screens/SavedChartsScreen';
import { SplashScreen } from '../app/screens/SplashScreen';
import { colors, spacing, typography } from '../theme/tokens';

export type RootStackParamList = {
  Splash: undefined;
  MainTabs: undefined;
  BirthInput: undefined;
  ChartResults: undefined;
  Library: undefined;
  SavedCharts: undefined;
};

export type MainTabParamList = {
  HomeTab: undefined;
  LibraryTab: undefined;
  SavedTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: colors.textWhite,
        tabBarInactiveTintColor: colors.textMutedGray,
        tabBarIcon: ({ color }) => <Text style={[styles.icon, { color }]}>{getTabIcon(route.name)}</Text>,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="LibraryTab" component={LibraryScreen} options={{ title: 'Library' }} />
      <Tab.Screen name="SavedTab" component={SavedChartsScreen} options={{ title: 'Saved' }} />
    </Tab.Navigator>
  );
}

function getTabIcon(routeName: keyof MainTabParamList) {
  switch (routeName) {
    case 'HomeTab':
      return '⌂';
    case 'LibraryTab':
      return '☰';
    case 'SavedTab':
      return '★';
    default:
      return '•';
  }
}

export function AppNavigator() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showSplash ? <Stack.Screen name="Splash" component={SplashScreen} /> : null}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="BirthInput" component={BirthInputScreen} />
        <Stack.Screen name="ChartResults" component={ChartResultsScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="SavedCharts" component={SavedChartsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.surfaceCharcoal,
    borderTopColor: colors.borderMutedGray,
    borderTopWidth: StyleSheet.hairlineWidth,
    height: 72,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xs,
  },
  tabBarLabel: {
    fontSize: typography.size.caption,
    fontWeight: typography.weight.semibold,
  },
  icon: {
    fontSize: 16,
    fontWeight: typography.weight.bold,
  },
});
