import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Picker,
  TextInput,
  Switch,
  Image,
  Platform,
} from 'react-native';
// import ModalSelector from 'react-native-modal-selector'
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { isIphoneX } from '../is-iphone-x';

const genders = [
  {
    label: 'Other',
    value: 'other',
  },
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
];

export default class InitialSetup2Screen extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {
      firstTextInput: null,
      favSport0: null,
      favSport1: null,
      lastTextInput: null,
      favSport5: null,
    };

    this.state = {
      gender: 'Other',
      textInputValue: 'Other',

      numbers: [
        {
          label: '1',
          value: 1,
          color: 'orange',
        },
        {
          label: '2',
          value: 2,
          color: 'green',
        },
      ],
      favSport0: undefined,
      favSport1: undefined,
      favSport2: undefined,
      favSport3: undefined,
      favSport4: 'baseball',
      previousFavSport5: undefined,
      favSport5: undefined,
      favNumber: undefined,
      
    };

    this.InputAccessoryView = this.InputAccessoryView.bind(this);
  }

  InputAccessoryView() {
    return (
      <View style={defaultStyles.modalViewMiddle}>
        <TouchableWithoutFeedback
          onPress={() => {
            this.setState(
              {
                favSport5: this.state.previousFavSport5,
              },
              () => {
                this.inputRefs.favSport5.togglePicker(true);
              }
            );
          }}
          hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <View testID="needed_for_touchable">
            <Text
              style={[
                defaultStyles.done,
                { fontWeight: 'normal', color: 'red' },
              ]}>
              Cancel
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <Text>Name | Prefer</Text>
        <TouchableWithoutFeedback
          onPress={() => {
            this.inputRefs.favSport5.togglePicker(true);
          }}
          hitSlop={{ top: 4, right: 4, bottom: 4, left: 4 }}>
          <View testID="needed_for_touchable">
            <Text style={defaultStyles.done}>Done</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  render() {
    const placeholder = {
      label: 'Select your gender...',
      value: null,
      color: '#9EA0A4',
    };

    let index = 0;
    const data = [
        { key: index++, label: 'Other' },
        { key: index++, label: 'Male' },
        { key: index++, label: 'Female', },
    ];

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
                next >
              </Text>
            </View>
            <View style={styles.topInnerView}>
              <Text style={styles.dayBgText}>
                Would you mind sharing your gender?
              </Text>


              {/* <Text>useNativeAndroidPickerStyle (default)</Text> */}
        {/* and iOS onUpArrow/onDownArrow toggle example */}
        <RNPickerSelect
          style={{
            inputIOS: {
              fontFamily: 'quicksand-500',
              fontSize: 32,
              lineHeight: 37,
              color: '#FFFFFF',
              textAlign: 'center',
            },
            inputIOSContainer: {
              fontFamily: 'quicksand-500',
              fontSize: 32,
              lineHeight: 37,
              color: '#FFFFFF',
              textAlign: 'center',
            },
            inputAndroid: {
              fontFamily: 'quicksand-500',
              fontSize: 32,
              lineHeight: 37,
              color: '#FFFFFF',
              textAlign: 'center',
            },
            inputAndroidContainer: {
              fontFamily: 'quicksand-500',
              fontSize: 32,
              lineHeight: 37,
              color: '#FFFFFF',
              textAlign: 'center',
            },
            iconContainer: {
              top: 5,
              right: 15,
            },
          }}
          useNativeAndroidPickerStyle={false}
          placeholder={placeholder}
          items={genders}
          onValueChange={value => {
            this.setState({
              favSport0: value,
            });
          }}
          onUpArrow={() => {
            this.inputRefs.firstTextInput.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.favSport1.togglePicker();
          }}
          // style={pickerSelectStyles}
          value={this.state.favSport0}
          ref={el => {
            this.inputRefs.favSport0 = el;
          }}
        />




              
      {/* {Platform.OS === 'android'
      ?
      <Picker
  selectedValue={this.state.gender}
  style={{height: 50, width: '70%'}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({gender: itemValue})
  }>
  <Picker.Item label="Other" value="Other" />
  <Picker.Item label="Male" value="Male" />
  <Picker.Item label="Female" value="Female" />
</Picker>
      :
      <ModalSelector
                style={{width: '60%',}}
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
                    style={styles.mainInput}
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
                    }}
                    source={require('../assets/images/arrow-down-2.png')}
                  />
                  </View>
                }
              />
    
    } */}
              



              <View style={styles.paginationView}>
                <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
                <View style={[styles.paginationItemView, styles.paginationItemActiveView]}></View>
                <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
                <View style={[styles.paginationItemView, styles.paginationItemInactiveView]}></View>
              </View>
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
    // textAlign: 'left',
    marginTop: 30,
    // backgroundColor: 'blue',
    width: '100%',
    position: 'relative',
    zIndex: 99,
    // justifyContent: 'space-between',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#333',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});