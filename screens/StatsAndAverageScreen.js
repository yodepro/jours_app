import React from 'react';
import {
  Image,
  // Platform,
  // ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function StatsAndAverageScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.dayTitleView}>
        <Text style={styles.dayTitleText}>
          Statistics
          </Text>
          <Image
              source={
                require('../assets/images/export-icon.png')
              }
              style={styles.exportImage}
            />
      </View>

      <View style={styles.twoTilesView}>
        <View style={[styles.smallTileView, styles.smallTileLeftView]}>
          <Text style={styles.smallTileTopText}>
            514
          </Text>
          <Text style={styles.tileBottomText}>
            Days Rated
          </Text>
        </View>

        <View style={[styles.smallTileView, styles.smallTileRightView]}>
          <Text style={styles.smallTileTopText}>
            Sun
          </Text>
          <Text style={styles.tileBottomText}>
            Best Day of the Week
          </Text>
        </View>
      </View>

      <View style={styles.oneTileView}>
        <View style={styles.bigTileView}>
          <Text style={styles.bigTileTopText}>
            Sunday, Sept 12th '19
          </Text>
          <Text style={styles.tileBottomText}>
            The Latest Super Great Day
          </Text>
        </View>
      </View>

      <View style={styles.oneTileView}>
        <View style={styles.bigTileView}>
          <Text style={styles.bigTileTopText}>
            Monday, Sept 13th '19
          </Text>
          <Text style={styles.tileBottomText}>
            The Latest Awful Day
          </Text>
        </View>
      </View>

      <View style={styles.twoTilesView}>
        <View style={[styles.smallTileView, styles.smallTileLeftView]}>
          <Text style={styles.smallTileTopText}>
            354
          </Text>
          <Text style={styles.tileBottomText}>
            Rating Strike
          </Text>
        </View>

        <View style={[styles.smallTileView, styles.smallTileRightView]}>
          <Text style={styles.smallTileTopText}>
            Mon
          </Text>
          <Text style={styles.tileBottomText}>
            Saddest Day of the Week
          </Text>
        </View>
      </View>
    </View>
  );
}

StatsAndAverageScreen.navigationOptions = {
  header: null,
  tabBarVisible: true,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.135,
    paddingLeft: 15,
    paddingRight: 15,
  },

  topView: {
    paddingTop: 30,
    flex: 0.55,
  },

  exportImage: {
    // height: 20,
    // resizeMode: 'cover',
  },

  dayTitleText: {
    fontFamily: 'roboto-300',
    fontSize: 27,
    letterSpacing: 0.6,
    color: '#8B8B8B',    
  },

  twoTilesView: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    flex: 0.35,
  },

  smallTileView: {
    backgroundColor: '#fff',
    flex: 0.5,
  },

  smallTileLeftView: {
    justifyContent: 'center',
    marginRight: 7.5,
    borderRadius: 23,
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
    shadowColor: "#3884ff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 13,
  },

  smallTileRightView: {
    justifyContent: 'center',
    marginLeft: 7.5,
    borderRadius: 23,
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
    shadowColor: "#3884ff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 13,
  },

  smallTileTopText: {
    fontFamily: 'quicksand-500',
    fontSize: 48,
    lineHeight: 70,
    textAlign: 'center',
    letterSpacing: -1.1,
    color: '#747693',
  },

  tileBottomText: {
    fontFamily: 'quicksand-300',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#747693',
  },

  oneTileView: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    flex: 0.35,
  },

  bigTileView: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 23,
    height: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "#3884ff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 13,
  },

  bigTileTopText: {
    fontFamily: 'quicksand-500',
    fontSize: 32,
    lineHeight: 40,
    textAlign: 'center',
    letterSpacing: -0.55,
    color: '#747693',
  },
});