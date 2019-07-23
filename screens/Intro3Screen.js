import React from 'react';
import {
  Image,
  // Platform,
  // ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Intro3Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.mainBgImage}
          source={require('../assets/images/intro-3-bg.png')}
        />
        <View style={{ flex: 0.35, }}></View>
        <View style={styles.mainView}>
          <Text style={styles.mainText}>
          Leave comments for every day, and share your journey with your friends if you feel like it
        </Text>
        </View>
        <View style={styles.bottomNavigationView}>
          <View style={styles.bottomCancelView}>
            <Text style={styles.bottomCancelText}>
              Skip
            </Text>
          </View>
          <View style={styles.bottomNextView}>
            <Text
              style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
              onPress={() => this.props.navigation.navigate('Intro4')}
            >
              neat! >
            </Text>
          </View>
        </View>
      </View>
    )
  };
}

Intro3Screen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E53FF',
    paddingTop: 30,
    // paddingLeft: 15,
    // paddingRight: 15,
    color: '#fff',
  },

  mainBgImage: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    top: 40,
  },

  mainView: {
    flex: 0.55,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'flex-end',
  },

  mainText: {
    fontFamily: 'roboto-300',
    // fontSize: 32,
    fontSize: 30,
    // lineHeight: 37,
    lineHeight: 35,
    color: '#fff',
  },

  bottomNavigationView: {
    flexDirection: 'row',
    flex: 0.1,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },

  bottomCancelView: {
    flex: 0.5,
    position: 'relative',
  },

  bottomCancelText: {
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
    position: 'absolute',
    bottom: 15,
    left: 0,
  },

  bottomNextView: {
    flex: 0.5,
    position: 'relative',
  },

  dayBgTextBold: {
    fontFamily: 'roboto-700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
  },

  dayBgTextBoldBottom: {
    textDecorationLine: 'underline',
    position: 'absolute',
    bottom: 15,
    right: 0,
  },
});