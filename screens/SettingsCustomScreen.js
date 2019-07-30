import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Picker,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { LinearGradient } from 'expo';
import ModalSelector from 'react-native-modal-selector';
import { isIphoneX } from '../is-iphone-x';

export default class SetingsCustomScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jake',
      gender: 'Other',
      birthdate: '17.03.1996',
      reminder: '9:30',
      isBirthdayPickerVisible: false,
      isAlarmPickerVisible: false,
      receiveNotifications: false,
      storeBackup: false,
      textInputValue: 'Other',
    };
  }

  toggleReceiveNotifications = (value) => {
    this.setState({ receiveNotifications: value })
  }

  toggleStoreBackup = (value) => {
    this.setState({ storeBackup: value })
  }

  showBirthdayPicker = () => {
    this.setState({ isBirthdayPickerVisible: true });
  };
  showAlarmPicker = () => {
    this.setState({ isAlarmPickerVisible: true });
  };

  hideBirthdayPicker = () => {
    this.setState({ isBirthdayPickerVisible: false });
  };
  hideAlarmPicker = () => {
    this.setState({ isAlarmPickerVisible: false });
  };

  handleDatePicked = date => {
    newDate = date.getDate() + "." + parseInt(date.getMonth() + 1) + "." + date.getFullYear();
    this.setState({ birthdate: newDate });
    this.hideBirthdayPicker();
  };

  handleTimePicked = date => {
    newTime = date.getHours() + ':' + date.getMinutes();
    this.setState({ reminder: newTime });
    this.hideAlarmPicker();
  };

  render() {
    let index = 0;
    const data = [
        { key: index++, label: 'Other' },
        { key: index++, label: 'Male' },
        { key: index++, label: 'Female', },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.dayTitleView}>
          <Text style={styles.dayTitleText}>
            Settings
          </Text>
        </View>
        <View style={styles.mainWrapperView}>
          <View style={styles.mainBgImageWrapper}>
            <Image
              style={styles.mainBgImage}
              source={require('../assets/images/settings-bg.png')}
            />
          </View>
          <View style={styles.mainView}>
            <View style={styles.inputGroupWrapperView}>
              <View style={styles.inputGroupView}>
                <Text style={styles.labelText}>
                  How shall I call you?
                </Text>
                <TextInput
                  style={[styles.mainInput, 
                    {
                          borderBottomWidth: 3,
    borderBottomColor: '#F0F0F0',
                    }]}
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name}
                />
              </View>
              <View style={styles.inputGroupView}>
                <Text style={styles.labelText}>
                  What's your gender?
                </Text>
                {
                  Platform.OS === 'android'
                ?
                <View style={{borderBottomWidth: 3, borderBottomColor: '#F0F0F0',}}>
                <Picker
                selectedValue={this.state.gender}
                style={{height: 50, width: '100%', }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({gender: itemValue})
                }>
                <Picker.Item label="Other" value="Other" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
              </View>
              :
              <ModalSelector
                style={{
                  width: '100%',
                  borderBottomWidth: 3,
                  borderBottomColor: '#F0F0F0',
                }}
                data={data}
                ref={selector => { this.selector = selector; }}
                onChange={(option)=>{ this.setState({textInputValue:option.label})}}
                customSelector={
                  <View style={{
                    flexDirection: 'row',
                    justifyContent:'space-between',
                    position: 'relative',
                  }}>
                  <Text
                    style={[styles.mainInput, styles.mainGenderInput]}
                    onPress={() => this.selector.open()}                        
                  >
                    {this.state.textInputValue}
                  </Text>
                  <Image
                    style={{
                      position: 'absolute',
                      right: 0,
                      bottom: 10,
                      zIndex: 1,
                      width: 20,
                      resizeMode: 'contain',
                    }}
                    source={require('../assets/images/arrow-down-1.png')}
                  />
                  
                  </View>
                }
              />
                }
                {/* <Picker
                  selectedValue={this.state.gender}
                  style={{ height: 50, width: '100%', color: '#747693', fontSize: 30, }}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ gender: itemValue })
                  }>
                  <Picker.Item label="Other" value="Other" />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker> */}
              </View>
              <View style={styles.inputGroupView}>
                <Text style={styles.labelText}>
                  What's your birth date?
                </Text>
                <View style={{
                  // width: '100%',
                  borderBottomWidth: 3,
                  borderBottomColor: '#F0F0F0',
                }}>
                <Text
                  style={styles.mainInput}
                  onPress={this.showBirthdayPicker}
                >
                  {this.state.birthdate}
                </Text>
                <DateTimePicker
                  isVisible={this.state.isBirthdayPickerVisible}
                  onConfirm={this.handleDatePicked}
                  onCancel={this.hideBirthdayPicker}
                  mode={'date'}
                />
              </View>
              </View>
              <View style={styles.inputGroupView}>
                <View style={{     
                  borderBottomWidth: 3,
    borderBottomColor: '#F0F0F0',
  }}>
                <Text style={styles.labelText}>
                  What time shall I remind you of a rating?
                </Text>
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
              </View>
            </View>
            <View style={styles.mainSettingsView}>
              <View style={[
                styles.mainSettingsItemView,
                { marginBottom: 5 },
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
                      trackColor={{ false: 'transparent', true: 'transparent' }}
                      onValueChange={this.toggleReceiveNotifications}
                      value={this.state.receiveNotifications}
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

const mainPaddigTop = isIphoneX() ? 45 : 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: mainPaddigTop,
    paddingBottom: 35,
  },

  mainBgImageWrapper: {
    position: 'absolute',
    height: '100%',
    width: '70%',
    left: 0,
    textAlign: 'right',
  },

  mainBgImage: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    left: 0,
    top: 0,
    position: 'relative',
  },

  switchLinearGradient: {
    borderRadius: Platform.OS === 'ios' ? 20 : 16,
    padding: Platform.OS === 'ios' ? 5 : 0,
  },

  dayTitleView: {
    flex: 0.1,
    marginTop: 10,
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
    position: 'relative',
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
    // borderBottomWidth: 3,
    // borderBottomColor: '#F0F0F0',
    zIndex: 80,
    width: '100%',
  },

  mainGenderInput: {
    width: '100%',
    zIndex: 99,
  },

  mainSettingsView: {
    flex: 0.15,
  },

  mainSettingsItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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