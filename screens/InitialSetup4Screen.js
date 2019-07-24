import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  TextInput,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class InitialSetup4Screen extends React.Component {
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
                onPress={() => this.props.navigation.navigate('Home')}
              >
                check >
              </Text>
            </View>

            <View style={styles.topInnerView}>
              <Text style={styles.dayBgText}>
              What's your birth date?
              </Text>
              {/* <View style={styles.topInnerInnerView}> */}
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
                                      <View style={styles.paginationView}>
            
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
            <View style={[styles.paginationItemView, styles.paginationItemActiveView]}></View>
          </View>


            {/* </View> */}
              {/* <TextInput
                style={styles.mainInput}
                onChangeText={(reminder) => this.setState({ reminder })}
                value={this.state.reminder}
              /> */}
            </View>
          </ImageBackground>
        </View>
      </View>
    )
  };
}

InitialSetup4Screen.navigationOptions = {
  header: null,
};

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

  arrowImage: {
    position: 'absolute',
    right: 0,
    bottom: 11,
    transform: [
      {scale: 0.7}
    ],
    zIndex: 999,
  },

  modalDropdownStyle: {
    position: 'relative',
    zIndex: 1,
    // backgroundColor: 'green',
  },

  topView: {
    width: '100%',
    flex: 0.75,
    // backgroundColor: 'red',
  },

  nextView: {
    paddingTop: 45,
    paddingRight: 15,
  },

  topInnerInnerView: {
    position: 'relative',
    width: '60%',
    // backgroundColor: 'red',
    // paddingLeft: 20,
    // paddingRight: 20,
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
    textAlign: 'left',
    marginTop: 30,
  },

  mainInputDropdown: {
    color: '#747693',
    textAlign: 'left',
    width: '60%',
    fontSize: 20,
  },  
});