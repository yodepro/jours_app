import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  // Image,
  // Platform,
  // ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  Picker,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

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
                <Picker
                  style={{ width: '100%' }}
                  // style={styles.mainInput}
                  selectedValue={this.state.gender}
                  onValueChange={(gender) => this.setState({ gender: gender })}>
                  <Picker.Item label="Other" value="other" />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                </Picker>
                {/* <TextInput
                  style={styles.mainInput}
                  onChangeText={(gender) => this.setState({ gender })}
                  value={this.state.gender}
                /> */}
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
              <View style={styles.mainSettingsItemView}>
                <View style={styles.mainSettingsItemLeftView}>
                  <Text style={styles.labelText}>
                    Receive notifications
                  </Text>
                </View>
                <View style={styles.mainSettingsItemRightView}>
                  <Switch
                    thumbColor={'#266bda'}
                    trackColor={{false:'#5fd4ff', true:'#3987ff'}}
                    onValueChange={this.toggleReceiveNotifications}
                    value={this.state.receiveNotifications}
                  />
                </View>
              </View>
              <View style={styles.mainSettingsItemView}>
                <View style={styles.mainSettingsItemLeftView}>
                  <Text style={styles.labelText}>
                    Store backup at iCloud
                  </Text>
                </View>
                <View style={styles.mainSettingsItemRightView}>
                  <Switch
                    thumbColor={'#266bda'}
                    trackColor={{false:'#5fd4ff', true:'#3987ff'}}
                    onValueChange={this.toggleStoreBackup}
                    value={this.state.storeBackup}
                  />
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

  containerInner: {
    flex: 0.9,
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
  },

  mainSettingsItemLeftView: {
    flex: 0.7,
  },

  mainSettingsItemRightView: {
    flex: 0.3,
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