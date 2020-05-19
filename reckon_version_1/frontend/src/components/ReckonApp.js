import React, { Component } from 'react';
import '../App.css';
import LoginScreen from '../components/Loginscreen';
import logo from '../images/reckonlogo.png';
// import bgImage from './images/Reckon.png';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.state = {isGoToLogin: false};
  }

  handleLoginClick() {
    this.setState({isGoToLogin: true});
  }

  handleRegisterClick() {
    this.setState({isGoToLogin: true});
  }

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })               
  }

  render() {

    const isGoToLogin = this.state.isGoToLogin;
    
    if (isGoToLogin) {
      return (
        <div className="App">
          {this.state.loginscreen}
          <div>
            {this.state.loginPage} 
          </div>
        </div>
      );
    }else{
    return (
      <div className="App example1">
        <header className="App-header">
          {/* <img src={bgImage} className="App-bg img" alt="logo"/>   */}
          <img src={logo} className="App-logo" alt="logo" />
            <br></br>
          <a
            className="App-btn btn1"
            href="https://www.linkedin.com/in/rajan-kumar-a5a61b107/"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
          <br></br>
          <a 
            className="App-btn btn2"
            href="#"
            onClick={(event) => this.handleLoginClick(event)}
          >
            Go To Login
          </a>
        </header>
        <div>
			<a className="App-btn btn3"
			href="#" onClick={(event) => this.handleRegisterClick(event)}
			>Register Here</a>
			</div>
      </div>    
    );
    }
  }
}

export default App;