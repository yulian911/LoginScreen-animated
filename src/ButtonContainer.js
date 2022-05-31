import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'


const {width } = Dimensions.get('window')

const ButtonContainer = () => {
  return (
    <View style={styles.container}>
      <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 1,
            height: 50,
            width: '70%',
            backgroundColor: '#74B5FF',
            elevation: 5,
            borderRadius: 40,
      }}>
          <Text style={{color:'#fff', fontSize:20,fontWeight:'bold' }}>LOGIN</Text>
      </View>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        height: 50,
        width: '70%',
        backgroundColor: '#6070FF',
        elevation: 5,
        borderRadius: 40,
        // position:'absolute', 
      }}>
          <Text style={{color:'#fff', fontSize:20,fontWeight:'bold' }}>SIGNUP</Text>
      </View>
    </View>
  )
}

export default ButtonContainer

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:-30,
        height: 50,
        width,
        justifyContent:'flex-start',
        alignItems:'center'
    }
})