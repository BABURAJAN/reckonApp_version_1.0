import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import ReckonHome from './ReckonHome';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import { Redirect } from 'react-router';
// import auth from './auth';
// import history from './history';

var apiBaseUrl = "http://localhost:4000/users/";
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginRole:'',
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount(){
  if(this.props.role !== undefined){
    if(this.props.role === 'reckonuser'){
      console.log("in reckonuser componentWillMount");
      this.setState({loginRole:'reckonuser'})
    }
  }
  }

  
  async handleClick(event){  
    var payload={
      "username":this.state.username,
      "password":this.state.password
    } 
      const headerOptions = {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
     
      const authtoken = await axios.post(apiBaseUrl+'authenticate', payload, headerOptions)
      .then(function (auth_data){
        return  auth_data.data.token;
      })
      .catch(function (error) {
        console.log("ERROR while authentication :-  ",error);
      });

      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer '+authtoken
      }

    var self = this;
    // if(this.state.username.length > 0 && this.state.password.length > 0){
    axios.post(apiBaseUrl+'login', payload,{headers:headers})
    .then(function (response) {
      console.log("response >> ",response);  
      if(response.status === 200){
       console.log("Login successfull");
       alert("Login successfull !");   
      // history.push('/home');
       //console.log("to /home");   
      
       self.setState({isLoggedIn: true});
       //return "Login successfull";  
    //    var uploadScreen=[];
    //    uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
    //    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
     else if(response.status === 204){
      console.log("Username password do not match");
       alert("Username password do not match")
     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }    
  })
   .catch(function (error) {
     console.log(error);
   });
  // }else{
  //   alert("Input field value is missing");
  // }
  }
  
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    console.log("in render isLoggedIn >>>>>>>>>>>>>.",isLoggedIn);
    if(isLoggedIn){
      return (
        <div >
          <ReckonHome />
        </div>    
      );
    }
   else if(!isLoggedIn){
      return (
        <div>
          <MuiThemeProvider>
            <div>
          <AppBar title="Login"/>
          <ValidatorForm ref="form" >
        <div>
         <TextField required hintText="Enter your User Name" floatingLabelText="User Name"
           onChange={(event,newValue) => this.setState({username:newValue})}/>
         <br/>
         <TextField required type="password" hintText="Enter your Password" floatingLabelText="Password"
           onChange = {(event,newValue) => this.setState({password:newValue})}/>
           <br/>
           <RaisedButton label="Submit" type = "submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </ValidatorForm>
       </div>
       </MuiThemeProvider>
        </div>
      );
    }
    return null
    }
}

const style = {
  margin: 15,
};

export default Login;