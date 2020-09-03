import React from 'react';
import '../css-components/App.css';
import '../css-components/index.css';
import '../css-components/Categories.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Comp1 from "../components/Comp1";
import CompII from "../components/CompII";
import CompIII from '../components/CompIII';
import Category from '../components/Category';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import New from '../components/New';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Select from 'react-select';

{/*const options = [
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
 }*/}
class Home extends React.Component {
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
       <title>eReader - Read it like you mean it</title>
        <BrowserRouter>
        {/*<Navbar/>*/}
        <br/>
         
            
            <Comp1/>
            <CompII />
            <CompIII/>
            <Category/>
{/*<div className="ctgrs">
    <React.Fragment>
        <div style={myStyle}>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        
    /></div></div>*/}
    <React.Fragment>
  <div className="mt-5">
            <New/>
          </div>
</React.Fragment>

        {/*<Footer/>*/}
        </BrowserRouter>
</>
);
 }}
 export default Home;
