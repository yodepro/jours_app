import React from 'react';
// import { ExpoConfigView } from '@expo/samples';
import {
  // Image,
  // Platform,
  // ScrollView,
  StyleSheet,
  Text,
  // TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';

export default function RateTheDay1Screen() {
  return (
    <View style={styles.container}>

      <Text style={styles.dayTitleText}>
        May, 12th
      </Text>

      <LinearGradient
        colors={['#3884FF', '#60D7FF']}
        style={styles.mainLinearGradient}     
      >

        <Text style={styles.dayBgText}>
          Another day, another story, Jake.
        </Text>

        <Text style={styles.dayBgTextBold}>
          What’s your level of happiness today?
        </Text>
        

      </LinearGradient>

      <View style={styles.rateParamView}>
        <Text style={styles.rateParamText}>
          <Text style={styles.rateParamNumber}>
            10
          </Text>

          {'\n'}      
          super great
        </Text>
      </View>

      <View style={styles.bottomNavigationView}>
        <Text style={styles.bottomCancelText}>
          Cancel
        </Text>

        <LinearGradient
          colors={['#F734A8', '#F78B79']}
          style={styles.bottomLinearGradient}
        >
          <Text style={styles.dayBgTextBold}>
            Next to health
          </Text>
        </LinearGradient>
      </View>

    </View>
  );
}

RateTheDay1Screen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 30,
  },

  dayTitleText: {
    fontWeight: '300',
    fontSize: 32,
    lineHeight: 37,
    letterSpacing: 0.6,
    color: '#8B8B8B',
  },

  mainLinearGradient: {
    width: '85%',
    borderTopRightRadius: 25,
  },

  dayBgText: {
    fontWeight: '300',
    fontSize: 32,
    lineHeight: 37,
    color: '#FFFFFF',
  },

  dayBgTextBold: {
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 37,
    color: '#FFFFFF',
  },

  rateParamView: {
    backgroundColor: '#fff',
  },

  rateParamText: {
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    color: '#747693',
  },

  rateParamNumber: {
    fontSize: 64,
    lineHeight: 80,
  },

  bottomNavigationView: {
    flex: 1,
    flexDirection: 'row'
  },

  bottomCancelText: {
    width: '51%',
    fontSize: 16,
    lineHeight: 19,
    color: '#C5C4D2',
  },

  bottomLinearGradient: {
    width: '49%',
  },
});