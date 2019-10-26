import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        
        <Text style={styles.title}>Shopping{"\n"} Wish List</Text>
                
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddItem')}>
            <View style={styles.addbutton}>
                <Text style={styles.text}>Add an Item</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('List')}>
        <View style={styles.listbutton}>
                <Text style={styles.text}>List of Items</Text>
            </View>
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'turquoise'
    },
    title: {
       color: 'red',
       paddingTop: '20%',
       paddingBottom: '20%',
       fontSize: 50,
       fontWeight: 'bold',
       fontFamily: 'Cochin',
       alignSelf: 'center'
    },
    addbutton: {
        padding: 5,
        height: 150,
        width: 150,  
        borderRadius:100, 
        backgroundColor:'brown',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '10%'
    },
    listbutton: {
        padding: 5,
        height: 150,
        width: 150,  
        borderRadius:100,   
        backgroundColor:'purple',
        alignSelf: 'center',
        justifyContent: "center"
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: '5%',
        color: 'white',
        fontWeight: 'bold'
    }




})
