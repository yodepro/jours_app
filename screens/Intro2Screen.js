import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Intro2Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.mainBgImage}
          source={require('../assets/images/intro-2-bg-1.png')}
        />
        <Image
          style={styles.mainBgImage2}
          source={require('../assets/images/intro-2-bg-2.png')}
        />
        <View style={{ flex: 0.6, }}></View>
        <View style={styles.mainView}>
          <Text style={styles.mainText}>
            A new generation personal journal: evaluate your every day, and soon you’ll be able to take a better look on what really matters and makes you feel good
        </Text>
          <View style={styles.paginationView}>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemActiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
          </View>
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
              onPress={() => this.props.navigation.navigate('Intro3')}
            >
              oh! interesting! >
            </Text>
          </View>
        </View>
      </View>
    )
  };
}

Intro2Screen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4E53FF',
    paddingTop: 30,
    color: '#fff',
  },

  paginationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  paginationItemView: {
    backgroundColor: '#fff',
    height: 5,
    borderRadius: 4,
    marginRight: 2,
  },

  paginationItemInactiveView: {
    width: 10,
    opacity: .5,
  },

  paginationItemActiveView: {
    width: 21,
  },

  mainBgImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    width: '100%',
    resizeMode: 'contain',
  },

  mainBgImage2: {
    position: 'absolute',
    alignSelf: 'center',
    top: 120,
    width: '100%',
    resizeMode: 'contain',
  },

  mainView: {
    flex: 0.3,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },

  mainText: {
    fontFamily: 'roboto-300',
    fontSize: 30,
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
    flex: 0.3,
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
    flex: 0.7,
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