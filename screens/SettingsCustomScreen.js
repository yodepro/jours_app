import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  // ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { LinearGradient } from 'expo';
import ModalDropdown from 'react-native-modal-dropdown';

export default class SetingsCustomScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jake',
      gender: 'Other',
      birthdate: '17.03.96',
      reminder: '9:30',
      isDateTimePickerVisible: false,
      receiveNotifications: false,
      storeBackup: false,
    };
  }

  toggleReceiveNotifications = (value) => {
    this.setState({ receiveNotifications: value })
  }

  toggleStoreBackup = (value) => {
    this.setState({ storeBackup: value })
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
        <View style={styles.dayTitleView}>
          <Text style={styles.dayTitleText}>
            Settings
          </Text>
        </View>
        <View style={styles.mainWrapperView}>
          <View style={styles.mainView}>
            <View style={styles.inputGroupWrapperView}>
              <View style={styles.inputGroupView}>
                <Text style={styles.labelText}>
                  How shall I call you?
                </Text>
                <TextInput
                  style={styles.mainInput}
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name}
                />
              </View>
              <View style={styles.inputGroupView}>
                <Text style={styles.labelText}>
                  What's your gender?
                </Text>
                <ModalDropdown
                  style={styles.modalDropdownStyle}
                  defaultValue='Other'
                  dropdownTextStyle={styles.mainInput}                 
                  textStyle={styles.mainInput}
                  // dropdownStyle={{width:'85%', height:'auto', Platform.OS === 'ios' ? 20 : 16, marginTop: -25, }}
                  dropdownStyle={{ width:'85%', height:'auto', marginTop: Platform.OS === 'ios' ? 0 : -25, }}
                  options={['Other', 'Male', 'Female']}                  
                />
                          <Image
                            source={
                              require('../assets/images/arrow-down-1.png')
                            }
                            style={styles.arrowImage}
                          />
              </View>
              <View style={styles.inputGroupView}>
                <Text style={styles.labelText}>
                  What's your birth date?
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
              <View style={styles.inputGroupView}>
                <Text style={styles.labelText}>
                  What time shall I remind you of a rating?
                </Text>
                <TextInput
                  style={styles.mainInput}
                  onChangeText={(reminder) => this.setState({ reminder })}
                  value={this.state.reminder}
                />
              </View>
            </View>
            <View style={styles.mainSettingsView}>
              <View style={[
                styles.mainSettingsItemView,
                { marginBottom: 5},
              ]}>
                <View style={styles.mainSettingsItemLeftView}>
                  <Text style={styles.labelText}>
                    Receive notifications
                  </Text>
                </View>
                <View style={styles.mainSettingsItemRightView}>
                  <LinearGradient
                    colors={['#60D7FF', '#3884FF']}
                    style={styles.switchLinearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Switch
                      thumbColor={'#266bda'}
                      trackColor={{false:'transparent', true:'transparent'}}
                      onValueChange={this.toggleReceiveNotifications}
                      value={this.state.receiveNotifications}
                    />
                  </LinearGradient>
                </View>
              </View>
              <View style={styles.mainSettingsItemView}>
                <View style={styles.mainSettingsItemLeftView}>
                  <Text style={styles.labelText}>
                    Store backup at iCloud
                  </Text>
                </View>
                <View style={styles.mainSettingsItemRightView}>
                  <LinearGradient
                    colors={['#60D7FF', '#3884FF']}
                    style={styles.switchLinearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Switch
                      thumbColor={'#266bda'}
                      trackColor={{false:'transparent', true:'transparent'}}
                      onValueChange={this.toggleStoreBackup}
                      value={this.state.storeBackup}
                    />
                  </LinearGradient>
                </View>
              </View>
            </View>
            <View style={styles.externalLinksView}>
              <Text style={styles.externalLinksTitleText}>
                External links
              </Text>
              <Text
                onPress={handleHowToTransferPress}
                style={styles.linkText}
              >
                How to transfer data to a new device
                </Text>
              <Text
                onPress={handlePrivacyPolicyPress}
                style={styles.linkText}
              >
                Privacy Policy
              </Text>
              <Text
                onPress={handleAboutPress}
                style={styles.linkText}
              >
                About Jours
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

SetingsCustomScreen.navigationOptions = {
  header: null,
};

function handleHowToTransferPress() {
  WebBrowser.openBrowserAsync(
    'https://google.com'
  );
};

function handlePrivacyPolicyPress() {
  WebBrowser.openBrowserAsync(
    'https://facebook.com'
  );
};

function handleAboutPress() {
  WebBrowser.openBrowserAsync(
    'https://instagram.com'
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 30,
    paddingBottom: 15,
  },

  arrowImage: {
    position: 'absolute',
    right: 5,
    bottom: 11,
    transform: [
      {scale: 0.7}
    ],
    zIndex: 9,
  },

  modalDropdownStyle: {
    position: 'relative',
    zIndex: 1,
  },

  containerInner: {
    flex: 0.9,
  },

  // mainModalDropdown: {
  //   position: 'relative',
  //   zIndex: 1,
  // },

  switchLinearGradient: {
    borderRadius: Platform.OS === 'ios' ? 20 : 16,
    padding: Platform.OS === 'ios' ? 5 : 0,
  },

  dayTitleView: {
    flex: 0.1,
  },

  dayTitleText: {
    fontFamily: 'roboto-300',
    fontSize: 27,
    letterSpacing: 0.6,
    color: '#8B8B8B',
    paddingLeft: 15,
  },

  mainWrapperView: {
    flex: 0.9,
    paddingLeft: 15,
    paddingRight: 15,
  },

  mainView: {
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
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },

  inputGroupWrapperView: {
    flex: 0.6,
  },

  inputGroupView: {
    marginBottom: 10,
    position: 'relative',
  },

  labelText: {
    fontFamily: 'roboto-300',
    fontSize: 16,
    lineHeight: 19,
    color: '#747693',
  },

  mainInput: {
    fontFamily: 'quicksand-500',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.55,
    color: '#747693',
    borderBottomWidth: 3,
    borderBottomColor: '#F0F0F0',
  },

  mainSettingsView: {
    flex: 0.15,
  },

  mainSettingsItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  mainSettingsItemLeftView: {
    // flex: 0.7,
  },

  mainSettingsItemRightView: {
    // flex: 0.3,
  },

  mainSettingsItemRightText: {
    textAlign: 'right',
    alignSelf: 'stretch',
  },

  externalLinksView: {
    flex: 0.25,
  },

  externalLinksTitleText: {
    fontFamily: 'roboto-700',
    fontSize: 16,
    lineHeight: 19,
    color: '#747693',
    marginBottom: 5,
  },

  linkText: {
    fontFamily: 'roboto-300',
    textDecorationLine: 'underline',
    fontSize: 16,
    lineHeight: 19,
    color: '#3682FF',
    marginBottom: 6,
  },
})