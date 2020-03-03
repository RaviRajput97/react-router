import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact'
import Menu from './Menu'; 
// in the above code importing the compoent Menu that we create always make first letter capital
// in the below code we import files for routng
import {BrowserRouter, Route, Switch} from 'react-router-dom'; //adding library

function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu />
      <Switch>
      <Route path = "/" exact component={Home}/>
      <Route path = "/about" component={About}/>
      <Route path = "/contact" component={Contact}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home = () => {
	return(
		<div className="Contactstyle">
        <h2> Welcome to Home Page</h2>
    </div>
  )
}

export default App;
/*The Route tag is used to re route the URL to a particular path where we are also use
switch that work on switch cased mechanism. BrowserRouter tag is used for the redirection of the 
URL of a brower it always use with Route tag */