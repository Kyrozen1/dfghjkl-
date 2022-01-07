import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

export default class Reminder extends React.Component{
  remind=() => {
    const interval = setInterval(() => {
      Alert.alert("Have you completed your tasks yet?");
    }, 1800000);
    return () => clearInterval(interval);
  };
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView/>
        <View>
          <Text style={styles.titleText}>Set Reminder</Text>
        </View>
        <View>
          <Text style={styles.timer}>Every 5 Min</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}
            onPress={()=>this.state.remind}>
            <Text style={styles.text}>SET</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:{
    fontSize:35,
    fontWeight:'bold',
    color:'blue', 
  },
  timer:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:20,
  },
  button:{
    marginTop:20,
    width:100,
    height:40,
    backgroundColor:"red",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  text:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
  }
})