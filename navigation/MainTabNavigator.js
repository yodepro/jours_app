import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import RateTheDay1Screen from '../screens/RateTheDay1Screen';
import RateTheDay2Screen from '../screens/RateTheDay2Screen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

//
//
//
//
//
//
//
//
//
//

// Rate the Day 1
const RateTheDay1Stack = createStackNavigator(
  {
    RateTheDay1: RateTheDay1Screen,
  },
  config
);

RateTheDay1Stack.navigationOptions = {
  tabBarLabel: 'RateTheDay1',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

RateTheDay1Stack.path = '';

// Rate the Day 2
const RateTheDay2Stack = createStackNavigator(
  {
    RateTheDay2: RateTheDay2Screen,
  },
  config
);

RateTheDay2Stack.navigationOptions = {
  tabBarLabel: 'RateTheDay2',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

RateTheDay1Stack.path = '';

//
//
//
//
//
//
//
//
//
//

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  RateTheDay1Stack,
  RateTheDay2Stack,
});

tabNavigator.path = '';

export default tabNavigator;
