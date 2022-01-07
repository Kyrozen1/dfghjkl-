import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';

export default class List extends React.Component{
  constructor(props){
    super(props);
    this.state={
      text:"",
      displayText:"",
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView/>
        <View>
          <Text style={styles.titleText}>Agenda</Text>
        </View>
        <View style={{marginTop:20}}>
          <TextInput
            onChangeText={text=>{
              this.setState({ text: text });
            }}  
            multiline={true}
            placeholder={"English"}
            value={this.state.text}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.addButton}
            onPress={this.setState({displaytext:this.state.text})}
          >
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{this.state.displayText}</Text>
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
    color:'purple',
  },
  addButton:{
    marginTop:50,
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