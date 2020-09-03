import React from 'react'
import './css-components/App.css';
import Mainnav from "./components/Mainnav"
import Footer from "./components/Footer"
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import {Route , Redirect,Switch} from 'react-router-dom';
function App(){
  return(
    <>
 <Mainnav/>
  <Switch>
  <Route exact path="/" component={Home}/> 
   <Route exact path="/about" component={About} />
   <Route exact path="/contact" component={Contact} />
   <Redirect to='/' />
</Switch>
{/*<Home/>*/}
 <Footer/>
  </>
  );
}
export default App