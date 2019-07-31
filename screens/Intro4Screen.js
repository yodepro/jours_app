import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Intro4Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={'cover'}
          style={styles.mainBgImage}
          source={require('../assets/images/intro-4-bg.png')}
        />
        {/* <View style={{ flex: 0.6, }}></View> */}
        <View style={styles.mainView}>
          <Text style={styles.mainText}>
            With our smart Lookback you'll be able to analyse your ups and downs
          </Text>
          <View style={styles.paginationView}>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemActiveView]}></View>
          </View>
        </View>
        <View style={styles.bottomNavigationView}>
          <View style={styles.bottomNavigationInnerView}>
            <Text
              style={styles.dayBgTextBold}
              onPress={() => this.props.navigation.navigate('Home')}
            >
              got it! thanks! >
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
    color: '#fff',
    position: 'relative',
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
    width: '100%',
    top: 10,
    resizeMode: 'contain',
  },

  mainView: {
    flex: 0.9,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },

  mainText: {
    fontFamily: 'roboto-300',
    fontSize: 30,
    lineHeight: 35,
    color: '#fff',
  },

  bottomNavigationView: {
    flex: 0.1,
    paddingLeft: 15,
    paddingRight: 15,
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
    textDecorationLine: 'underline',
    fontFamily: 'roboto-700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
    paddingBottom: 20,
  },
});