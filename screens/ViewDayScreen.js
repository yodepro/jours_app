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
  AppRegistry,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo';
// import Slider from '@react-native-community/slider';
// import Slider from 'react-native-slider';

// export default function ViewDay() {
export default class ViewDayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Brief of the Day' };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topView}>

          <Text style={styles.dayTitleText}>
            May, 12th
        </Text>

        <View style={styles.chartWrapperView}>
            <View style={styles.chartInnerView}>
              <View style={styles.chartInnerTopView}>
                <Text style={styles.chartInnerTopText}>
                  Edit
                </Text>
              </View>

              <View style={styles.chartInnerBottomView}>
                <View style={styles.chartBlankView}>
                <Text style={styles.happinessRateText}>
                      7.8
                    </Text>
                </View>

                <View style={styles.chartHappinessView}>
                  <LinearGradient
                    colors={['#3884FF', '#60D7FF']}
                    style={styles.chartHappinessLinearGradient}
                  >
                    <Text style={styles.happinessTitleText}>
                      Happiness
                    </Text>
                  </LinearGradient>
                </View>

                <View style={styles.chartHealthView}>
                  <LinearGradient
                    colors={['#F734A8', '#F78B79']}
                    style={styles.chartHealthLinearGradient}
                  >
                    <Text style={styles.healthTitleText}>
                      Health
                    </Text>
                    <Text style={styles.healthRateText}>
                      5.6
                    </Text>
                  </LinearGradient>
                </View>
                <View style={styles.chartRomanceView}>

                  <LinearGradient
                    colors={['#4CD9D9', '#48E9C7']}
                    style={styles.chartRomanceLinearGradient}
                  >
                    <Text style={styles.romanceTitleText}>
                      Romance
                    </Text>
                    <Text style={styles.romanceRateText}>
                      10
                    </Text>
                  </LinearGradient>
                </View>

                <View style={styles.chartCareerView}>
                  <LinearGradient
                    colors={['#FDC344', '#FDE490']}
                    style={styles.chartCareerLinearGradient}
                  >
                    <Text style={styles.careerTitleText}>
                      Career
                    </Text>
                    <Text style={styles.careerRateText}>
                      2.8
                    </Text>
                  </LinearGradient>
                </View>
              </View>
            </View>
          </View>

        </View>

        <View style={{ flex: 0.04, }}></View>

        <View style={styles.textInputView}>



          <TextInput
            style={styles.mainTextInput}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            multiline={true}
          />
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
              colors={['#4e53ff', '#4e53ff']}
              style={styles.bottomLinearGradient}
            >
              <Text
                style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                Done
          </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

ViewDayScreen.navigationOptions = {
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
    flex: 0.4,
    position: 'relative',
  },

  topViewInner: {
    position: 'relative',
    backgroundColor: 'red',
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

  chartWrapperView: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    height: '80%',
    width: '100%',
  },

  chartInnerView: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 23,
    shadowColor: "#3884ff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 13,
  },

  chartInnerTopView: {
    height: '20%',
    paddingTop: 10,
    paddingRight: 15,
  },

  chartInnerTopText: {
    fontFamily: 'roboto-700',
    textAlign: 'right',
    // fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    color: '#747693',
  },

  chartInnerBottomView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '80%',
    position: 'relative',
  },

  chartBlankView: {
    flex: 0.25,
    height: '100%',
    position: 'relative',
    zIndex: 2,
  },

  chartHappinessView: {
    position: 'absolute',
    height: '78%',
    flex: 0.3,
    width: '35%',
  },

  chartHappinessLinearGradient: {
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 0,
    height: '100%',
    position: 'relative',
  },

  happinessTitleText: {
    width: 100,
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: '#266BDA',
    transform: [
      { rotate: '-90deg' },
      { translateX: 50 },
      { translateY: -35 },
    ],
  },

  happinessRateText: {
    fontFamily: 'roboto-900',
    fontSize: 32,
    lineHeight: 37,
    // textAlign: 'right',
    letterSpacing: -1.6,
    color: '#BDEEFF',
    position: 'absolute',
    bottom: 0,
    right: 5,
  },

  healthRateText: {
    fontFamily: 'roboto-900',
    fontSize: 32,
    lineHeight: 37,
    // textAlign: 'right',
    letterSpacing: -1.6,
    color: '#FFB9B2',
    position: 'absolute',
    bottom: 0,
    right: 5,
  },

  romanceRateText: {
    fontFamily: 'roboto-900',
    fontSize: 32,
    lineHeight: 37,
    // textAlign: 'right',
    letterSpacing: -1.6,
    color: '#A2FFEC',
    position: 'absolute',
    bottom: 0,
    right: 5,
  },

  careerRateText: {
    fontFamily: 'roboto-900',
    fontSize: 32,
    lineHeight: 37,
    // textAlign: 'right',
    letterSpacing: -1.6,
    color: '#FFF8BE',
    position: 'absolute',
    bottom: 0,
    right: 5,
  },

  chartHealthView: {
    flex: 0.25,
    height: '56%',
  },

  chartHealthLinearGradient: {
    height: '100%',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: 'relative',
  },

  healthTitleText: {
    width: 100,
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: '#D41888',
    transform: [
      { rotate: '-90deg' },
      { translateX: 50 },
      { translateY: -35 },
    ],
  },

  chartRomanceView: {
    flex: 0.25,
    height: '100%',
  },



  chartRomanceLinearGradient: {
    height: '100%',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: 'relative',
  },

  chartCareerView: {
    flex: 0.25,
    height: '28%',
  },

  romanceTitleText: {
    width: 100,
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: '#28B6B6',
    transform: [
      { rotate: '-90deg' },
      { translateX: 50 },
      { translateY: -35 },
    ],
  },

  chartCareerLinearGradient: {
    height: '100%',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 23,
    position: 'relative',
  },

  careerTitleText: {
    width: 100,
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: '#D7A22C',
    transform: [
      { rotate: '-90deg' },
      { translateX: 50 },
      { translateY: -35 },
    ],
  },

  textInputView: {
    flex: 0.11,
    paddingLeft: 15,
    paddingRight: 15,
  },

  mainTextInput: {
    fontFamily: 'roboto-300',
    borderRadius: 23,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#3884ff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 13,
  },

  dayBgText: {
    fontFamily: 'roboto-300',
    // fontFamily: 'roboto-300',
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
    color: '#f739aa',
    // paddingLeft: 15,
    // paddingTop: 250,
    position: 'absolute',
    bottom: 20,
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