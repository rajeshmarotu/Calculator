import React, { Component } from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles.js';

export default class Digit extends Component{
  
  render(){
    return(
        <View style={styles.digit}>
            <Text style={{fontSize:25}}>
              {this.props.value}
            </Text>
        </View>
      );
  }
}