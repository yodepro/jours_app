import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
import Slider from "react-native-slider";
import { isSmallScreen } from "../is-small-screen";

const SMILES = [
  require("../assets/images/roji/1.png"),
  require("../assets/images/roji/2.png"),
  require("../assets/images/roji/3.png"),
  require("../assets/images/roji/4.png")
]

export default class RatingSlider extends React.Component {
  constructor(props) {
    super(props);
    let {value} = this.props
    this.state = { 
      value: value ? value : 0,
      roja: this.getImageSlider(value ? value : 0),
      text: this.getText(value ? value : 0),
      isShow: false
    };
  }
  getImageSlider(value) {
    if(value <= 2.5) {
      return SMILES[0]
    }
    else if(value <= 5) {
      return SMILES[1]
    }
    else if(value <= 7.5) {
      return SMILES[2]
    }
    else {
      return SMILES[3]
    }
  }
  getText(value) {
    if(value <= 1) {
      return "Very bad..."
    }
    else if(value <= 2) {
      return "An unhappy experience..."
    }
    else if(value <= 3) {
      return "Unpleasant!"
    }
    else if(value <= 4) {
      return "It could be better..."
    }
    else if(value <= 5) {
      return "So so..."
    }
    else if(value <= 6) {
      return "Good"
    }
    else if(value <= 7) {
      return "Lovely!!"
    }
    else if(value <= 8) {
      return "Grateful for what happened!"
    }
    else if(value <= 9) {
      return "Exceeding my expectations"
    }
    else {
      return "Amazing!!!"
    }
  }
  _onValueChange(value) {
    this.setState({
      value: Number(value.toFixed(1)), 
      roja: this.getImageSlider(value),
      text: this.getText(value)
    })
  }
  render() {
    let {value, roja, isShow, text} = this.state
    let {style} = this.props
    return (
      <View style={[styles.container,  style]}>
        <Text style={styles.rateParamNumber}>
          {value}
        </Text>
        <Text style={styles.rateParamText}>
          {text}
        </Text>
        <Slider
            style={{width: "100%", height: 40, borderRadius: 100,}}
            minimumValue={0}
            step={0.1}
            value={value}
            maximumValue={10}
            minimumTrackTintColor={"#EBEBF6"}
            thumbImage={roja}
            onSlidingStart={()=> this.setState({isShow: true})}
            onSlidingComplete={()=> this.setState({isShow: false})}
            maximumTrackTintColor={"#EBEBF6"}
            trackStyle={{height: 4, borderRadius: 6}}
            thumbStyle={[{
              backgroundColor: "transparent",  
              height: 85,
              width: 60, 
              borderRadius: 20,
            }, 
               styles.shadow
              
              ]}
            
            onValueChange={(value) => this._onValueChange(value)}
        />
      </View>
      
    )
  } 
}

// const rateParamNumberSize = isSmallScreen() ? 44 : 54;
// const rateParamTextSize = isSmallScreen() ? 44 : 54;

const styles = StyleSheet.create({
  container: {


  },  
  rateParamNumber: {
    fontFamily: 'quicksand-500',
    fontSize: isSmallScreen() ? 44 : 54,
    lineHeight: isSmallScreen() ? 60 : 80,
    textAlign: 'center',
    color: '#747693',
  },
  rateParamText: {
    fontFamily: 'quicksand-500',
    fontSize: isSmallScreen() ? 28 : 32,
    lineHeight: 40,
    textAlign: 'center',
    height: isSmallScreen() ? 50 : 80,
    color: '#747693',
  },
  tooltip_text: {
    fontSize: 10
  },
  tooltipImage: {
    width: 150, 
    height: 90,  
    alignItems: "center", 
    paddingTop: 23,
    position: "absolute",
    top: -60
  },
  shadow: {
    shadowOffset:{  width: 1,  height: 3,  },
    shadowColor: '#ccc',
    shadowOpacity: 0.5,
  },
});
