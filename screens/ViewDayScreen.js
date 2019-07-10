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
                <View style={styles.chartBlankView}></View>

                <View style={styles.chartHappinessView}>
                  <LinearGradient
                    colors={['#3884FF', '#60D7FF']}
                    style={styles.chartHappinessLinearGradient}
                  >
                    <Text>
                      lorem!
                    </Text>
                  </LinearGradient>
                </View>

                <View style={styles.chartHealthView}>
                  <LinearGradient
                    colors={['#F734A8', '#F78B79']}
                    style={styles.chartHealthLinearGradient}
                  >
                    <Text>
                      Lorem ipsum dolor sit amet.
                </Text>
                  </LinearGradient>
                </View>
                <View style={styles.chartRomanceView}>

                  <LinearGradient
                    colors={['#4CD9D9', '#48E9C7']}
                    style={styles.chartRomanceLinearGradient}
                  >
                    <Text>
                      Lorem ipsum dolor sit amet.
                </Text>
                  </LinearGradient>
                </View>

                <View style={styles.chartCareerView}>
                  <LinearGradient
                    colors={['#FDC344', '#FDE490']}
                    style={styles.chartCareerLinearGradient}
                  >
                    <Text>
                      Lorem ipsum dolor sit amet.
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
              <Text style={[styles.dayBgTextBold, styles.dayBgTextBoldBottom]}>
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
    textAlign: 'right',
    fontWeight: '700',
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
  },

  chartHappinessView: {
    position: 'absolute',
    height: '100%',
    flex: 0.3,
    width: '35%',
  },

  chartHappinessLinearGradient: {
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 0,
    height: '100%',
  },

  chartHealthView: {
    flex: 0.25,
    height: '70%',
  },

  chartHealthLinearGradient: {
    height: '100%',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  chartRomanceView: {
    flex: 0.25,
    height: '90%',
  },

  chartRomanceLinearGradient: {
    height: '100%',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  chartCareerView: {
    flex: 0.25,
    height: '60%',
  },

  chartCareerLinearGradient: {
    height: '100%',
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 23,
  },

  textInputView: {
    flex: 0.11,
    paddingLeft: 15,
    paddingRight: 15,
  },

  mainTextInput: {
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