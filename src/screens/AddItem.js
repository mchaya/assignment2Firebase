import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS
} from 'react-native';

import { db } from '../firebase';

let addItem = item => {
  db.ref('/items').push({
    name: item
  });
};

export default class AddItem extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    AlertIOS.alert('Item saved successfully');
  };

  render() {
    return (
      <View style={styles.main}>

        <Image style={styles.image}
            source={require('/Users/michaelchaya/assignment2final_firebase/assets/checklist.png')}
        />


        <Text style={styles.title}>Add Item</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  image: {
    alignSelf: "center",
    width: 300, 
    height: 300,
    resizeMode: 'stretch',
    marginBottom: '10%',
  }
});