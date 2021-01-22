import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,KeyboardAvoidingView,ToastAndroid, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'


export default class WriteRecepieScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
          
            RecepieText: '',
        }
    }

    submitRecepie = ()=>{
        db.collection("recepies").add({
            title: this.state.title,
           
            RecepieText: this.state.RecepieText,
           
        })
        this.setState({
            title: '',
          
            RecepieText: ''
        })
        ToastAndroid.show('Your recepie has been sumitted', ToastAndroid.SHORT)
    }

    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Header
                    backgroundColor = {'pink'}
                    centerComponent = {{
                        text : 'Recepies App',
                        style : { color: 'white', fontSize: 20}
                    }}
                />
                <TextInput
                    placeholder="Recepie Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
               
                <TextInput
                    placeholder="Write your recepie"
                    onChangeText= {(text)=>{
                        this.setState({
                            RecepieText: text
                        })
                    }}
                    value={this.state.RecepieText}
                    style={styles.storyText}
                    multiline={true}/>

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitRecepie}
                    >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      padding: 10,
      margin:10
  },
  author: {
      height: 40,
      borderWidth: 2,
      padding: 10,
      margin:10
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      padding:10
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold'
  }
});
