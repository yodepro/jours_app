import React from 'react';
import {
  Platform,
  Image,
  View,
  Text,
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import JoursHomeScreen from '../screens/JoursHomeScreen';

import StatsAndAverageScreen from '../screens/StatsAndAverageScreen';
import SettingsCustomScreen from '../screens/SettingsCustomScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// HOME
const HomeStack = createStackNavigator(
  {
    Home: JoursHomeScreen,
  },
  config
);

// HOME
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => {
    const image = focused
    ? require('../assets/images/tab-home-focused.png')
    : require('../assets/images/tab-home.png')
    return (
      <Image
        style={{
          marginBottom: -10,
          height: 27,
          width: 25,
        }}
        source={image}
      />
    )
  }
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
  tabBarIcon: ({ focused }) => {
    const image = focused
    ? require('../assets/images/tab-stats-focused.png')
    : require('../assets/images/tab-stats.png')
    return (
      <Image
        style={{
          marginBottom: -10,
          height: 20,
          width: 24,
        }}
        source={image}
      />
    )
  }
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
  tabBarLabel: <View/>,
  tabBarIcon: (
    <Image
      style={{
        marginTop: -35,
        height: 70,
        width: 70,
      }}
      source={require('../assets/images/tab-rate.png')}
    />
  )
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
  tabBarIcon: ({ focused }) => {
    const image = focused
    ? require('../assets/images/tab-settings-focused.png')
    : require('../assets/images/tab-settings.png')
    return (
      <Image
        style={{
          marginBottom: -10,
          height: 27,
          width: 27,
        }}
        source={image}
      />
    )
  }
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
