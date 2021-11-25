import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About'
import Ticket from './components/Ticket'
import Home from './components/Home'
//import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Account from './components/Account';

//import "bootstrap/dist/css/bootstrap.css";



import { BrowserRouter, Route,Routes } from 'react-router-dom';
const rootElement = document.getElementById("root");
ReactDOM.render(
  // <BrowserRouter>
  // <Routes>
  //   <Route path ='/' element = {<App />} > </Route>
  //   <Route path = "About" element = {<About />}/>
  // </Routes>
  // </BrowserRouter>
  <BrowserRouter>
     <Routes>
            <Route  path = "/" element = {<App/>} />
            <Route  path='/about' element = {<About/>}/>
            <Route  path='/home' element = {<Home/>}/>
            <Route  path='/ticket' element = {<Ticket/>}/>
            <Route  path='/login' element = {<Login/>}/>
            <Route  path='/contact' element = {<Contact/>}/>
            <Route  path='/signup' element = {<Signup/>}/>
            <Route  path='/account' element = {<Account/>}/>
     </Routes>
       {/* <App /> */}
  </BrowserRouter>,
   
   rootElement
   );
//ReactDOM.render(<Counter/>, document.getElementById("root"));
