import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReckonApp from './components/ReckonApp';
import * as serviceWorker from './components/serviceWorker';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import history from './services/history';

function App(){
  return(
    
    <Router history={history}>
    <div className="App">
          <Route exact path = "/" component = {ReckonApp} />
          {/* <Route exact path = "/home" component = {HomePage} /> */}
        </div>
    </Router>
    
      );
}
const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();