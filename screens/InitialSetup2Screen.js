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
  TextInput,
} from 'react-native';

export default class InitialSetup2Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jake',
      gender: 'Other',
      birthdate: '17.03.96',
      reminder: '9:30',
    };
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
                onPress={() => this.props.navigation.navigate('InitialSetup3')}
              >
                Next
              </Text>
            </View>

            <View style={styles.topInnerView}>
              <Text style={styles.dayBgText}>
                What's you birth date?
              </Text>
              <TextInput
                style={styles.mainInput}
                onChangeText={(birthdate) => this.setState({ birthdate })}
                value={this.state.birthdate}
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
    backgroundColor: 'red',
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
    fontWeight: '300',
    // fontSize: 32,
    // lineHeight: 37,
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center',
  },

  dayBgTextBold: {
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
    textAlign: 'right',
  },

  mainInput: {
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 27,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});