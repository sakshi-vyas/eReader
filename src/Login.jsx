import React, { Component } from "react";
import './Login.css'
import logo1 from './Images/facebook.png';
import { NavLink, Redirect } from 'react-router-dom'

export class Login extends Component {
loginData;
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:''
        }
    }
   
    handleUsernameChange=(event)=>{
this.setState({
    username: event.target.value
})
    }
    handlePasswordChange=(event)=>{
this.setState({
    password: event.target.value
})
    }
    
    handleSubmit=(event)=>{
        event.preventDefault()
        this.loginData =this.state

    }
// --------------------------
    componentDidMount(){
      this.loginData=JSON.parse(localStorage.getItem('user'))
      
      if(localStorage.getItem('user')){
          this.setState({
              username:this.loginData.username,
              password:this.loginData.password
          })
      }
      else{
          this.setState({
              username:'',
              password:''
          })
      }
          }
      
          //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
          componentWillUpdate(nextProps, nextState) {
              localStorage.setItem('user',JSON.stringify(nextState))
          }





  render() {
      const{username,password}= this.state
 const label={
     padding:"padding-left: 15px"
 }

    return (
      
      <>
        <div className="main">
          <form onSubmit={this.handleSubmit} >
            <h1>Log in to Blinkist</h1>
            <div className="formcontainer">
              <hr />
              <div className="container">
                <label for="uname">
                  <strong>Username</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  value={username}
                  onChange={this.handleUsernameChange}
                  required
                />
                <label for="psw">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  onChange={this.handlePasswordChange}
                  value={password}
                  required
                />
              </div>
              <button type="submit">Login</button>
              <div className="socialmedia">
                  <div className="socialpara">
                  <h5>or Login with</h5>
                  </div>
                  <div className="socialbtn">
              <button className="fb ">facebook</button>
              <button className="gg">google</button>
              </div></div>
              <div className="tosignup">
              <NavLink to="/Signup" >Don't have an account</NavLink>
              </div>
              <div className="container">
                <label style={label}>
                  <input type="checkbox" checked="checked" name="remember" />{" "}
                  Remember me
                </label>
                <span className="psw">
                  <a href="#"> Forgot password?</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default Login;