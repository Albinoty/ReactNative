import React from 'react';
import { ScrollView,StyleSheet, Text, View, Button } from 'react-native';
import Header from './assets/components/Header';


export default class App extends React.Component{

  render(){
    
    return (
      <ScrollView>
        <View style={styles.body}>
          <Header/>
          <Button title="Hey" />
          <Text style={styles.h1}>armenfgdgxd fynn</Text>
        </View>
      </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: "#2f2f2f",
    height: 1000
    }, 
});
