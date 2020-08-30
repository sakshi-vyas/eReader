import React from 'react';
import './index.css';
import './Categories.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Comp1 from "./Comp1";
import CompII from "./CompII";
import CompIII from './CompIII';
import Category from './Category';
import Testimonials from "./Testimonials";
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from "./Footer";
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";

import Select from 'react-select';
import New from './New';
const options = [
  { value: 'cat1', label: 'CATEGORY1' },
  { value: 'cat2', label: 'CATEGORY2' },
  { value: 'cat3', label: 'CATEGORY3' },
  { value: 'cat4', label: 'CATEGORY4' },
  { value: 'cat5', label: 'CATEGORY5' },
  { value: 'cat6', label: 'CATEGORY6' },
];
const myStyle={
    width:"80%",
    margin:"0 auto",
 
}
class App extends React.Component {
    state = {
      selectedOption: null,
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
  
    
    render() {
        const { selectedOption } = this.state;
      
    return(
        <>
       <title>eReader - Books in Blink</title>
        <BrowserRouter>
        <Navbar/>
        <br/>
        
        <Switch>
            <Route exact path="/" component={Home}/> 
             <Route exact path="/about" component={About} />
             <Route exact path="/contact" component={Contact} />
             <Redirect to="/" />
        </Switch>
            <Comp1/>
            <CompII />
            <CompIII/>
            <Category/>
<div className="ctgrs">
    <React.Fragment>
        <div style={myStyle}>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        
      /></div>
  <div className="mt-5">
            <New/>
          </div>
</React.Fragment>
</div>
        {/*<Testimonials />
            {/*<Comp2/>*/}
            <Footer/>
            </BrowserRouter>
</>
);
 }}

export default App;
