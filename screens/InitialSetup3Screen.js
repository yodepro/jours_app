import React from 'react';
import {
  Image,
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
                next >
              </Text>
            </View>

            <View style={styles.topInnerView}>
            
              <Text style={styles.dayBgText}>
              Would you like to 
sync data with your iCloud? (recommended)
              </Text>
              <View style={styles.topInnerInnerView}>
              <ModalDropdown
                style={styles.modalDropdownStyle}
                defaultValue='Yes, please'
                options={['Yes, please', 'No, thanks']}
                dropdownTextStyle={[styles.mainInput, styles.mainInputDropdown]}                 
                textStyle={styles.mainInput}
                dropdownStyle={{width:'60%'}}
              />
                                        <Image
                            source={
                              require('../assets/images/arrow-down-2.png')
                            }
                            style={styles.arrowImage}
                          />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    color: '#fff',
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
    top: '50%',
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
  },

  mainInputDropdown: {
    color: '#747693',
    textAlign: 'left',
    width: '60%',
    fontSize: 20,
  },  
});