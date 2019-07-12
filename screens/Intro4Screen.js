import React from 'react';
import {
  // Image,
  // Platform,
  // ScrollView,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View,
} from 'react-native';

export default class Intro4Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 0.55, }}></View>

        <View style={styles.mainView}>
          <Text style={styles.mainText}>
            With our smart Lookback you’ll be able to analyse your ups and downs and will have a tool to control emotions
          </Text>
        </View>

        <View style={styles.bottomNavigationView}>
          <View style={styles.bottomNavigationInnerView}>
            <Text
              style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
              onPress={() => this.props.navigation.navigate('Intro1')}
            >
              Let's go!
            </Text>
          </View>
        </View>

      </View>
    )
  };
}

Intro4Screen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E53FF',
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#fff',
  },

  mainView: {
    flex: 0.35,
  },

  mainText: {
    fontWeight: '300',
    // fontSize: 32,
    fontSize: 30,
    // lineHeight: 37,
    lineHeight: 35,
    color: '#fff',
  },

  bottomNavigationView: {
    flex: 0.1,
  },

  bottomNavigationInnerView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomNextView: {
    flex: 0.5,
  },

  dayBgTextBold: {
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
  },
});