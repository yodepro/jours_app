import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  // Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View,
  Button,
} from 'react-native';

// import { MonoText } from '../components/StyledText';

// export default function HomeScreen() {
export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          {/* <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View> */}

          <View style={styles.getStartedContainer}>


            {/* <Text style={styles.getStartedText}>Get started by opening</Text>
  
            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText>screens/HomeScreen.js</MonoText>
            </View> */}

            <Text style={styles.getStartedText}>
              Jours
            </Text>

            <DevelopmentModeNotice />
          </View>

          {/* <View style={styles.helpContainer}>
            <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.screenButton}>
            <Button
              title="Home"
              onPress={() => this.props.navigation.navigate('JoursHome')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Rate the Day 1"
              onPress={() => this.props.navigation.navigate('RateTheDay1')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Rate the Day 2"
              onPress={() => this.props.navigation.navigate('RateTheDay2')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Rate the Day 3"
              onPress={() => this.props.navigation.navigate('RateTheDay3')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Rate the Day 4"
              onPress={() => this.props.navigation.navigate('RateTheDay4')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Rate the Day 5"
              onPress={() => this.props.navigation.navigate('RateTheDay5')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Stats and Average"
              onPress={() => this.props.navigation.navigate('StatsAndAverage')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="View Day"
              onPress={() => this.props.navigation.navigate('ViewDay')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Settings"
              onPress={() => this.props.navigation.navigate('Settings')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Intro1"
              onPress={() => this.props.navigation.navigate('Intro1')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Intro2"
              onPress={() => this.props.navigation.navigate('Intro2')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Intro3"
              onPress={() => this.props.navigation.navigate('Intro3')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="Intro4"
              onPress={() => this.props.navigation.navigate('Intro4')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="InitialSetup1"
              onPress={() => this.props.navigation.navigate('InitialSetup1')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="InitialSetup2"
              onPress={() => this.props.navigation.navigate('InitialSetup2')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="InitialSetup3"
              onPress={() => this.props.navigation.navigate('InitialSetup3')}
            />
          </View>

          <View style={styles.screenButton}>
            <Button
              title="InitialSetup4"
              onPress={() => this.props.navigation.navigate('InitialSetup4')}
            />
          </View>

        </ScrollView>



        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>
  
          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
            </MonoText>
          </View>
        </View> */}
      </View>
    );
  }


}

HomeScreen.navigationOptions = {
  header: null,
  // tabBarVisible: true,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 10,
    lineHeight: 10,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 48,
    color: '#4e53ff',
    lineHeight: 48,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 25,
    fontWeight: '700',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: 'center',
  // },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 10,
    color: '#2e78b7',
  },
  screenButton: {
    marginBottom: 5,
  },
});
