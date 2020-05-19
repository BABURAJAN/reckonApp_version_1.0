import React from 'react';
import '../App.css';
import bgImage from '../images/Reckon.png';

function App() {
    return (
        <div className="App example1">
          <header className="App-header">
            <img src={bgImage} className="App-bg img" alt="logo"/>  
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
          </header>
        </div>    
      );
}

export default App;
