import React from 'react';
import { StyleSheet, Text, View ,FlatList,ScrollView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Header} from 'react-native-elements';
import db from '../config'




export default class ReadRecepieScreen extends React.Component {
  constructor(){
    super();
    this.state ={
      allRecepies:[],
      dataSource:[],
      search : ''
    }
  }
  componentDidMount(){
    this.retrieveRecepies()
  }

  updateSearch = search => {
    this.setState({ search });
  };


  retrieveRecepies=()=>{
    try {
      var allRecepies= []
      var recepies = db.collection("recepies")
        .get().then((querySnapshot)=> {
          querySnapshot.forEach((doc)=> {
             
              
              allRecepies.push(doc.data())
              console.log('this are the recepies',allRecepies)
          })
          this.setState({allRecepies})
        })
    }
    catch (error) {
      console.log(error);
    }
  };


  SearchFilterFunction(text) {
    const newData = this.state.allRecepies.filter((item)=> {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      search: text,
    });
  }

    render(){
      return(
        <View style ={styles.container}>
           <Header 
                backgroundColor = {'pink'}
                centerComponent = {{
                    text : 'Recepies',
                    style : { color: 'white', fontSize: 20}
                }}
            />
          <View styles ={{height:20,width:'100%'}}>
              <SearchBar
              placeholder="Type Here"
              onChangeText={text => this.SearchFilterFunction(text)}
              onClear={text => this.SearchFilterFunction('')}
              value={this.state.search}
            />
          </View>
          
          <FlatList
                data={this.state.search === "" ?  this.state.allRecepies: this.state.dataSource}
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                    <Text>  Recepie name: {item.title}</Text>
                    <Text>  Recepie : {item.RecepieText}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                /> 
          
          
          
        </View>  
      );      
    }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'pink',
    padding:10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent:'center',
    alignSelf: 'center',
  }
});