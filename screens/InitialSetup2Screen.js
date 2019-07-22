import React from 'react';
import {
  // Image,
  // Platform,
  // ScrollView,
  StyleSheet,
  Text,
  // TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class InitialSetup2Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jake',
      gender: 'Other',
      birthdate: '17.03.96',
      reminder: '9:30',
      isDateTimePickerVisible: false,
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    newDate = date.getDate() + "." + parseInt(date.getMonth() + 1) + "." + date.getFullYear();
    this.setState({ birthdate: newDate });
    this.hideDateTimePicker();
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
                onPress={() => this.props.navigation.navigate('InitialSetup3')}
              >
                Next
              </Text>
            </View>

            <View style={styles.topInnerView}>
              <Text style={styles.dayBgText}>
                What's you birth date?
              </Text>
              <Text
                style={styles.mainInput}
                onPress={this.showDateTimePicker}
              >
                {this.state.birthdate}
              </Text>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
            </View>
          </ImageBackground>
        </View>
      </View>
    )
  };
}

InitialSetup2Screen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    color: '#fff',
  },

  topView: {
    width: '100%',
    flex: 0.75,
    // backgroundColor: 'red',
  },

  nextView: {
    paddingTop: 30,
    paddingRight: 15,
  },

  topInnerView: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
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
    // fontSize: 32,
    // lineHeight: 37,
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
  },
});