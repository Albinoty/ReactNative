import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component{
    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.h1}>1</Text>
                <Text style={styles.h1}>2</Text>
                <Text style={styles.h1}>3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    header:{
        height: 100,
      marginTop: 50,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    h1: {
      fontSize: 25,
      marginHorizontal: 40,
      color: "#ffb32f"
    
    }
  });