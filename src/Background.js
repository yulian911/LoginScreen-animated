import { View, Text,StyleSheet , Dimensions } from 'react-native'
import React from 'react'
import Svg, { Circle } from 'react-native-svg'


const {width ,height} = Dimensions.get('window')

const Background = () => {
  return (
    <View style={[styles.container,{...StyleSheet.absoluteFill}]}>
      <Svg height='100%' width="100%">
          <Circle cx='-10' cy='0' r='120' fill="#2187FB"/>
          <Circle  cx={width} cy={height} r="100" fill="#B8EBFF"/>
      </Svg>
    </View>
  )
}

export default Background

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#F5FBFF'
    },
  });
  