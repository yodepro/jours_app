import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Intro1Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.mainBgImage}
          source={require('../assets/images/intro-1-bg.png')}
        />
        {/* <View style={{ flex: 0.6 }}></View> */}
        <View style={styles.mainView}>
          <Text style={styles.mainText}>
            One simple app to know yourself better and to be happy
          </Text>
          <View style={styles.paginationView}>
            <View style={[styles.paginationItemView, styles.paginationItemActiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
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
              onPress={() => this.props.navigation.navigate('Intro2')}
            >
              continue >
            </Text>
          </View>
        </View>
      </View>
    )
  };
}

Intro1Screen.navigationOptions = {
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
    flex: 1,
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
  },

  mainView: {
    flex: 0.9,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    // justifyContent: 'space-between',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
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