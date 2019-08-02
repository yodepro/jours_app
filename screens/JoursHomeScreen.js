import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import { isIphoneX } from '../is-iphone-x';
import { LineChart, Path, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class JoursHomeScreen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Brief of the Day',
      currentWeek: 1,
      weeksData: [
        [
          [5, 10, 3, 7, 1, 6, 4], // HEALTH
          [1, 7, 8, 10, 3, 5, 5], // ROMANCE
          [3, 1, 6, 2, 6, 7, 3], // CAREER
        ],
        [
          [4, 1, 6, 9, 10, 8, 4], // HEALTH
          [5, 8, 1, 9, 2, 4, 6], // ROMANCE
          [8, 5, 10, 9, 8, 3, 1], // CAREER
        ],
        [
          [6, 3, 9, 3, 4, 5, 8], // HEALTH
          [10, 9, 10, 5, 6, 6, 8], // ROMANCE
          [3, 4, 4, 8, 4, 9, 3], // CAREER
        ],
        [
          [3, 4, 5, 5, 8, 7, 5], // HEALTH
          [7, 7, 8, 4, 7, 4, 9], // ROMANCE
          [5, 8, 2, 5, 9, 2, 5], // CAREER
        ],
      ],
      monthData: [],
    };
  }

  renderHappinessChart = () => {
    var i = this.state.currentWeek - 1;
    return [
      (this.state.weeksData[i][0][0] + this.state.weeksData[i][1][0] + this.state.weeksData[i][2][0]) / 3,
      (this.state.weeksData[i][0][1] + this.state.weeksData[i][1][1] + this.state.weeksData[i][2][1]) / 3,
      (this.state.weeksData[i][0][2] + this.state.weeksData[i][1][2] + this.state.weeksData[i][2][2]) / 3,
      (this.state.weeksData[i][0][3] + this.state.weeksData[i][1][3] + this.state.weeksData[i][2][3]) / 3,
      (this.state.weeksData[i][0][4] + this.state.weeksData[i][1][4] + this.state.weeksData[i][2][4]) / 3,
      (this.state.weeksData[i][0][5] + this.state.weeksData[i][1][5] + this.state.weeksData[i][2][5]) / 3,
      (this.state.weeksData[i][0][6] + this.state.weeksData[i][1][6] + this.state.weeksData[i][2][6]) / 3
    ]
  }

  renderMonthChart = () => {
    var newMonthData = [
      [
        this.state.weeksData[0][0].concat(this.state.weeksData[1][0], this.state.weeksData[2][0], this.state.weeksData[3][0])
      ],
      [
        this.state.weeksData[0][1].concat(this.state.weeksData[1][1], this.state.weeksData[2][1], this.state.weeksData[3][1])
      ],
      [
        this.state.weeksData[0][2].concat(this.state.weeksData[1][2], this.state.weeksData[2][2], this.state.weeksData[3][2])
      ]
    ];
    this.setState({monthData: newMonthData});
  }

  showCurrentWeekDates() {
    if(this.state.currentWeek === 1) {
      return '01.04 - 07.04';
    } else if(this.state.currentWeek === 2) {
      return '25.03 - 31.03';
    } else if(this.state.currentWeek === 3) {
      return '18.03 - 24.03';
    } else if(this.state.currentWeek === 4) {
      return '11.03 - 17.03';
    }
  }

  renderCurrentWeek = (i) => {
    return this.state.weeksData[this.state.currentWeek - 1][i];
  }

  changeLeftArrowOpacity = () => {
    if(this.state.currentWeek === 4) {
      return { opacity: .5 }
    }
  }

  changeRightArrowOpacity = () => {
    if(this.state.currentWeek === 1) {
      return { opacity: .5 }
    }
  }

  render() {
    const Shadow = ({ line }) => (
      <Path
        key={'shadow'}
        y={6}
        d={line}
        fill={'none'}
        strokeWidth={6}
        stroke={'rgba(134, 65, 244, 0.05)'}
      />
    )

    return (
      <View style={styles.container}>
        <View style={styles.topInfoView}>
          <View style={styles.topInfoDateView}>
            <Text style={styles.dayTitleText}>May, 12th</Text>
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
                <Text style={styles.chartArrowText}>⟵</Text>
                <Text style={styles.chartInnerTopDateMiddleText}>
                  May, 12th
                </Text>
                <Text style={[styles.chartArrowText, {opacity: .5}]}>⟶</Text>
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

            <View style={styles.chartInnerDownViewHeader}>
              <View style={styles.chartInnerDownViewHeaderTop}>
                <Text style={[styles.chartWeekOrMonthText, styles.chartWeekOrMonthTextActive, { marginRight: 10 }]}>week</Text>
                <Text 
                  style={[styles.chartWeekOrMonthText, { marginLeft: 10 }]}
                  onPress={() => {console.log(this.renderMonthChart())}}
                >month</Text>
              </View>
              <View style={styles.chartInnerDownViewHeaderBottom}>
                <Text
                  onPress={() => { 
                    if(this.state.currentWeek !== 4) {
                      this.setState({ currentWeek: parseInt(this.state.currentWeek + 1) || 0 });                      
                    }
                  }}
                  style={[styles.chartArrowText, this.changeLeftArrowOpacity(), {
                    paddingBottom: 10, 
                    paddingRight: 30, 
                    alignItems: 'center',
                    // this.state.currentWeek
                  }]}
                >⟵</Text>
                <Text style={styles.dateRangeText}>                  
                  {this.showCurrentWeekDates()}
                </Text>
                <Text
                  onPress={() => {
                    if(this.state.currentWeek !== 1) {
                      this.setState({ currentWeek: parseInt(this.state.currentWeek - 1) || 0 });
                    }
                  }}
                  style={[styles.chartArrowText, this.changeRightArrowOpacity(), {
                    paddingBottom: 10, 
                    paddingLeft: 30, 
                    alignItems: 'center',
                  }]}
                >⟶</Text>
              </View>
            </View>

            <View style={[styles.lineChartWrapperView, { zIndex: 9998 }]}>
              <LineChart
                style={{
                  height: '100%',
                }}
                data={this.renderHappinessChart()}
                yMin={0}
                yMax={10}
                svg={{
                  stroke: '#3884ff',
                  strokeWidth: 6,
                }}
                contentInset={{ top: 70, bottom: 40, left: 30, right: 30 }}
                curve={shape.curveCardinal}
              >
                <Grid />
                <Shadow />
              </LineChart>
            </View>
            <View style={styles.lineChartWrapperView}>
              <LineChart
                style={{
                  height: '100%',
                }}
                data={this.renderCurrentWeek(0)}
                yMin={0}
                yMax={10}
                svg={{
                  stroke: '#f737a9',
                  strokeWidth: 3,
                }}
                contentInset={{ top: 70, bottom: 40, left: 30, right: 30 }}
                curve={shape.curveCardinal}
              >
                <Shadow />
              </LineChart>
            </View>
            <View style={styles.lineChartWrapperView}>
              <LineChart
                style={{
                  height: '100%',
                }}
                data={this.renderCurrentWeek(1)}
                yMin={0}
                yMax={10}
                svg={{
                  stroke: '#4dd8d7',
                  strokeWidth: 3,
                }}
                contentInset={{ top: 70, bottom: 40, left: 30, right: 30 }}
                curve={shape.curveCardinal}
              >
                <Shadow />
              </LineChart>
            </View>
            <View style={styles.lineChartWrapperView}>
              <LineChart
                style={{
                  height: '100%',
                }}
                data={this.renderCurrentWeek(2)}
                yMin={0}
                yMax={10}
                svg={{
                  stroke: '#fdc344',
                  strokeWidth: 3,
                }}
                contentInset={{ top: 70, bottom: 40, left: 30, right: 30 }}
                curve={shape.curveCardinal}
              >
                <Shadow />
              </LineChart>
            </View>
            <View style={styles.xAxisView}>
              <Text style={styles.xLabel}>
                <Text style={styles.xLabelDate}>01</Text>
                {"\n"}
                <Text>M</Text>
              </Text>
              <Text style={styles.xLabel}>
                <Text style={styles.xLabelDate}>02</Text>
                {"\n"}
                <Text>T</Text>
              </Text>
              <Text style={styles.xLabel}>
                <Text style={styles.xLabelDate}>03</Text>
                {"\n"}
                <Text>W</Text>
              </Text>
              <Text style={styles.xLabel}>
                <Text style={styles.xLabelDate}>04</Text>
                {"\n"}
                <Text>T</Text>
              </Text>
              <Text style={styles.xLabel}>
                <Text style={styles.xLabelDate}>05</Text>
                {"\n"}
                <Text>F</Text>
              </Text>
              <Text style={styles.xLabel}>
                <Text style={styles.xLabelDate}>06</Text>
                {"\n"}
                <Text>S</Text>
              </Text>
              <Text style={styles.xLabel}>
                <Text style={styles.xLabelDate}>07</Text>
                {"\n"}
                <Text>S</Text>
              </Text>
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

  chartArrowText: {
    fontSize: 20,
    color: '#8a8ba4',
    marginTop: -8,
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
    // backgroundColor: 'red',
    // marginTop: 7.5,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'space-between',
    paddingBottom: 10,
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

  lineChartWrapperView: {
    position: 'absolute',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  xAxisView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
  },

  xLabel: {
    color: '#C5C4D2',
    // fontSize: 10,
    textAlign: 'center',
  },

  xLabelDate: {
    fontWeight: '700',
    marginBottom: 25,
    lineHeight: 25,
  },

  chartInnerDownViewHeader: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },

  chartInnerDownViewHeaderTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  chartInnerDownViewHeaderBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 99999,
  },

  dateRangeText: {
    fontWeight: '700',
    color: '#747693',
  },

  chartWeekOrMonthText: {
    color: '#747693',
    opacity: .6,
    textDecorationLine: 'underline',
    zIndex: 99999,
  },

  chartWeekOrMonthTextActive: {
    opacity: 1,
    textDecorationLine: 'none',
  },
});
