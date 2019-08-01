import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo';
import { isIphoneX } from '../is-iphone-x';
import { LineChart, Path, Grid } from 'react-native-svg-charts';

export default class JoursHomeScreen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Brief of the Day',
    };
  }

  render() {
    const healthData = [5, 10, 3, 7, 1, 6, 4];
    const romanceData = [1, 7, 8, 10, 3, 5, 5];
    const careerData = [3, 1, 6, 2, 6, 7, 3];
    const happinessData = [
      (healthData[0] + romanceData[0] + careerData[0]) / 3,
      (healthData[1] + romanceData[1] + careerData[1]) / 3,
      (healthData[2] + romanceData[2] + careerData[2]) / 3,
      (healthData[3] + romanceData[3] + careerData[3]) / 3,
      (healthData[4] + romanceData[4] + careerData[4]) / 3,
      (healthData[5] + romanceData[5] + careerData[5]) / 3,
      (healthData[6] + romanceData[6] + careerData[6]) / 3,
    ];

    const Shadow = ({ line }) => (
      <Path
        key={'shadow'}
        y={8}
        d={line}
        fill={'none'}
        strokeWidth={2}
        stroke={'rgba(134, 65, 244, 0.1)'}
      />
    )

    return (
      <View style={styles.container}>
        <View style={styles.topInfoView}>
          <View style={styles.topInfoDateView}>
            <Text style={styles.dayTitleText}>May, 112th</Text>
            <Image
              source={
                require('../assets/images/export-icon.png')
              }
              style={styles.exportImage}
            />
          </View>
        </View>
        <View style={styles.chartWrapperView}>
          <View style={styles.mainBgImageWrapper}>
            <Image
              style={styles.mainBgImage}
              source={require('../assets/images/home-bg.png')}
            />
          </View>
          <Text style={[styles.dayBgTextBold, styles.dayBgTextBoldDark]}>
            The journey is a series of steps, Jake
          </Text>
          <View style={[styles.chartInnerView, styles.chartInnerUpperView]}>
            <View style={styles.chartInnerTopView}>
              <View style={styles.chartInnerTopDateView}>
                <Text style={styles.chartInnerTopDateLeftText}>⟵</Text>
                <Text style={styles.chartInnerTopDateMiddleText}>
                  May, 12th
                </Text>
                <Text style={styles.chartInnerTopDateRightText}>⟶</Text>
              </View>
              <View style={styles.chartInnerBottomDateView}>
                <View style={styles.chartInnerBottomDateLeftView}>
                  <Text style={styles.chartInnerBottomDateLeftText}>
                    rated today at{'\n'}
                    14:30
                  </Text>
                </View>
                <View style={styles.chartInnerBottomDateRightView}>
                  <Text style={styles.chartInnerTopText}>View</Text>
                  <Text style={styles.chartInnerTopText}>Edit</Text>
                </View>
              </View>
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
                    style={styles.chartCareerLinearGradient}
                  >
                    <View style={[styles.gradientCircleSm, styles.careerCircle]}></View>
                    <View style={[styles.gradientCircleBig, styles.careerCircle]}></View>
                  </LinearGradient>
                </View>
                <Text style={styles.careerTitleText}>Career</Text>
                <Text style={styles.careerRateText}>2.8</Text>
              </View>
            </View>
          </View>
          <View style={[styles.chartInnerView, styles.chartInnerDownView]}>
            <View
              style={{
                position: 'absolute',
                zIndex: 9999,
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <LineChart
                style={{
                  height: 200,
                }}
                data={happinessData}
                yMin={0}
                yMax={10}
                svg={{
                  stroke: '#3884ff',
                  strokeWidth: 3,
                }}
                contentInset={{ top: 20, bottom: 20 }}
              >
                <Grid />
                <Shadow />
              </LineChart>
            </View>
            <View
              style={{
                position: 'absolute',
                zIndex: 9999,
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <LineChart
                style={{
                  height: 200,
                }}
                data={healthData}
                yMin={0}
                yMax={10}
                svg={{
                  stroke: '#f737a9',
                  strokeWidth: 3,
                }}
                contentInset={{ top: 20, bottom: 20 }}
              >
                {/* <Grid/> */}
                <Shadow />
              </LineChart>
            </View>
            <View
              style={{
                position: 'absolute',
                zIndex: 9999,
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <LineChart
                style={{
                  height: 200,
                }}
                data={romanceData}
                yMin={0}
                yMax={10}
                svg={{
                  stroke: '#4dd8d7',
                  strokeWidth: 3,
                }}
                contentInset={{ top: 20, bottom: 20 }}
              >
                {/* <Grid/> */}
                <Shadow />
              </LineChart>
            </View>
            <View
              style={{
                position: 'absolute',
                zIndex: 9999,
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <LineChart
                style={{
                  height: 200,
                }}
                data={careerData}
                yMin={0}
                yMax={10}
                svg={{
                  stroke: '#fdc344',
                  strokeWidth: 3,
                }}
                contentInset={{ top: 20, bottom: 20 }}
              >
                {/* <Grid/> */}
                <Shadow />
              </LineChart>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

JoursHomeScreen1.navigationOptions = {
  header: null,
  tabBarVisible: true,
};

const mainPaddigTop = isIphoneX() ? 45 : 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    position: 'relative',
    height: '100%',
    paddingBottom: 20,
  },

  chartWrapperView: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  topInfoView: {
    paddingTop: mainPaddigTop,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  mainBgImageWrapper: {
    position: 'absolute',
    height: '100%',
    width: '70%',
    right: 0,
    textAlign: 'right',
  },

  mainBgImage: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    right: 0,
    top: '5%',
    position: 'relative',
  },

  topInfoDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  chartInnerTopDateLeftText: {
    fontSize: 20,
    color: '#8a8ba4',
    marginTop: -8,
  },

  chartInnerTopDateRightText: {
    fontSize: 20,
    color: '#cecdd9',
    marginTop: -8,
  },

  dayTitleText: {
    fontFamily: 'roboto-300',
    fontSize: 27,
    letterSpacing: 0.6,
    color: '#8B8B8B',
  },

  chartInnerTopDateMiddleText: {
    textAlign: 'center',
    color: '#C5C4D2',
  },

  chartWrapperView: {
    paddingBottom: 15,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },

  chartInnerView: {
    position: 'relative',
    width: '100%',
    flex: 0.5,
    backgroundColor: '#fff',
    borderRadius: 23,
    shadowColor: '#3884ff',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 13,
  },

  chartInnerTopView: {
    height: '30%',
    paddingTop: 10,
    zIndex: 99,
  },

  chartInnerTopDateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },

  chartInnerBottomDateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  chartInnerBottomDateRightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  chartInnerBottomDateLeftText: {
    color: '#C5C4D2',
    paddingLeft: 15,
  },

  chartInnerTopText: {
    fontFamily: 'roboto-700',
    textAlign: 'right',
    color: '#747693',
    paddingRight: 15,
    textDecorationLine: 'underline',
  },

  chartInnerBottomView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '70%',
    position: 'relative',
  },

  chartInnerUpperView: {
    marginBottom: 7.5,
  },

  chartInnerDownView: {
    marginTop: 7.5,
    overflow: 'hidden',
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
    justifyContent: 'flex-end',
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
    transform: [{ rotate: '-90deg' }, { translateX: 50 }, { translateY: -35 }],
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
    transform: [{ rotate: '-90deg' }, { translateX: 50 }, { translateY: -35 }],
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
    transform: [{ rotate: '-90deg' }, { translateX: 50 }, { translateY: -35 }],
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
    zIndex: 9,
    left: 0,
    bottom: 0,
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    textTransform: 'uppercase',
    color: '#D7A22C',
    transform: [{ rotate: '-90deg' }, { translateX: 50 }, { translateY: -35 }],
  },

  dayBgTextBold: {
    fontFamily: 'roboto-700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
  },

  dayBgTextBoldDark: {
    color: '#747693',
    paddingTop: 15,
    paddingBottom: 8,
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
