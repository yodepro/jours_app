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

export default class RateTheDay3Screen extends React.Component {
  render() {
  return (
    <View style={styles.container}>

      <View style={styles.topView}>

        <Text style={styles.dayTitleText}>
          May, 12th
        </Text>

        <View style={styles.mainLinearGradientWrapperView}>
          <LinearGradient
            colors={['#4CD9D9', '#48E9C7']}
            style={styles.mainLinearGradient}
          >

            <Text style={styles.dayBgText}>
              Another day, another story, Jake.
            </Text>

            <Text style={styles.dayBgTextBold}>
              What’s your level of happiness today?
            </Text>

          </LinearGradient>
        </View>

      </View>

      <View style={styles.rateParamViewWrapper}>
        <View style={styles.rateParamView}>
          <Text style={styles.rateParamNumber}>
            0
          </Text>
          <Text style={styles.rateParamText}>
            been better
          </Text>
        </View>
      </View>

      <View style={{ flex: 0.1, }}></View>

      <View style={styles.bottomNavigationView}>

        <View style={styles.bottomNavigationInnerView}>

          <View style={styles.bottomCancelView}>
            <Text style={styles.bottomCancelText}>
              Cancel
        </Text>
          </View>


          <LinearGradient
            colors={['#FDC344', '#FDE490']}
            style={styles.bottomLinearGradient}
          >
            <Text
              style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
              onPress={() => this.props.navigation.navigate('RateTheDay4')}
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

RateTheDay3Screen.navigationOptions = {
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
    fontFamily: 'roboto-300',
    // fontWeight: '300',
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
    fontFamily: 'roboto-300',
    // fontWeight: '300',
    // fontSize: 32,
    // lineHeight: 37,
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
    marginBottom: 15,
  },

  dayBgTextBold: {
    fontFamily: 'roboto-700',
    // fontWeight: '700',
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
    fontFamily: 'quicksand-500',
    // fontWeight: '500',
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    color: '#747693',
  },

  rateParamNumber: {
    fontFamily: 'quicksand-500',
    // fontWeight: '500',
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
    fontFamily: 'roboto-300',
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