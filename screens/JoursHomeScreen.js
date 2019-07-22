import React from 'react';
import { 
  Image,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { LinearGradient } from 'expo';
import { isIphoneX } from '../is-iphone-x'

export default class JoursHomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Brief of the Day' };
  }

  render() {
   

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
          <Text style={[styles.dayBgTextBold, styles.dayBgTextBoldDark]}>
            The journey is a series of steps, Jake
          </Text>
        </View>
        <View style={styles.chartWrapperView}>
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
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus aliquam harum minima odit in excepturi, repellendus
              vero eveniet voluptatum, quaerat, ipsam asperiores neque inventore
              doloremque iusto quam corrupti labore blanditiis?
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

JoursHomeScreen.navigationOptions = {
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
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: mainPaddigTop,
  },

  topView: {
    paddingTop: 30,
    flex: 0.5,
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

  bottomView: {
    flex: 0.3,
  },

  topViewInner: {
    position: 'relative',
    backgroundColor: 'red',
  },

  dayTitleText: {
    fontFamily: 'roboto-300',
    fontSize: 27,
    letterSpacing: 0.6,
    color: '#8B8B8B',
  },

  chartInnerTopDateMiddleText: {
    // fontSize: 16,
    // lineHeight: 19,
    textAlign: 'center',
    color: '#C5C4D2',
    // paddingTop: 5,
  },

  chartWrapperView: {
    paddingBottom: 15,
    flex: 1,
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
    // backgroundColor: 'red',
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
    // marginTop: 5,
    // backgroundColor: 'yellow',
  },

  chartInnerBottomDateRightView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor: 'green',
  },

  chartInnerBottomDateLeftText: {
    // fontSize: 16,
    // lineHeight: 19,
    color: '#C5C4D2',
    paddingLeft: 15,
  },

  chartInnerTopText: {
    fontFamily: 'roboto-700',
    textAlign: 'right',
    // fontSize: 16,
    // lineHeight: 19,
    color: '#747693',
    paddingRight: 15,
    textDecorationLine: 'underline',
  },

  chartInnerBottomView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '70%',
    position: 'relative',
    // backgroundColor: 'blue',
  },

  chartInnerUpperView: {
    marginBottom: 7.5,
  },

  chartInnerDownView: {
    marginTop: 7.5,
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
    // position: 'absolute',
    height: '89%', // 50% min + 78% / 2
    // flex: 0.3,
    // width: '35%',
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
    // height: '56%',
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
    // height: '28%',
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

  dayBgTextBoldDark: {
    color: '#747693',
    paddingTop: 15,
    paddingBottom: 8,
  },

  dayBgTextBoldBottom: {
    position: 'absolute',
    bottom: 15,
    left: 15,
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
