import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import '../App.css';

class Register extends Component {
  constructor(props){
    super(props);
      this.state={
        first_name:'',
        last_name:'',
        user_name:'',
        e_mail:'',
        password_original:'',
        confirm_password:'',
        contact_number:'',
        address_1:'',
        address_2:'',
        user_country:'',
        user_state1:'',
        user_district:'',
        user_pincode:'',
        user_gender:'Female',
    submitted: false,
  }
}

handleSubmit = () => {
  this.setState({ submitted: true }
  );
}


  handleClick(event,role){
    console.log("::::: going to register ::::::");
    var apiBaseUrl = "http://localhost:4000/users/";
    // console.log("values in register handler",role);
    var self = this;
    console.log("this.state ::::::::: ",this.state);
    //To be done:check for empty values before hitting submit
    // if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.user_name.length>0 
    //   && this.state.email.length>0 && this.state.password.length>0){
      var payload={
      "firstName": this.state.first_name,
      "lastName":this.state.last_name,
      "username":this.state.user_name,
      "email":this.state.e_mail,
      "password":this.state.password_original,
      // "confirmPassword":this.state.confirm_password,
      "contactNumber":this.state.contact_number,
      "address1":this.state.address_1,
      "address2":this.state.address_2,
      "country":this.state.user_country,
      "state":this.state.user_state1,
      "district":this.state.user_district,
      "pincode":this.state.user_pincode,
      "gender":this.state.user_gender
      }
      console.log(" api :::: ",apiBaseUrl+'register');
      console.log("payload >>>>>> ",payload );
      axios.post(apiBaseUrl+'register', payload)
     .then(function (response) {
       console.log(response);
       if(response.status === 201){
        console.log("registration successfull");
        alert("registration successfull !");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} role={role}/>);
         var loginmessage = "Not Registered yet. Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
          });
       }
       else{
         console.log("some error ocurred",response.data.code);
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    // }
    // else{
    //   alert("Input field value is missing");
    // }

  }

  render() {
    // console.log("props",this.props);
    //const { formData, submitted } = this.state;
    var userhintText,userLabel;
    if(this.props.role === "reckonuser"){
      userhintText="Enter your reckonuser name";
      userLabel="User Name";
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar title="Register" />
          <ValidatorForm ref="form" >
             <div>
           <TextField required hintText="Enter your First Name" floatingLabelText="First Name" label="Required"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <TextField required hintText="Enter your Last Name" floatingLabelText="Last Name" label="Required"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <TextField required hintText={userhintText} floatingLabelText={userLabel} label="Required"
             onChange = {(event,newValue) => this.setState({user_name:newValue})}
             />
             <br/>
             <TextField required hintText="Enter your email" floatingLabelText="Email" label="Required"
             onChange = {(event,newValue) => this.setState({e_mail:newValue})}
             />
           <TextField required type = "password" hintText="Enter your Password" floatingLabelText="Password" label="Required"
             onChange = {(event,newValue) => this.setState({password_original:newValue})}
             />
             <TextField required type = "password" hintText="Confirm Password" floatingLabelText="Confirm Password" label="Required"
             onChange = {(event,newValue) => this.setState({confirm_password:newValue})}
             />
           <br/>
           <TextField required hintText="Enter your Contact Number" floatingLabelText="Contact Number" label="Required"
             onChange = {(event,newValue) => this.setState({contact_number:newValue})}
             />
             <TextField required hintText="Enter your Address Line 1" floatingLabelText="Address Line 1" label="Required"
             onChange = {(event,newValue) => this.setState({address_1:newValue})}
             />
             <TextField hintText="Enter your Address Line 2" floatingLabelText="Address Line 2" 
             onChange = {(event,newValue) => this.setState({address_2:newValue})}
             />
             <br/>
             <TextField required hintText="Country" floatingLabelText="Country" label="Required"
             onChange = {(event,newValue) => this.setState({user_country:newValue})}
             />
             <TextField required hintText="State" floatingLabelText="State" label="Required"
             onChange = {(event,newValue) => this.setState({user_state1:newValue})}
             />
             <TextField required hintText="District" floatingLabelText="District" label="Required"
             onChange = {(event,newValue) => this.setState({user_district:newValue})}
             />
             <br/>
             <TextField required hintText="Pincode" floatingLabelText="Pincode" label="Required"
             onChange = {(event,newValue) => this.setState({user_pincode:newValue})}
             />
             <TextField required hintText="Gender" floatingLabelText="Gender" label="Required"
             onChange = {(event,newValue) => this.setState({user_gender:newValue})}
             />
             <br/>
             {/* <div>
             <FormControl >
              <InputLabel id="demo-simple-select-label" >Gender</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select"
                onChange={(event,newValue) => this.setState({user_gender:newValue})}>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
              </Select>
             </FormControl>
             </div> */}
           <RaisedButton label="Submit" type = "submit" primary={true} style={style} 
           onClick={(event) => this.handleClick(event,this.props.role)}/>
           {/* onClick={(event) => this.handleClick(event,this.props.role)}/> */}
           </div>
           </ValidatorForm>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default Register;