import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import  Logo from '../components/logo';
import Form  from '../components/form';
import {Actions} from 'react-native-router-flux';

export default class SignUp extends React.Component {
  render() {
    return (
      <View>
        {/* <Text>Login Here</Text> */}
        <Logo/>
				<Form type="Signup"/>
          <View style={styles.signupText}>
           <Text style={styles.signUpTextser}>Already have an Account?</Text>
           <Text style={styles.signupButton}>Sign in</Text>
        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
    container: {
     backgroundColor:'#b0bec5',
     flexGrow: 1,
     alignItems :'center',
     justifyContent :'center'
    },

    signupText:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },


    signUpTextser:{
        color:'rgba(255,255,255,0.6)',
        fontSize:16,
    },

    signupButton:{
       color:'#ffffff',
       fontSize:16,
       fontWeight:'500',
    }
  });
  