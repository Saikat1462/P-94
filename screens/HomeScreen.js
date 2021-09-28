import React, { Component } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import db from '../config'
import Bmi from "./BmiScreen";

export default class HomeScreen extends Component{

  constructor(){
    super()
    this.state={
      name:"",
      age:"",
      gender:"",
      weight:"",
      height:"",
    }
  }

  userDetails= async ()=>{
    db.collection('userInfo').add({
      name:this.state.name,
      age:this.state.age,
      gender:this.state.gender,
      weight:this.state.weight,
      height:this.state.height,
    });
  } 

  goToBmiScreen=()=>{
    this.props.navigation.navigate('BmiScreen')
  }

  render(){
      return(
        <View style={styles.container}>
          <LinearGradient 
          colors={['yellow', 'blue']} 
          start={{x:0,y: 10}}
          end={{x: 10,y: 0}}
          style={styles.box}
          >
            <TextInput 
              style={styles.inputBox}
              placeholder="Enter Your Name"
              value={this.state.name}
              onChangeText={text=>{
                this.setState({
                  name:text
                })
              }}
            />
            <TextInput 
              style={styles.inputBox}
              placeholder="Age"
              value={this.state.age}
              onChangeText={text=>{
                this.setState({
                  age:text
                })
              }}
            />
            <TextInput 
              style={styles.inputBox}
              placeholder="Gender"
              value={this.state.gender}
              onChangeText={text=>{
                this.setState({
                  gender:text
                })
              }}
            />
            <TextInput 
              style={styles.inputBox}
              placeholder="Weight(In Kgs.)"
              value={this.state.weight}
              onChangeText={text=>{
                this.setState({
                  weight:text
                })
              }}
            />
            <TextInput 
              style={styles.inputBox}
              placeholder="Height(In Cms.)"
              value={this.state.height}
              onChangeText={text=>{
                this.setState({
                  height:text
                })
              }}
            />
          </LinearGradient>
  
          <LinearGradient
            colors={['#c0392b', '#f1c40f', '#8e44ad']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.button}
          >
            <TouchableOpacity
            onPress={()=>{
              this.userDetails();
              this.goToBmiScreen();
            }}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </LinearGradient>
      </View>
    );
  }
}

  
const styles = StyleSheet.create({
  container: {
    flex:0.5
  },
  box: {
    width: '100%',
    height: "100%",
  },
  button: {
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24
  },
  inputBox:{
    height:40,
    borderWidth:1,
    padding:10,
    margin:10,
    backgroundColor: 'rgba(0,0,0,0)'
  },
});