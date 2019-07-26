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
import ModalSelector from 'react-native-modal-selector'


export default class InitialSetup2Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // gender: 'Other',
      textInputValue: 'Other',
    };
  }

  render() {
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
      {Platform.OS === 'android'
      ?
      <Text>ANDROIS</Text>
      :
      <Text>Gay</Text>
    
    }
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
    paddingTop: 45,
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