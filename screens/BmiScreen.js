import React,{Component} from "react"
import { Text,View,StyleSheet } from "react-native"

export default class BmiScreen extends Component{

    getBMIResults(bmi){
        let bmiResults = {
          label: [],
          alertClass: [],
        };
        
        if (bmi <= 18.5){
          bmiResults.label = 'Underweight';
          bmiResults.alertClass = 'alert-danger';
        } 
        else if (bmi <= 24.9) {
          bmiResults.label = 'Normal weight';
          bmiResults.alertClass = 'alert-success';
        }
        else if (bmi <= 29.9){
          bmiResults.label = 'Overweight';
          bmiResults.alertClass = 'alert-warning';
        }
        else if (bmi >= 30) {
          bmiResults.label = 'Obesity';
          bmiResults.alertClass = 'alert-danger';
        } else {
          bmiResults.label = 'BMI';
          bmiResults.alertClass = 'alert-primary';
        }
        return bmiResults;
      }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Your BMI is:</Text>
                <Text style={styles.text2}>Health Type:{this.getBMIResults()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:0.5
    },
    text:{
        fontSize:30,
        color:"blue",
        marginLeft:650,
        marginTop:200
    },
    text2:{
        fontSize:30,
        color:"blue",
        marginLeft:650,
        marginTop:100
    }
});