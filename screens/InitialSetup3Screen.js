import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { isIphoneX } from '../is-iphone-x';

export default class InitialSetup3Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminder: '9:30',
      isAlarmPickerVisible: false,
    };
  }

  showAlarmPicker = () => {
    this.setState({ isAlarmPickerVisible: true });
  };
  hideAlarmPicker = () => {
    this.setState({ isAlarmPickerVisible: false });
  };
  handleTimePicked = date => {
    newTime = date.getHours() + ':' + date.getMinutes();
    this.setState({ reminder: newTime });
    this.hideAlarmPicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <ImageBackground
            source={require('../assets/images/setup-bg.png')}
            style={styles.backgroundImage}
          >
            <View style={styles.nextView}>
              <Text
                style={[styles.dayBgText, styles.dayBgTextBold]}
                onPress={() => this.props.navigation.navigate('InitialSetup4')}
              >
                next >
              </Text>
            </View>
            <View style={styles.topInnerView}>
              <Text style={styles.dayBgText}>
                When does it suit you the best to be reminded of a rating?
              </Text>
              <View style={styles.topInnerInnerView}>
                <Text
                  onPress={this.showAlarmPicker}
                  style={styles.mainInput}
                >
                  {this.state.reminder}
                </Text>
                <DateTimePicker
                  isVisible={this.state.isAlarmPickerVisible}
                  onConfirm={this.handleTimePicked}
                  onCancel={this.hideAlarmPicker}
                  mode={'time'}
                />
              </View>
              <View style={styles.paginationView}>
                <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
                <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
                <View style={[styles.paginationItemView, styles.paginationItemActiveView]}></View>
                <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    )
  };
}

InitialSetup3Screen.navigationOptions = {
  header: null,
};

const mainPaddigTop = isIphoneX() ? 45 : 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    color: '#fff',
  },

  paginationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },

  paginationItemView: {
    backgroundColor: '#fff',
    height: 5,
    borderRadius: 4,
    marginRight: 2,
  },

  paginationItemInactiveView: {
    width: 10,
    opacity: .5,
  },

  paginationItemActiveView: {
    width: 21,
  },

  topView: {
    width: '100%',
    flex: 0.75,
  },

  nextView: {
    paddingTop: mainPaddigTop,
    paddingRight: 15,
  },

  topInnerInnerView: {
    position: 'relative',
    width: '60%',
  },

  topInnerView: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    bottom: '10%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    top: -10,
  },

  dayBgText: {
    fontFamily: 'roboto-300',
    fontSize: 32,
    lineHeight: 37,
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
  },

  dayBgTextBold: {
    fontFamily: 'roboto-700',
    fontSize: 32,
    lineHeight: 37,
    color: '#FFFFFF',
    textAlign: 'right',
    textDecorationLine: 'underline',
  },

  mainInput: {
    fontFamily: 'quicksand-500',
    fontSize: 32,
    lineHeight: 37,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 30,
  },
});