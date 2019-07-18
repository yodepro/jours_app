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
  // TextInput,
  // Picker
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

export default class InitialSetup3Screen extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: 'Jake',
    //   gender: 'Other',
    //   birthdate: '17.03.96',
    //   reminder: '9:30',
    // };
  }

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
                Next
              </Text>
            </View>

            <View style={styles.topInnerView}>
              <Text style={styles.dayBgText}>
                What is your gender?
              </Text>
              <ModalDropdown
                defaultValue='Other'
                options={['Other', 'Male', 'Female']}
                dropdownTextStyle={[styles.mainInput, styles.mainInputDropdown]}                 
                textStyle={styles.mainInput}
                dropdownStyle={{width:'90%'}}
              />
                {/* <ModalDropdown
                  defaultValue='Other'
                  dropdownTextStyle={styles.mainInput}                 
                  textStyle={styles.mainInput}
                  dropdownStyle={{width:'85%', height:'auto'}}
                  options={['Other', 'Male', 'Female']}                  
                /> */}

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

  mainInputDropdown: {
    color: '#747693',
  },  
});