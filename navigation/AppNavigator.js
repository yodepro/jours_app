import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

// import JoursHomeScreen from '../screens/JoursHomeScreen';
import RateTheDay1Screen from '../screens/RateTheDay1Screen';
import RateTheDay2Screen from '../screens/RateTheDay2Screen';
import RateTheDay3Screen from '../screens/RateTheDay3Screen';
import RateTheDay4Screen from '../screens/RateTheDay4Screen';
import RateTheDay5Screen from '../screens/RateTheDay5Screen';
// import StatsAndAverageScreen from '../screens/StatsAndAverageScreen';
import ViewDayScreen from '../screens/ViewDayScreen';
import SettingsCustomScreen from '../screens/SettingsCustomScreen';
import Intro1Screen from '../screens/Intro1Screen';
import Intro2Screen from '../screens/Intro2Screen';
import Intro3Screen from '../screens/Intro3Screen';
import Intro4Screen from '../screens/Intro4Screen';
import InitialSetup1Screen from '../screens/InitialSetup1Screen';
import InitialSetup2Screen from '../screens/InitialSetup2Screen';
import InitialSetup3Screen from '../screens/InitialSetup3Screen';
import InitialSetup4Screen from '../screens/InitialSetup4Screen';

import Step1Screen from '../screens/Step1Screen';
import Step2Screen from '../screens/Step2Screen';
import Step3Screen from '../screens/Step3Screen';
// import Step4Screen from '../screens/Step4Screen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    
    Main: MainTabNavigator,
    // JoursHome: JoursHomeScreen,
    RateTheDay1: RateTheDay1Screen,
    RateTheDay2: RateTheDay2Screen,
    RateTheDay3: RateTheDay3Screen,
    RateTheDay4: RateTheDay4Screen,
    RateTheDay5: RateTheDay5Screen,
    ViewDay: ViewDayScreen,
    Settings: SettingsCustomScreen,
    Intro1: Intro1Screen,
    Intro2: Intro2Screen,
    Intro3: Intro3Screen,
    Intro4: Intro4Screen,
    InitialSetup1: InitialSetup1Screen,
    InitialSetup2: InitialSetup2Screen,
    InitialSetup3: InitialSetup3Screen,
    InitialSetup4: InitialSetup4Screen,
    Step1: Step1Screen,
    Step2: Step2Screen,
    Step3: Step3Screen,
    // Step4: Step4Screen,
    
  },
  {
    backBehavior: 'history'
  }
  
  )
);
