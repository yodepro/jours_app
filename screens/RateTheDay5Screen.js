import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo';

export default class RateTheDay5Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Leave a brief note about the day' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.dayTitleView}>
            <Text style={styles.dayTitleText}>
              May, 12th
            </Text>
          </View>
          <View style={styles.chartWrapperView}>
            <View style={styles.chartInnerView}>
              <View style={styles.chartInnerTopView}>
                <Text style={styles.chartInnerTopText}>
                  Edit
                </Text>
              </View>
              <View style={styles.chartInnerBottomView}>
                <View style={styles.chartBlankView}>
                  <Text style={styles.happinessRateText}>7.8</Text>
                </View>
                <View style={styles.chartHappinessViewWrapper}>
                  <View style={styles.chartHappinessView}>
                    <LinearGradient
                      colors={['#3884FF', '#60D7FF']}
                      style={styles.chartHappinessLinearGradient}>
                      <View style={[styles.gradientCircleSm, styles.happinessCircle]}></View>
                      <View style={[styles.gradientCircleBig, styles.happinessCircle]}></View>
                    </LinearGradient>
                  </View>
                  <Text style={styles.happinessTitleText}>Happiness</Text>
                </View>
                <View style={styles.chartHealthViewWrapper}>
                  <View style={styles.chartHealthView}>
                    <LinearGradient
                      colors={['#F734A8', '#F78B79']}
                      style={styles.chartHealthLinearGradient}>
                      <View style={[styles.gradientCircleSm, styles.healthCircle]}></View>
                      <View style={[styles.gradientCircleBig, styles.healthCircle]}></View>
                    </LinearGradient>
                  </View>
                  <Text style={styles.healthTitleText}>Health</Text>
                  <Text style={styles.healthRateText}>5.6</Text>
                </View>
                <View style={styles.chartRomanceViewWrapper}>
                  <View style={styles.chartRomanceView}>
                    <LinearGradient
                      colors={['#4CD9D9', '#48E9C7']}
                      style={styles.chartRomanceLinearGradient}>
                      <View style={[styles.gradientCircleSm, styles.romanceCircle]}></View>
                      <View style={[styles.gradientCircleBig, styles.romanceCircle]}></View>
                    </LinearGradient>
                  </View>
                  <Text style={styles.romanceTitleText}>Romance</Text>
                  <Text style={styles.romanceRateText}>10</Text>
                </View>
                <View style={styles.chartCareerViewWrapper}>
                  <View style={styles.chartCareerView}>
                    <LinearGradient
                      colors={['#FDC344', '#FDE490']}
                      style={styles.chartCareerLinearGradient}>
                      <View style={[styles.gradientCircleSm, styles.careerCircle]}></View>
                      <View style={[styles.gradientCircleBig, styles.careerCircle]}></View>
                    </LinearGradient>
                  </View>
                  <Text style={styles.careerTitleText}>Career</Text>
                  <Text style={styles.careerRateText}>2.8</Text>
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
              <Text
                style={styles.bottomCancelText}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                &times; Cancel
              </Text>
            </View>
            <View
              style={styles.doneView}
            >
              <Image
                source={
                  require('../assets/images/oct1.png')
                }
                style={styles.doneImage}
              />
              <Text
                style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                Done
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

RateTheDay5Screen.navigationOptions = {
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
    flex: 0.4,
    position: 'relative',
  },

  doneView: {
    flex: 0.49,
  },

  doneImage: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    right: 0,
  },

  dayTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },

  dayTitleText: {
    fontFamily: 'roboto-300',
    fontSize: 27,
    letterSpacing: 0.6,
    color: '#8B8B8B',
    marginTop: 10,
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
    zIndex: 99,
  },

  chartInnerTopText: {
    fontFamily: 'roboto-700',
    textAlign: 'right',
    fontSize: 16,
    lineHeight: 19,
    color: '#747693',
    textDecorationLine: 'underline',
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

  chartHappinessViewWrapper: {
    position: 'absolute',
    height: '100%',
    flex: 0.3,
    width: '35%',
    justifyContent: 'flex-end'
  },

  chartHappinessView: {
    height: '89%', // 50% min + 78% / 2
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 23,
    overflow: 'hidden',
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
    letterSpacing: -1.6,
    color: '#FFF8BE',
    position: 'absolute',
    bottom: 0,
    right: 5,
  },

  chartHealthView: {
    flex: 0.78, // 0.5 min + 0.56 / 2
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
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
    flex: 1,
    height: '100%',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },

  chartRomanceLinearGradient: {
    height: '100%',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: 'relative',
  },

  chartHealthViewWrapper: {
    flex: 0.25,
    height: '100%',
    justifyContent: 'flex-end',
  },

  chartRomanceViewWrapper: {
    flex: 0.25,
    height: '100%',
    justifyContent: 'flex-end',
  },

  chartCareerViewWrapper: {
    flex: 0.25,
    height: '100%',
    justifyContent: 'flex-end',
  },

  chartCareerView: {
    flex: 0.64, // 0.5 min + 0.28 / 2
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 23,
    overflow: 'hidden',
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

  dayBgTextBold: {
    fontFamily: 'roboto-700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
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
    color: '#f739aa',
    position: 'absolute',
    bottom: 60,
    left: 15,
  },

  dayBgTextBoldBottom: {
    position: 'absolute',
    bottom: 70,
    right: 45,
    textDecorationLine: 'underline',
  },

  gradientCircleSm: {
    width: 4,
    height: 4,
    position: 'absolute',
    left: 15,
    top: 10,
    borderRadius: 2,
  },

  gradientCircleBig: {
    width: 9,
    height: 9,
    position: 'absolute',
    left: 8,
    top: 15,
    borderRadius: 4.5,
  },

  happinessCircle: {
    backgroundColor: '#BDEEFF',
  },

  healthCircle: {
    backgroundColor: '#FFB9B2',
  },

  romanceCircle: {
    backgroundColor: '#A2FFEC',
  },

  careerCircle: {
    backgroundColor: '#FFF8BE',
  },
});