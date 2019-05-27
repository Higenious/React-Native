import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';


import  Login from './src/pages/login';
import  SignUp from './src/pages/signup';
import Routes from './src/routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <SignUp/>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   backgroundColor:'#607d8b',
   flex: 1,
   alignItems :'center',
   justifyContent :'center'
  },
});
