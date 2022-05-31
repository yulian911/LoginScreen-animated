import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Svg, { Line } from 'react-native-svg'
// import Animated, { interpolate } from 'react-native-reanimated';

const LogoContainer = () => {

    // const translateY = interpolate(arrowOpacityAnimation, {
    //     inputRange: [0, 1],
    //     outputRange: [0, 110],
    //   });

  return (
<View
      style={{
        height: 100,
        width: '50%',
        marginTop: 200,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute', 
        // transform: [{translateY}],      
        opacity:1
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Svg height="100%" width="50%">
          <Line
            x1="20"
            y1="10"
            x2="90"
            y2="10"
            stroke="#D9DDDF"
            strokeWidth={1}
          />
        </Svg>
        <Text style={{ color: '#C7C7C7' }}>or</Text>
        <Svg height="100%" width="50%">
          <Line
            x1="10"
            y1="10"
            x2="80"
            y2="10"
            stroke="#D9DDDF"
            strokeWidth={1}
          />
        </Svg>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#E4FCFF',
            width: 35,
            height: 35,
            borderRadius: 15,
            justifyContent:'center',
            alignItems:'center',
            elevation:3
          }}
        >
          <Image
            source={require('../assets/images/google.png')}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#E4FCFF',
            width: 35,
            height: 35,
            borderRadius: 15,
            justifyContent:'center',
            alignItems:'center',
            elevation:3
          }}
        >
          <Image
            source={require('../assets/images/facebook.png')}
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#E4FCFF',
            width: 35,
            height: 35,
            borderRadius: 15,
            justifyContent:'center',
            alignItems:'center',
            elevation:3
          }}
        >
          <Image
            source={require('../assets/images/tweeter.png')}
            style={{ width: 30, height: 30, borderRadius: 15 }}
          />
        </View>
      </View>
    </View>
  )
}

export default LogoContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
      },
})