import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import {
  // Image,
  // Platform,
  // ScrollView,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
// import Slider from '@react-native-community/slider';
// import Slider from 'react-native-slider';

export default function RateTheDay4Screen() {
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
              Nothing wrong in being strong, Jake!
            </Text>

            <Text style={styles.dayBgTextBold}>
              How does your health makes you feel?
            </Text>

          </LinearGradient>
        </View>

      </View>

      <View style={styles.rateParamViewWrapper}>
        <View style={styles.rateParamView}>
          <Text style={styles.rateParamNumber}>
            7.3
          </Text>
          <Text style={styles.rateParamText}>
            great
          </Text>
        </View>
      </View>

      <View style={{ flex: 0.1, }}></View>

      <View style={styles.bottomNavigationView}>

        <View style={styles.bottomNavigationInnerView}>

          <View style={styles.bottomCancelView}>
            <Text style={styles.bottomCancelText}>
              Back
        </Text>
          </View>


          <LinearGradient
            colors={['#4e53ff', '#4e53ff']}
            style={styles.bottomLinearGradient}
          >
            <Text style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}>
              Review{"\n"}
              the day
          </Text>
          </LinearGradient>

        </View>
      </View>

    </View>
  );
}

RateTheDay4Screen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',

    position: 'relative',
    height: '100%',
  },

  topView: {
    paddingTop: 30,
    // backgroundColor: 'red',
    flex: 0.55,
  },

  dayTitleText: {
    fontWeight: '300',
    // fontSize: 32,
    // lineHeight: 37,
    fontSize: 27,
    // lineHeight: 27,
    letterSpacing: 0.6,
    color: '#8B8B8B',
    // marginBottom: 42,
    paddingLeft: 15,
    flex: 0.18,
    // height: '27%',
  },

  mainLinearGradientWrapperView: {
    // flex: 1,
    flex: 0.82,
    // height: '73%',
    // backgroundColor: 'yellow',
  },

  mainLinearGradient: {
    width: '85%',
    height: '100%',
    borderTopRightRadius: 31,
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },

  dayBgText: {
    fontWeight: '300',
    // fontSize: 32,
    // lineHeight: 37,
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
    marginBottom: 15,
  },

  dayBgTextBold: {
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
  },

  rateParamViewWrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    position: 'relative',
    top: -50,
  },


  rateParamView: {
    backgroundColor: '#fff',
    borderRadius: 23,
    paddingTop: 40,
    paddingBottom: 20,
    position: 'absolute',
    left: 15,
    top: 0,
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
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    color: '#747693',
  },

  rateParamNumber: {
    fontWeight: '500',
    fontSize: 64,
    lineHeight: 80,
    textAlign: 'center',
    color: '#747693',
  },

  bottomNavigationView: {
    flex: 0.35,
    // flexDirection: 'row',
    // position: 'relative',
    // bottom: 0,
    // height: '10%',
    // backgroundColor: 'green',
    // justifyContent: 'flex-end',
  },

  bottomNavigationInnerView: {
    flexDirection: 'row',
    // flex: 0.65,
    height: '100%',
  },

  bottomCancelView: {
    flex: 0.51,
    position: 'relative',
  },

  bottomCancelText: {
    // width: '51%',
    // flex: 0.51,
    fontSize: 16,
    lineHeight: 19,
    color: '#C5C4D2',
    // paddingLeft: 15,
    // paddingTop: 250,
    position: 'absolute',
    bottom: 30,
    left: 15,
  },

  bottomLinearGradient: {
    // width: '49%',
    height: '100%',
    flex: 0.49,
    // right: 0,
    // flex: 0.65,
    // height: '65%',
    // bottom: 0,
    // paddingLeft: 20,
    // paddingTop: 250,
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
    position: 'relative',
    // bottom: 0,
    alignSelf: 'stretch',
  },

  dayBgTextBoldBottom: {
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
});