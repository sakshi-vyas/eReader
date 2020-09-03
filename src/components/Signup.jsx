import React, { Component } from 'react'
import './css-components/Signup.css'
import { NavLink, Link } from 'react-router-dom'


export class Signup extends Component {
    userData;
constructor(props) {
    super(props)

    this.state = {
         username:'',
         email:'',
         password:''

    }
}

usernameHandler=(event)=>{
    this.setState({
        username: event.target.value
    })}
passwordHandler=(event)=>{
    this.setState({
        password: event.target.value
    })}
emailHandler=(event)=>{
    this.setState({
        email: event.target.value
    })}

    submitHandler=(event)=>{
        event.preventDefault()
const userData = this.state
    }

    componentDidMount(){
this.userData=JSON.parse(localStorage.getItem('user'))

if(localStorage.getItem('user')){
    this.setState({
        username:this.userData.username,
        email:this.userData.email,
        password:this.userData.password
    })
}
else{
    this.setState({
        username:'',
        email:'',
        password:''
    })
}
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user',JSON.stringify(nextState))
    }
    render() {
        const{username,email,password}= this.state
        
        const label={
            padding:"padding-left: 15px",
        }
        const bc={
            backgroundcolor:"background-color: #eee"
        }
        
        return (
            <>
            <div className="main">
<form method="post" onSubmit={this.submitHandler}>
      <h1>Sign up for free </h1>
      <div class="formcontainer">
      <div class="container">
        <label for="uname"><strong>Username</strong></label>
        <input type="text" placeholder="Enter Username" name="uname"  value={username} onChange={this.usernameHandler} required/>
        <label for="mail"><strong>E-mail</strong></label>
        <input type="email" placeholder="Enter E-mail" name="mail" value={email} onChange={this.emailHandler} required/>
        <label for="psw"><strong>Password</strong></label>
        <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={this.passwordHandler} required/>
      </div>
      <button type="submit"><strong>SIGN UP</strong></button>
      <div className="socialmedia">
                  <div className="socialpara">
                  <h5>or Sign up with</h5>
                  </div>
                  <div className="socialbtn">
              <button className="fb ">facebook</button>
              <button className="gg">google</button>
              </div></div>
      <div class="container" style={bc}>
    
        <div class="psw">
        <NavLink to="/Login" >Already have an account ?</NavLink>
        </div>
      </div>
      </div>
    </form>
    </div>
            </>
        )
    }
}
export default Signup