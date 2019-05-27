import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';


import  Login from './pages/login';
import  SignUp from './pages/signup';

export default class Routes extends React.Component {
  render() {
		return(
			<Router>
			    <Stack key="root">
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={SignUp} title="SignUp"/>
			    </Stack>
			 </Router>
			)
	}
  }
  



