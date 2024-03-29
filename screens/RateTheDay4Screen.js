import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import Slider from 'react-native-slider';
import RatingSlider from '../components/RatingSlider';
import { isIphoneX } from '../is-iphone-x';
import { isSmallScreen } from "../is-small-screen";

export default class RateTheDay4Screen extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.dayTitleText}>
            May, 12th
          </Text>
          <View style={styles.mainLinearGradientWrapperView}>
            <LinearGradient
              colors={['#FDC344', '#FDE490']}
              style={styles.mainLinearGradient}
            >
              <Text style={styles.dayBgText}>
                Now, sports and health. How did you feel today?
              </Text>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.rateParamViewWrapper}>
          <View style={styles.rateParamView}>
            <RatingSlider value={0} style={{ width: '100%', padding: "5%" }}/>
            <View style={styles.paginationView}>
              <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
              <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
              <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
              <View style={[styles.paginationItemView, styles.paginationItemActiveView]}></View>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.1, }}></View>
        <View style={styles.bottomNavigationView}>
          <View style={styles.bottomNavigationInnerView}>
            <View style={styles.bottomCancelView}>
              <Text
                style={styles.bottomCancelTextLeft}
                onPress={() => goBack()}
              >
                ⟵
              </Text>
              <Text
                style={styles.bottomCancelTextRight}
                onPress={() => goBack()}
              >
                Back
            </Text>
            </View>
            <View
              style={styles.doneView}
            >
              <Image
                source={
                  require('../assets/images/oct2.png')
                }
                style={styles.doneImage}
              />
              <Text
                style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                Review{"\n"}
                the day
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

RateTheDay4Screen.navigationOptions = {
  header: null,
};

const mainPaddigTop = isIphoneX() ? 45 : 30;

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

  doneView: {
    flex: 0.49,
  },

  doneImage: {
    resizeMode: 'stretch',
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
    // height: 150,
    height: isIphoneX() ? 166 : 150,
    width: isIphoneX() ? 198 : 170,
    resizeMode: 'stretch',
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
    flex: 0.35,
    zIndex: 1,
  },

  bottomNavigationInnerView: {
    flexDirection: 'row',
    height: '100%',
  },

  bottomCancelView: {
    flex: 0.51,
    position: 'relative',
  },

  bottomCancelTextLeft: {
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    color: '#C5C4D2',
    position: 'absolute',
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
    bottom: Platform.OS === 'ios' ? 38 : 42,
  },

  bottomCancelTextRight: {
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    color: '#C5C4D2',
    position: 'absolute',
    bottom: 40,
    left: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Platform.OS === 'ios' ? 10 : 0,
  },

  dayBgTextBoldBottom: {
    position: 'absolute',
    bottom: 30,
    right: isIphoneX() ? 70 : 40,
    textDecorationLine: 'underline',
    zIndex: 2,
  },
});