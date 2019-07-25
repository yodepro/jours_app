import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (

    <View>

    <View style = {styles.date}>
      <Text style = {styles.datetext}>May, 12th</Text>
    </View>

    <LinearGradient 
    colors = {['#FDC344', '#FDE490']}
    style = {styles.box}>

    <View style = {{marginTop: 10}}>
      <Text style = {styles.boxtext1}>
      Nothing wrong in being strong, Jake!
      </Text>
      <Text style = {styles.boxtext2}>
      Dow does your health makes you feel?
      </Text>
    </View>

    </LinearGradient>

    <View style = {styles.centrbox}>
      <View style = {styles.centrtextaling}>
        <Text style = {styles.centrtext1}>2.5</Text>
        <Text style = {styles.centrtext2}>meh</Text>
      </View>

      <View style = {{marginLeft: 40, marginTop: 153, position: 'absolute'}}>
          <Image
          style= {{width: 30, height: 33}}
          source={require('./assets/images/smile2.png')}></Image> 
        </View>

      <View style = {{marginTop: 45, marginLeft: 144, flexDirection: 'row'}}>
        <View style = {styles.slide2}></View>
        <View style = {styles.slide3}></View>
        <View style = {styles.slide4}></View>
        <View style = {styles.slide1}></View>
      </View>
    </View>

    <View style = {{marginTop: 590, marginLeft: 10, position: 'absolute'}}>
        <Text style = {{color: '#C5C4D2'}}>⟵ Back</Text>
      </View>


    <View style = {{marginTop: 170, marginLeft: 173}}>
    <Image
      style= {{width: 187, height: 135, position: 'absolute'}}
      source={require('./assets/images/oct2.png')}>
      </Image>
      <Text style = {styles.boxtext4}>Review the day</Text>
    </View>


    </View>
  );
}

const styles = StyleSheet.create({

  slide1: {
    width: 18,
    height: 3,
    backgroundColor: '#4E53FF',
    borderRadius: 2,
    marginLeft: 2
  },

  slide2: {
    width: 10,
    height: 3,
    backgroundColor: '#C5C4D2',
    borderRadius: 2,
    marginLeft: 2
  },

  slide3: {
    width: 10,
    height: 3,
    backgroundColor: '#C5C4D2',
    borderRadius: 2,
    marginLeft: 2
  },

  slide4: {
    width: 10,
    height: 3,
    backgroundColor: '#C5C4D2',
    borderRadius: 2,
    marginLeft: 2
  },

  centrbox: {
    marginTop: 260, 
    marginLeft: 15,
    width: 330,
    height: 230,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    borderRadius: 11,
    shadowColor: '#3884FF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,

    elevation: 5,
      },

  centrtextaling: {
    marginTop: 20,
    marginLeft: 15,
    width: 300,
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0'
  },

  centrtext1: {
    fontSize: 42,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#747693',
    letterSpacing: 0.6,
    textAlign: 'center',
    marginLeft: 10
    },

  centrtext2: {
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: '100',
    color: '#747693',
    letterSpacing: 0.6,
    textAlign: 'center',
    marginLeft: 10
    },

  box: {
    marginTop: 20,
    width: 250,
    height: 240,
    borderBottomRightRadius: 11,
    borderTopRightRadius: 11
  },

  box2: {
    marginTop: 240,
    marginLeft: 180,
    width: 227,
    height: 180,
    position: 'absolute'
  },

  boxtext1: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '100',
    color: '#FFFFFF',
    margin: 10,
    letterSpacing: 0.6
  },

  boxtext2: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#FFFFFF',
    margin: 10,
    letterSpacing: 0.6
  },

  boxtext3: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#FFFFFF',
    margin: 10,
    letterSpacing: 0.6,
    textDecorationLine: 'underline'
  },

  boxtext4: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 35,
    marginTop: 50,
    letterSpacing: 0.6,
    textDecorationLine: 'underline',
    width: 110
  },

  date: {
    marginTop: 50,
    marginLeft: 10
  },

  datetext: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: '100',
    color: '#8B8B8B',
    textAlign: 'left',
    letterSpacing: 0.6
  }
});