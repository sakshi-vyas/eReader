import React from 'react'
import '../css-components/Nav.css'
import img from "../Images/finalLogo.png"

import { NavLink } from 'react-router-dom'
const Navbar=()=> {
    return (
        <>
{/* navbar starts here */} 
<div className="container-fluid nav_bg">
    <div className='row'>
    <div className='col-10  mx-auto '>
   
<nav className="navbar navbar-expand-lg navbar-light bg-light respo">
  <NavLink exact className="navbar-brand" to="/"><img src={img} style={{height:"50%", width:"50%"}}/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    
      <li className="nav-item">
        <NavLink className="nav-link nav-btn" to="/" id='login'>Home</NavLink>
      </li>
      <li className="nav-item  ">
        <NavLink className="nav-link nav-btn" to="/about"  id='signup'>About</NavLink>
      </li>
      <li className="nav-item  ">
        <NavLink className="nav-link nav-btn" to="/contact"  id='signup'>Contact</NavLink>
      </li>
     
     
     
    </ul>

  </div>
</nav>


</div>
    </div>
</div>
{/* navbar ends here */}
        </>
    )
}

export default Navbar
