import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

import StatsAndAverageScreen from '../screens/StatsAndAverageScreen';
import SettingsCustomScreen from '../screens/SettingsCustomScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// HOME
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

// HOME
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

HomeStack.path = '';

// STATS
const StatsAndAverageStack = createStackNavigator(
  {
    StatsAndAverage: StatsAndAverageScreen,
  },
  config
);
StatsAndAverageStack.navigationOptions = {
  tabBarLabel: 'Stats',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
};
StatsAndAverageStack.path = '';

// RATE
const RateStack = createStackNavigator(
  {
    Rate: HomeScreen,
  },
  config
);
RateStack.navigationOptions = {
  tabBarLabel: 'Rate',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
};
RateStack.path = '';

// SETTINGS
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsCustomScreen,
  },
  config
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
};
SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  StatsAndAverageStack,
  RateStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
