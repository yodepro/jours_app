import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import {
  // Image,
  Platform,
  // ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import Slider from 'react-native-slider';

export default class RateTheDay2Screen extends React.Component {
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
              colors={['#F734A8', '#F78B79']}
              style={styles.mainLinearGradient}
            >

              <Text style={styles.dayBgText}>
              Let’s be a bit more specific.
Please rate your feelings about
your work today
            </Text>

              {/* <Text style={styles.dayBgTextBold}>
                How does your health makes you feel?
            </Text> */}

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
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={10}
              step={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
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

            <LinearGradient
              colors={['#4CD9D9', '#48E9C7']}
              style={styles.bottomLinearGradient}
            >
              <Text
                style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
                onPress={() => this.props.navigation.navigate('RateTheDay3')}
              >
                Next to{"\n"}
                romance
          </Text>
            </LinearGradient>

          </View>
        </View>

      </View>
    );
  }
}

RateTheDay2Screen.navigationOptions = {
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
    flex: 0.55,
  },

  dayTitleText: {
    fontFamily: 'roboto-300',
    // fontSize: 32,
    // lineHeight: 37,
    fontSize: 27,
    letterSpacing: 0.6,
    color: '#8B8B8B',
    paddingLeft: 15,
    flex: 0.18,
    marginTop: 10,
  },

  mainLinearGradientWrapperView: {
    flex: 0.82,
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
    // fontSize: 32,
    // lineHeight: 37,
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
    // backgroundColor: 'red',
    width: '100%',
  },

  rateParamView: {
    backgroundColor: '#fff',
    borderRadius: 23,
    paddingTop: 40,
    paddingBottom: 20,
    position: 'relative',
    // left: 15,
    // top: 0,
    width: '100%',
    // zIndex: 5,

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
    fontSize: 64,
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
    bottom: Platform.OS === 'ios' ? 28 : 32,
    left: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottomCancelTextRight: {
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    color: '#C5C4D2',
    position: 'absolute',
    bottom: 30,
    left: 35,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Platform.OS === 'ios' ? 10 : 0,
  },

  // bottomCancelArrowText: {
  //   marginTop: -10,
  // },

  // bottomCancelWordText: {
  //   marginTop: 20,
  // },

  bottomLinearGradient: {
    height: '100%',
    flex: 0.49,
    position: 'relative',
    alignSelf: 'stretch',
  },

  dayBgTextBoldBottom: {
    textDecorationLine: 'underline',
    position: 'absolute',
    bottom: 15,
    left: 15,
  },
});