import React from 'react';
import {
  Image,
  Platform,
  // ScrollView,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo';

export default class ViewDayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Brief of the Day' };
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.topView}>

        <View style={styles.dayTitleView}>
        <Text style={styles.dayTitleText}>
          May, 12th
          </Text>
          <Image
              source={
                require('../assets/images/export-icon.png')
              }
              style={styles.exportImage}
            />
      </View>

          {/* <Text style={styles.dayTitleText}>
            May, 12th
        </Text> */}

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

            {/* <View style={styles.bottomCancelView}>
              <Text style={styles.bottomCancelText}>
                Cancel
              </Text>
            </View> */}
            {/* <LinearGradient
              colors={['#4e53ff', '#4e53ff']}
              style={styles.bottomLinearGradient}
            >
              <Text
                style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                Done
          </Text>
            </LinearGradient> */}
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

  dayTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 0.2,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    // paddingBottom: 10,
  },

  chartHappinessViewWrapper: {
    position: 'absolute',
    height: '100%',
    flex: 0.3,
    width: '35%',
    justifyContent: 'flex-end'
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

  topView: {
    paddingTop: 30,
    flex: 0.4,
    position: 'relative',
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
    // paddingLeft: 15,
    // flex: 0.18,
  },

  chartWrapperView: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 15,
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

  // chartHealthView: {
  //   flex: 0.25,
  //   height: '78%',
  // },

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
    transform: [
      { rotate: '-90deg' },
      { translateX: 50 },
      { translateY: -35 },
    ],
  },

  // chartRomanceView: {
  //   flex: 0.25,
  //   height: '100%',
  // },


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

  // chartCareerView: {
  //   flex: 0.25,
  //   height: '64%',
  // },

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
    alignItems: 'center',
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

  bottomNavigationView: {
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
    bottom: 20,
    left: 15,
  },

  bottomLinearGradient: {
    height: '100%',
    flex: 0.49,
    position: 'relative',
    alignSelf: 'stretch',
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