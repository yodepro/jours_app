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

export default class Intro3Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 0.55, }}></View>

        <View style={styles.mainView}>
          <Text style={styles.mainText}>
          Leave comments and for every day of tracking and share your jorney with your friends if you’d like to
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
              Next
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
    flexDirection: 'row',
    flex: 0.1,
  },

  bottomCancelView: {
    flex: 0.5,
    position: 'relative',
  },

  bottomCancelText: {
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
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
  },

  dayBgTextBoldBottom: {
    position: 'absolute',
    bottom: 15,
    right: 0,
  },
});