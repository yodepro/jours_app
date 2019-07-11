import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

// import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsCustomScreen from '../screens/SettingsCustomScreen';

import RateTheDay1Screen from '../screens/RateTheDay1Screen';
import RateTheDay2Screen from '../screens/RateTheDay2Screen';
import RateTheDay3Screen from '../screens/RateTheDay3Screen';
import RateTheDay4Screen from '../screens/RateTheDay4Screen';
import RateTheDay5Screen from '../screens/RateTheDay5Screen';
import StatsAndAverageScreen from '../screens/StatsAndAverageScreen';
import ViewDayScreen from '../screens/ViewDayScreen';
import SettingsCustomScreen from '../screens/SettingsCustomScreen';

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
  tabBarVisible: false,
};

HomeStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';



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
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarVisible: false,
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
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarVisible: false,
};

RateTheDay1Stack.path = '';

// Rate the Day 3
const RateTheDay3Stack = createStackNavigator(
  {
    RateTheDay3: RateTheDay3Screen,
  },
  config
);

RateTheDay3Stack.navigationOptions = {
  tabBarLabel: 'RateTheDay3',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarVisible: false,
};

RateTheDay1Stack.path = '';

// Rate the Day 4
const RateTheDay4Stack = createStackNavigator(
  {
    RateTheDay4: RateTheDay4Screen,
  },
  config
);

RateTheDay4Stack.navigationOptions = {
  tabBarLabel: 'RateTheDay4',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarVisible: false,
};

RateTheDay1Stack.path = '';

// Rate the Day 5
const RateTheDay5Stack = createStackNavigator(
  {
    RateTheDay5: RateTheDay5Screen,
  },
  config
);

RateTheDay5Stack.navigationOptions = {
  tabBarLabel: 'RateTheDay5',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarVisible: false,
};

RateTheDay1Stack.path = '';

// Stats and Average
const StatsAndAverageStack = createStackNavigator(
  {
    StatsAndAverage: StatsAndAverageScreen,
  },
  config
);

StatsAndAverageStack.navigationOptions = {
  tabBarLabel: 'StatsAndAverage',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
  tabBarVisible: false,
};

RateTheDay1Stack.path = '';

// View Day
const ViewDayStack = createStackNavigator(
  {
    ViewDay: ViewDayScreen,
  },
  config
);

ViewDayStack.navigationOptions = {
  tabBarLabel: 'ViewDay',
  tabBarVisible: false,
};

RateTheDay1Stack.path = '';

// Settings
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsCustomScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarVisible: false,
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

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  // LinksStack,
  // SettingsStack,
  RateTheDay1Stack,
  RateTheDay2Stack,
  RateTheDay3Stack,
  RateTheDay4Stack,
  RateTheDay5Stack,
  StatsAndAverageStack,
  ViewDayStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
