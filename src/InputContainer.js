import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons'




const InputContainer = () => {
  return (
    <View style={[styles.container,{transform:[{translateY:-40}]}]}>
        <View style={{
            backgroundColor:"#D6e8fc" ,
             height:40 ,
             flexDirection:'row' ,
             alignItems:'center',
            //  justifyContent:'space-between',
             borderRadius:40,
             paddingHorizontal:20,
             paddingHorizontal:20,
             
             }}>
            <Feather name='mail' size={25} color='black' />
            <TextInput placeholder='Email' style={{marginLeft:5}}/>
        </View>
        <View style={{
            backgroundColor:"#D6e8fc" ,
             height:40 ,
             flexDirection:'row' ,
             alignItems:'center',
             justifyContent:'space-between',
             borderRadius:40,
             paddingHorizontal:20,
             paddingHorizontal:20,
             
             }}>
                 <View style={{flexDirection:'row'}}>
                    <Feather name='lock' size={25} color='black' />
                    <TextInput placeholder='Password' style={{marginLeft:5}}/>     
                 </View>
                 <Feather name='eye' color='black' size={20} />
        </View>
        <View style={{
            backgroundColor:"#D6e8fc" ,
             height:40 ,
             flexDirection:'row' ,
             alignItems:'center',
             justifyContent:'space-between',
             borderRadius:40,
             paddingHorizontal:20,
             paddingHorizontal:20,
             
             }}>
                 <View style={{flexDirection:'row'}}>
                    <Feather name='lock' size={25} color='black' />
                    <TextInput placeholder='Confirm Password' style={{marginLeft:5}}/>
                 </View>
                 <Feather name='eye' color='black' size={20} />
        </View>
    </View>
  )
}

export default InputContainer

const styles = StyleSheet.create({
    container:{
        width: '70%',
        height: 140,
        justifyContent:'space-between'
    }
})