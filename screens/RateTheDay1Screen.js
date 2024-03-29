import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import Slider from 'react-native-slider';
import RatingSlider from '../components/RatingSlider';
import { isIphoneX } from '../is-iphone-x';
import { isSmallScreen } from "../is-small-screen";

export default class RateTheDay1Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.dayTitleText}>
            May, 12th
          </Text>
          <View style={styles.mainLinearGradientWrapperView}>
            <LinearGradient
              colors={['#3884FF', '#60D7FF']}
              style={styles.mainLinearGradient}
            >
              <Text style={styles.dayBgText}>
                Take a deep breath and tell me, how would you rate your level of happiness today?
              </Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.rateParamViewWrapper}>
          <View style={styles.rateParamView}>
            
            <RatingSlider value={0} style={{ width: '100%', padding: "5%" }}/>
           
            <View style={styles.paginationView}>
              <View style={[styles.paginationItemView, styles.paginationItemActiveView]}></View>
              <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
              <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
              <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.1, }}></View>
        <View style={styles.bottomNavigationView}>
          <View style={styles.bottomNavigationInnerView}>
            <View style={styles.bottomCancelView}>
              <Text
                style={styles.bottomCancelText}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                Cancel
              </Text>
            </View>
            <LinearGradient
              colors={['#F734A8', '#F78B79']}
              style={styles.bottomLinearGradient}
            >
              <Text
                style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
                onPress={() => this.props.navigation.navigate('RateTheDay2')}
              >
                Next to{"\n"}
                health
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

RateTheDay1Screen.navigationOptions = {
  header: null,
  tabBarVisible: false,
};

const mainPaddigTop = isIphoneX() ? 45 : 30;
// const testStyle = isSmallScreen() ? 'red' : 'green';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',

    position: 'relative',
    height: '100%',
  },

  paginationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  paginationItemView: {
    height: 5,
    borderRadius: 4,
    marginRight: 2,
  },

  paginationItemInactiveView: {
    width: 10,
    opacity: .5,
    backgroundColor: '#c5c4d2',
  },

  paginationItemActiveView: {
    width: 21,
    backgroundColor: '#4e53ff',
  },

  topView: {
    paddingTop: mainPaddigTop,
    flex: 0.55,
  },

  dayTitleText: {
    fontFamily: 'roboto-300',
    fontSize: 27,
    letterSpacing: 0.6,
    color: '#8B8B8B',
    paddingLeft: 15,
    flex: 0.18,
    marginTop: 10,
  },

  mainLinearGradientWrapperView: {
    flex: 0.82,
    borderTopRightRadius: 31,
    width: '85%',
    overflow: 'hidden',
  },

  mainLinearGradient: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 31,
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },

  dayBgText: {
    fontFamily: 'roboto-300',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
    marginBottom: 15,
  },

  dayBgTextBold: {
    fontFamily: 'roboto-700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
  },

  rateParamViewWrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    top: '40%',
    zIndex: 5,
    width: '100%',
    // backgroundColor: testStyle,
  },

  rateParamView: {
    backgroundColor: '#fff',
    borderRadius: 23,
    paddingTop: isSmallScreen() ? 10 : 25,
    paddingBottom: 20,
    position: 'relative',
    width: '100%',

    shadowColor: "#3884ff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 13,
  },

  rateParamText: {
    fontFamily: 'quicksand-500',
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    color: '#747693',
  },

  rateParamNumber: {
    fontFamily: 'quicksand-500',
    fontSize: 54,
    lineHeight: 80,
    textAlign: 'center',
    color: '#747693',
  },

  bottomNavigationView: {
    position: 'relative',
    zIndex: 1,
    flex: 0.35,
  },

  bottomNavigationInnerView: {
    flexDirection: 'row',
    height: '100%',
  },

  bottomCancelView: {
    flex: 0.51,
    position: 'relative',
  },

  bottomCancelText: {
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    color: '#C5C4D2',
    position: 'absolute',
    bottom: 20,
    left: 15,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  bottomLinearGradient: {
    height: '100%',
    flex: 0.49,
    position: 'relative',
    alignSelf: 'stretch',
  },

  dayBgTextBoldBottom: {
    textDecorationLine: 'underline',
    position: 'absolute',
    bottom: 30,
    left: 15,
  },
});